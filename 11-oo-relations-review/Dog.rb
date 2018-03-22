class Dog

  attr_accessor :name, :color

  ALL = []

  def initialize(name, color)
    @name = name
    @color = color
    ALL << self
  end

  def self.all
    ALL
  end

  def walks
    Walk.all.select {|walk| walk.dog == self}
  end

  def find_longest_walk
    longest_walk_duration = 0
    longest_walk = nil
    walks.each do |walk|
      if walk.duration > longest_walk_duration
        longest_walk_duration = walk.duration
        longest_walk = walk
      end
    end
    longest_walk
  end




end
