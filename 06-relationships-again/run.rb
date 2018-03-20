require "pry"
require_relative "User"
require_relative "Channel"

rishi = User.new("rishi")
natalie = User.new("natalie")
dick = User.new("dick")

code = Channel.new("all-about-code")
lunch = Channel.new("lunch")
cohort = Channel.new("031218")
social = Channel.new("031218-social")

rishi.join_channel(code)
natalie.join_channel(lunch)
dick.join_channel(code)
rishi.join_channel(cohort)
natalie.join_channel(cohort)

Pry.start
