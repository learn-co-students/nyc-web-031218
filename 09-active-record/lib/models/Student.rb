class Student < ActiveRecord::Base
  def name_caps
    self.name.upcase
  end
end
