require 'rss'
require 'open-uri'

class Menu
  def self.display_menu
    url = 'http://static.espncricinfo.com/rss/livescores.xml'
    source = nil
    open(url) do |rss|
      feed = RSS::Parser.parse(rss)
      puts "Title: #{feed.channel.title}"
      feed.items.each_with_index do |item, index|
        puts "#{index} : #{item.title}"
      end
      puts 'input the number that you want to  watch'
      feed_number = gets.chomp
      source = json_url(feed.items[feed_number.to_i].link)
      break
    end
    source
  end

  def self.json_url(html_url)
    html_url.to_s.gsub('.html', '.json')
  end
end
