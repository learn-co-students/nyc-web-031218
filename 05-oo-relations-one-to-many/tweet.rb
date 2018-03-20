class Ticket

  attr_reader :message, :user, :

  ALL = []

  def self.all
    ALL
  end

  def initialize(message,user)
    @message = message
    @user = user
    ALL << self
  end

  def username
    self.user.username
  end

end
