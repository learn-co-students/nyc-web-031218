require 'pry'
require_relative './tweet.rb'
require_relative './user.rb'

coffee_dad = User.new('coffee_dad')
psl_sister = User.new('psl_sister')

coffee_dad.post_tweet('great coffee today')
coffee_dad.post_tweet('mediocre coffee')
psl_sister.post_tweet('psl season is so farrrrr')
coffee_dad.post_tweet('i really do not like tea')
psl_sister.post_tweet('psl flavored everythingggg')
coffee_dad.post_tweet('awesome # coffee')

Tweet.new('coffee is amazing', coffee_dad)


Pry.start
