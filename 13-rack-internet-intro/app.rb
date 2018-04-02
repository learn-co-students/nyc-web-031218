require "pry"
class App
  def self.call(environment_hash)
    puts "GOT A REQUEST YAY"
    status_code = 200
    header = {}
    body = ['hello'] # or {}

    binding.pry

    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path.match(/hello/)
      resp.write("HELLO WORLD")
    elsif req.path.match("/")
      resp.write("WELCOME HOME")
    else
      resp.write("404 YA DONE GOOFED")
    end

    resp.finish

    # return [status_code, header, body]
  end
end
