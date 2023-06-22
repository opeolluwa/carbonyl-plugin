# Python

## Minify

```py
import http.client
import json

conn = http.client.HTTPSConnection("localhost", 3030)

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "url":"<url-goes-here>"
})

conn.request("POST", "/api/v2/minify", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```
