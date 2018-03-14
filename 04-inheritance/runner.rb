
class Human

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def have_impostor_syndrome
    puts "euuuurrrrrggghhhhhhhhh"
  end

  def self.all
    @@all
  end

end

class Student < Human

end


class Instructor < Human

  def initialize(name)
    @name = name
    @@all << self
  end

  def have_impostor_syndrome
    puts "heuuuuuuuguhhthhh"
    super
    puts "aiuiiiiiiiiiiiiigh"
  end


  def give_lecture(was_prepared = true)
    unless was_prepared
      have_impostor_syndrome
    end
    puts "#{ self.name }: blah blah blah"
  end

  def self.all
    super
  end


end

class ExperiencedInstructor < Instructor


  def have_impostor_syndrome
    super
    puts "I've felt this way before"
  end

end



graham = Instructor.new("Graham")
rishi = ExperiencedInstructor.new("Rishi")


#graham.give_lecture(false)


adam = Student.new("Adam")

p "adam (student)"
adam.have_impostor_syndrome
p "rishi (Exp Instructor)"
rishi.have_impostor_syndrome
p "graham (instructor)"
graham.have_impostor_syndrome


