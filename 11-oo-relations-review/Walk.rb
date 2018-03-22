class Walk

  attr_accessor :location, :duration
  attr_reader :dog, :dog_walker

  ALL = []

  def initialize(location, duration, dog, dog_walker)
    @location = location
    @duration = duration
    @dog = dog
    @dog_walker = dog_walker

    ALL << self
  end

  def self.all
    ALL
  end

end
