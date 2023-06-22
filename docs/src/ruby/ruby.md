# Ruby

## Minify

```rb
require 'uri'
require 'net/http'

url = URI("http://localhost:3030/api/v2/minify")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request["Accept"] = '*/*'
request["User-Agent"] = 'Thunder Client (https://www.thunderclient.com)'
request["Content-Type"] = 'application/json'
request.body = "{\n  \"url\":\"<url-goes-here>\"\n}"

response = http.request(request)
puts response.read_body
```
