# Intro to ActiveRecord

If you want to wire SQL and Ruby via ActiveRecord, don't forget 3 steps!

1. Make the model class:
```ruby
class Model < ActiveRecord::Base
end
```

2. Make and run the migration:
```
rake db:create_migration NAME=create_model
```
```
def change
  create_table :models do |t|
    t.string :name
  end
end
```
```
rake db:migrate
```

3. VERIFY THE SCHEMA!! (at `db/schema.rb`)
