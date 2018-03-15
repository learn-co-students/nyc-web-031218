class User

  attr_reader :username


  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tweets
    ## look at all of the Tweets
    ## collect only the tweets associated to this user
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

end
