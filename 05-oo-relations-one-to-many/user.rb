class Flight

  attr_reader :username

  ALL = []

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def tickets
    ## look at all of the Tweets
    ## collect only the tweets associated to this user
    Ticket.all.select do |tweet|
      tw.user == self
    end
  end

  def manifest
    self.ticket.collect do |ticket|

    end
  end

end
