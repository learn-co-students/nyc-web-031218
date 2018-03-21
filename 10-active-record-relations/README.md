# ActiveRecord Relationships
To set up a relation, the "Single Source of Truth" model must have:
1. In the migration:
```ruby
t.integer :model_id
```
2. In the model:
```ruby
belongs_to :model
```
The other model must have, in it's model class:
```ruby
has_many :models
```

In the symbols, replace model with the name of the model/class you are using. 
