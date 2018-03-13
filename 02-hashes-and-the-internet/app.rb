require 'rest-client'
require 'json'
require 'pry'

def welcome
  puts "Welcome to the book diplay program"
  puts "Hope you're having a great day"
end

def get_user_input
  puts "What kinds of books do you want to see?"
  gets.chomp
end

def fetch_books(search)
  resp = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search}")
  book_info = JSON.parse(resp.body)

  book_info["items"].map do |volume|
    volume["volumeInfo"]
  end
end

def get_title(book)
  book["title"]
end

def get_authors(book)
  book["authors"]
end

def get_description(book)
  book["description"]
end

def print_book(title, authors, description="wahtever")
  # title ||= "No Title"
  if title #Is title not Nil? (Does title exist?)
    puts "Title: #{title}"
  else
    puts "No Title"
  puts "Authors: #{authors.join(", ")}"
  puts "Description: #{description}"
end


def run
  welcome
  # takes a search term from a user
  search_term = get_user_input

  # Make a Request to the GoogleBooks API
  fetch_books(search_term).each do |book|
    title = get_title(book)
    authors = get_authors(book)
    description = get_description(book)
    # Display the titles, author names, and description for each book
    print_book(title, authors, description)
  end
end


run
