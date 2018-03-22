class DogWalker

  attr_accessor :name, :age

  ALL = []

  def initialize(name, age)
    @name = name
    @age = age
    ALL << self

  end

  def self.all
    ALL
  end

  def create_walk(location, duration, dog)
    Walk.new(location, duration, dog, self)
  end

  def walks
    Walk.all.select{|walk| walk.dog_walker == self}
  end

  def dogs
    walks.map{|walk| walk.dog}
  end

end
