require 'open-uri'
require 'json'
require 'asciiart'
require './menu.rb'

class Game
	def self.start
		source = Menu.display_menu
		jsonisque(source)
	end

	def self.display_game_info(match_data, last)
		if !match_data['comms'][0].nil?
	      comment = match_data['comms'][0]['ball'][0]
	      runs = match_data['live']['innings']['runs']
	      wickets = match_data['live']['innings']['wickets']
	      if comment['overs_unique'] != last
	        system('history -c')
	        event = 'waiting ....'
	        unless comment['event'].nil?
	          event = comment['event'].strip.downcase
	        end
	        umpiring(event)
	        post_umpiring_messages(match_data, comment, event)
	        system('say -v "Alex" "' + event + '"')
	        unless (event == 'waiting ....')
	          say_status(comment, runs, wickets)
	        end
	        puts match_data['live']['status']
	        display_score = runs + ' for ' + wickets
	        system "artii '" + display_score + "'"
	        last = comment['overs_unique']
	      end
	    else
	      system "artii 'Event yet to start'"
	    end
	    last
	end

	def self.jsonisque(source)
	  last = nil
	  loop do
	    match_data = JSON.load(open(source))
	    last = display_game_info(match_data, last)
	    sleep(0.1)
	  end
	end

	def self.post_umpiring_messages(match_data, comment, event)
	  puts match_data['match']['team1_name'] + ' v/s ' + match_data['match']['team2_name']
	  puts match_data['match']['current_summary']
	  puts comment['players']
	  system "artii ' " + event + "'"
	end

	def self.umpiring(event)
	  if event == 'four' || event == 'six' || event == 'out'
	     show_umpire(event)
	  elsif (event == 'no run')
	    show_umpire('norun')
	  else
	    show_umpire('other')
	  end
	end

	def self.show_messages(match_data, comment)
	  puts match_data['match']['current_summary']
	  puts 'most recent over : ' + recent_over_string(match_data)
	  puts match_data['live']['status']
	  puts comment['text']
	  puts comment['post_text']
	end

	def self.say_status(comment, runs, wickets)
	  system('say -v "Junior" "' + comment['players'] + '"')
	  system('say -v "Alex" "' + comment['text'] + '"')
	  system('say -v "Alex" "score is"')
	  system('say -v "Alex" "' + runs + '"')
	  system('say -v "Alex" "for"')
	  system('say -v "Alex" "' + wickets + '"')
	end

	def self.show_umpire(signal)
	  signal_image = signal + '.jpeg'
	  puts AsciiArt.new(signal_image).to_ascii_art
	end

	def self.recent_over_string(match_data)
	  recent = ''
	  unless match_data['live']['recent_overs'].last.nil?
	    match_data['live']['recent_overs'].last.each do |ball|
	      actual = '0'
	      unless ball['ball'].include?('&')
	        actual = ball['ball']
	      end
	      score = ball['extras'] + actual
	      recent = recent + ' ' + score
	    end
	  end
	  recent
	end
end
