require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


def num_points_scored(player_name)
  # get a list of all the players
  # find the player whose name matches the argument 'player_name'
  # return that player's points
  find_player(player_name)[:points]
end

def num_slam_dunks(player_name)
  # get a list of all the players
  players = get_players
  # find the player whose name matches the argument 'player_name'

  # return that player's slam dunks
end

def find_player(player_name)
  get_players.find do |p|
    player_name == p[:player_name]
  end
end


def get_players
  players = game_hash.map do |name, team|
    team[:players]
  end
  # [[p1, p2, p3], [p4, p5, p6]]
  players.flatten
end

def player_with_longest_name_each
  players = get_players
  longest = players[0]
  players.each do |p|
    if p[:player_name].length > longest[:player_name].length
      longest = p
    end
  end
  longest
end


def player_with_longest_name_sort_by
  players = get_players
  sorted_players = players.sort_by {|p| p[:player_name].length }
  sorted_players[sorted_players.length-1]
end

def player_with_longest_name_max
  players = get_players
  players.max_by { |p| p[:player_name].length }
end

# # EXERCISE
# # What do the following return?
#
# arr = (1..100).to_a
#
# arr.map do |num|
#   num.even?
# end
#
# arr.select do |num|
#   7
# end


# WAYS TO ITERATE:
# Loops: for loop, each,
# Compositions: map/collect, select
# Search: find (stops when it finds an element), include, any

[]

[1, 2, 3].map do |item|
  item[0]
  item
end

[1, 2, 3].select do |item|
  item % 2 == 0
end

# [2]

[1,2,3].find do |item|
  item == 3
end


# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Rishi', hometown: 'North Brunswick, NJ', mood: 'excited'},
  {name: 'Graham', hometown: 'Oak Park, IL', mood: 'satisfied'},
  {name: 'Natalie', hometown: 'Bogota, NJ', mood: 'energized'},
  {name: 'Dick', hometown: 'Novi, MI', mood: 'awesome'}
]

def get_names(instructors)
  instructors.map do |i|
    i[:name]
  end
end

def select_rishi(instructors)
  instructors.select do |i|
    i[:name] == 'Rishi'
  end
end

rishi = select_rishi(instructors)
names = get_names(instructors)
rishi = names.select {|name| name=='Rishi'}
