require 'open-uri'
require 'json'
require 'asciiart'
source = "http://www.espncricinfo.com/indian-premier-league-2014/engine/match/733985.json"
def jsonisque(source)
	last = nil
	while(true)
		match_data = JSON.load(open(source))
		comment = match_data["comms"][0]["ball"][0]
		if comment["overs_unique"] != last
		    system('history -c')
		    event = "waiting ...."
		    if(!comment["event"].nil?)
		     event = comment["event"].strip.downcase
		    end
		    if(event == "four" || event == "six" || event == "out" )
		      show_umpire(event)
		    elsif(event == "no run")
		      show_umpire("norun")
		    else
		      show_umpire("other")
		    end
		    puts match_data["match"]["team1_name"]+" v/s "+match_data["match"]["team2_name"]
		    puts match_data["match"]["current_summary"]
			puts comment["players"]
			system "artii ' "+event+"'"
			system('say -v "Alex" "'+event+'"')
			if(! (event == "waiting ...."))
				system('say -v "Junior" "'+comment["players"]+'"')
				system('say -v "Alex" "'+comment["text"]+'"')
			end
		    puts match_data["live"]["status"]
			last = comment["overs_unique"]
		else
		  runs = match_data["live"]["innings_recent"][0]["runs"]
 		  wickets = match_data["live"]["innings_recent"][0]["wickets"]
    	  display_score = runs+"/"+wickets
 		  display_score
		  system "artii '"+display_score+"'"
		  puts match_data["match"]["current_summary"]
		  puts "most recent over : "+recent_over_string(match_data)
		  puts match_data["live"]["status"]
		  puts comment["text"]
		  puts comment["post_text"]
		end
		sleep(1)
	end
end
def show_umpire(signal)
	path = ""
	signal_image = signal+".jpeg"
	fullpath = path+signal_image
	score = AsciiArt.new(fullpath)
	puts score.to_ascii_art
end
def recent_over_string(match_data)
	recent = ""
    match_data["live"]["recent_overs"].last.each do |ball|
	actual = "0"
		if(!ball["ball"].include?('&'))
	 	 actual = ball["ball"]
		end
	score = ball["extras"]+actual
	recent = recent+" "+score
	end
	recent
end
jsonisque(source)
