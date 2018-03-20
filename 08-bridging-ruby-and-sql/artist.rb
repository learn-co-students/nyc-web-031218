DB = { :conn => SQLite3::Database.new('./artists.db') }
DB[:conn].results_as_hash = true

class Artist

  attr_accessor :id, :name

  def initialize(id=nil, name)
    # Artist.new(1, "Beyonce")
    # Artist.new("Beyonce")
    @id = id
    @name = name

  end

  # artist = Artist.new("Maroon 5")
  # artist.save
  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, @name)

    # Once we create the artist in SQL, we want to know what its ID will be,
    # which ends up being the highest id that's currently in SQL
    @id = Artist.retrieve_highest_id

    # return this instance in order to provide feedback to the caller
    self
  end

  # Artist.create("name")
  def self.create(name)
    a = Artist.new(name)
    a.save
  end


  # before: Artist.all.find (and then some iterator)
  # after: Artist.find
  def self.find(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=?
    SQL

    response = DB[:conn].execute(sql, id)
    # response is formatted the way sql wants to see the information,
    # but I want to see the information in a ruby-like way
    Artist.transform_sql_response(response)
  end


  # Artist.update(2, "Little Pump")
  # when it's a class method, you must specify the specific artist
  # to update
  def self.update(id, new_name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    # we're passing two arguments after sql to execute, they will replace
    # the "?"s in order
    DB[:conn].execute(sql, new_name, id)

    # need to find the artist to give feedback to the user
    Artist.find(id)
  end

  # lilpump.update("Little Pump")
  # when it's an instance method, you already know the id, so you
  # don't have to specify
  def update(new_name)
    sql = <<-SQL
      UPDATE artists SET name=? WHERE id=?;
    SQL

    DB[:conn].execute(sql, new_name, @id)

    # since this is on an instance, make sure we update that instance
    @name = Artist.find(@id).name
    self
  end

  # it's a class method because once we destroy an instance, it's gone
  # and we don't want to keep it in ruby's memory
  # Artist.destroy(2)
  def self.destroy(id)
    sql = <<-SQL
      DELETE FROM artists WHERE id=?;
    SQL

    DB[:conn].execute(sql, id)
    # i kinda cheated here, in the real world we return true if it worked
    # and false if it didn't
    true
  end


  def self.transform_sql_response(response)
    # [[1, "Beyonce"]]
    f = response.flatten
    # [1, "Beyonce"]
    Artist.new(f[0], f[1])
    # Artist.new(1, "Beyonce")
  end

  def self.retrieve_highest_id
    sql = <<-SQL
      SELECT id FROM artists ORDER BY id DESC LIMIT 1;
    SQL

    # [[2]].flatten gets [2], and [2][0] gets 2
    DB[:conn].execute(sql).flatten[0]
  end
end
