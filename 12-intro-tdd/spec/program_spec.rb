require_relative "../program.rb"
require "pry"

describe "is_palindrome?" do
  # write your tests here!

  # it "some description" do
  #   # whatever code you write to test goes here
  # end

  #EXPECTED INPUT / OUTPUT

  it 'should return true if given "hannah" (even # of letters)' do
    expect(is_palindrome?("hannah")).to be(true)
  end

  it 'should return tru if given "racecar" (odd # of letters)' do
    expect(is_palindrome?("racecar")).to be(true)
  end

  it 'should return false if given "palindrome"' do
    expect(is_palindrome?("palindrome")).to be(false)
  end

  # EDGE CASES

  it 'should handle spaces in the input string' do
    expect(is_palindrome?("a man a plan a canal panama")).to be(true)
    expect(is_palindrome?("hello world")).to be(false)
  end

  it 'should handle special characters in the input string' do
    expect(is_palindrome?("råcecår")).to be(true)
    expect(is_palindrome?("råce")).to be(false)

  end

  it 'should not care about capitalization' do
    expect(is_palindrome?("RaceCar")).to be(true)
    expect(is_palindrome?("Race")).to be(false)
  end

  it "should not care about new line characters" do
    expect(is_palindrome?("a\nman\na\nplan\na\ncanal\npanama")).to be(true)
    expect(is_palindrome?("hello\nworld")).to be(false)
  end

  it "should not care about punctuation" do
    expect(is_palindrome?("a man a plan, a canal panama")).to be(true)
    expect(is_palindrome?("hello, world")).to be(false)
  end

  # UNEXPECTED INPUT

  it 'should raise error if given nil' do
    expect { is_palindrome?(nil) }.to raise_error(ArgumentError)
  end

  it 'should raise error if not given a string' do
    expect { is_palindrome?(1) }.to raise_error(ArgumentError)
  end

end

describe "factorial" do

  # EXPECTED INPUT / OUTPUT

  it "should return 24 if given 4" do
    expect(factorial(4)).to be(24)
  end


  it "should handle the largest input" do
    expect(factorial(900)).to be_an(Integer)
  end

  # EDGE CASES

  it "should return 1 if given 0" do
    expect(factorial(0)).to be(1)
  end

  # UNEXPECTED INPUT

  it "should raise error if not given an integer" do
    expect { factorial("hello") }.to raise_error(ArgumentError)
    expect { factorial(nil) }.to raise_error(ArgumentError)
    expect { factorial(10.5) }.to raise_error(ArgumentError)
  end

  it "should raise error if given a negative number" do
    expect { factorial(-100) }.to raise_error(ArgumentError)
  end

  it "should raise error if the number is too large" do
    expect { factorial(901)}.to raise_error(ArgumentError)
  end

end
