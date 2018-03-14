require "pry"
#
# {
#   name: "Graham",
#   balance: -7
# }
#
# rishi_bank_account = {
#   name: "Rishi",
#   balace: 10000
# }
#
# p rishi_bank_account[:balance]
#




class BankAccount

  attr_reader :balance


  def initialize(name, balance)

    @name = name
    @balance = balance

    @@all = []
    @@all << self

    puts "hey you initialized me"
  end

  def deposit(amount_to_deposit)
    @balance += amount_to_deposit
  end

  def withdraw(amount_to_withdraw)

    if amount_to_withdraw > @balance
      return false
    else
      @balance -= amount_to_withdraw
      true
    end
  end

  def self.all
   @@all
  end

end


rishi_bank_account = BankAccount.new("Rishi", 10000)
graham_bank_account = BankAccount.new("Graham", -7)

p BankAccount.all



Pry.start
