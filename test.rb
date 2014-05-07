require 'open-uri'
require 'json'
require 'asciiart'
source = "http://www.espncricinfo.com/indian-premier-league-2014/engine/match/733973.json"
match_data = JSON.load(open(source))
recent = ""
# match_data["live"]["recent_overs"].first.each do |ball|
# 	actual = "0"
# 	if(!ball["ball"].include?('&'))
# 	  actual = ball["ball"]
# 	end
# 	score = ball["extras"]+actual
# 	recent = recent+" "+score
# end
