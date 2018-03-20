require_relative "UserChannel"

class User
  attr_accessor :name

  ALL = []

  def initialize(name)
    @name = name

    ALL << self
  end

  def self.all
    ALL
  end

  def join_channel(channel)
    UserChannel.new(self, channel)
  end

  def channels
    ucs = UserChannel.all.select do |uc|
      uc.user == self
    end
    ucs.map do |uc|
      uc.channel
    end
  end

  def leave_channel(channel)
    UserChannel.all.delete_if do |uc|
      uc.user == self && uc.channel == channel
    end
    channels
  end

end
