require 'open-uri'
require 'json'
require 'asciiart'
require './menu.rb'
source = Menu.display_menu
puts source
#source = 'http://www.espncricinfo.com/india-v-south-africa-2015-16/engine/match/903601.json'
def jsonisque(source)
  last = nil
  loop do
    match_data = JSON.load(open(source))
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
      else
        next
      end
    else
      system "artii 'Event yet to start'"
    end
    sleep(0.1)
  end
end

def post_umpiring_messages(match_data, comment, event)
  puts match_data['match']['team1_name'] + ' v/s ' + match_data['match']['team2_name']
  puts match_data['match']['current_summary']
  puts comment['players']
  system "artii ' " + event + "'"
end

def umpiring(event)
  if event == 'four' || event == 'six' || event == 'out'
     show_umpire(event)
  elsif (event == 'no run')
    show_umpire('norun')
  else
    show_umpire('other')
  end
end

def show_messages(match_data, comment)
  puts match_data['match']['current_summary']
  puts 'most recent over : ' + recent_over_string(match_data)
  puts match_data['live']['status']
  puts comment['text']
  puts comment['post_text']
end

def say_status(comment, runs, wickets)
  system('say -v "Junior" "' + comment['players'] + '"')
  system('say -v "Alex" "' + comment['text'] + '"')
  system('say -v "Alex" "score is"')
  system('say -v "Alex" "' + runs + '"')
  system('say -v "Alex" "for"')
  system('say -v "Alex" "' + wickets + '"')
end

def show_umpire(signal)
  signal_image = signal + '.jpeg'
  puts AsciiArt.new(signal_image).to_ascii_art
end

def recent_over_string(match_data)
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

jsonisque(source)
