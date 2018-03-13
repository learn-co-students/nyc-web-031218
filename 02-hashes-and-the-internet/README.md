# Hashes and the Internet

### Ruby Review
* Methods/Messages
* Return Values
* Data Structures

### Define

* GET requests
* Server responses
* Developer console
* APIs
* JSON (string formatted as a hash/object)

### Gems
* `rest-client`
* `json`

### Deliverables

* Write an application that takes a search term from a user
* Make a Request to the GoogleBooks API and get back some results
  * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
* Display the titles, author names, and description for each book


```
def run
  welcome
  search_term = get_user_input

  fetch_books(search_term)["items"].each do |book|
    title = get_title(book)
    authors = get_author(book)
    description = get_description(book)

    print_book(title, authors, description)
  end
end
```
