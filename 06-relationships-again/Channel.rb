require_relative "UserChannel"

class Channel

  attr_accessor :name

  ALL = []

  def initialize(name)
    @name = name

    ALL << self
  end

  def self.all
    ALL
  end

  def users
    # 1. Get All User channels
    # 2. Select the User Channels where the "channel" is the same as "me/self/this instance"
    # 3. Return a new array with those "relevant" user channels and save it in
    # relevant_user_channels
    relevant_user_channels = UserChannel.all.select do |uc|
      uc.channel == self #self is a channel instance
    end

    # Given all "relevant" user channels:
    # 4. map over them, and for each one, retrieve it's internal "user" object
    # 5. Return a new array with those "relevant" user objects, and return that
    # as the result of the function
    relevant_user_channels.map do |uc|
      uc.user
    end
  end

  def eject_user(user)
    UserChannel.all.delete_if do |uc|
      uc.channel == self && uc.user == user
    end
    users
  end

end
