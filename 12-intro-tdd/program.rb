def is_palindrome?(word)
  if !word || !word.is_a?(String)
    raise ArgumentError
  end
  tested_word = word.downcase.gsub(/[^0-9a-z]/,"")
  tested_word == tested_word.reverse
end

# 4! = 4*3*2*1 = 24
# 6! = 6*5*4*3*2*1 = 720
# We only support numbers from 0 -> 900
def factorial(x)
  if x == 0
    return 1
  elsif !x || !x.is_a?(Integer) || x < 0 || x > 900
    raise ArgumentError
  end
  (1..x).inject(:*)
  # [1, 2, 3] => (1 * 2) * 3
  # [1, 2, 3, 4] => ((1 * 2) * 3) * 4
end
