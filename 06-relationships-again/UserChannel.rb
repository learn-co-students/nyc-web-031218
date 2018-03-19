class UserChannel

  attr_reader :user, :channel

  ALL = []

  def initialize(user, channel)
    @user = user
    @channel = channel

    ALL << self
  end

  def self.all
    ALL
  end
end
