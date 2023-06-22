# Python

Get started with using [Carbonyl API](https://github.com/opeolluwa/carbonyl) in your Python project.

## Table of Contents

- [Health Check](#health-check)
- [Minify URL](#minify-url)
- [Get URL statistics](#url-stat)
- [Update Original URL](#update-original-url)
- [Update ID](#update-id)
- [Delete URL](#delete-url)

### Health Check

The Health check allow you to very the status of our API, this is done by making a `GET` request to the base URL

```py
import http.client

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
}

payload = ""

conn.request("GET", "/", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))

```

### Minify URL

The minify URL request is made to the `/api/<version>/minify` endpoint, via a `POST` request. See example implementation below

```py
import http.client
import json

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "url":"https://google.com" # replace with your url
})

conn.request("POST", "/api/v2/minify", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```

### Get the URL statistics

For an existing shortened link, see the visitation count and the date the last visit wa made

```py

import http.client
import json

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "url":"https://google.com" # replace with your URL
})

conn.request("GET", "/api/v2/minify?id=<you-url-id>", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```

### Update Original URL

To change an original url to another one use this method:

```python
import http.client
import json

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "url":"https://twitter.com", #replace with the new url
  "id":"jMpmTGC2_" #the url ID
})

conn.request("PUT", "/api/v2/minify", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```

### Update ID

For a Shortened Link, you can update the random ID by setting your own, see sample request below

```python

import http.client
import json

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json"
}

payload = json.dumps({
  "id":"jMpmTGC2_", ## the od ID
  "customId":"custom" ## the new ID
})

conn.request("PUT", "/api/v2/minify/set", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```

### Delete URL

To delete an existing short link use this endpoint:

```python
import http.client

conn = http.client.HTTPSConnection("carbonyl.onrender.com")

headersList = {
 "Accept": "*/*",
}

payload = ""

conn.request("DELETE", "/api/v2/minify?id=custom", payload, headersList)
response = conn.getresponse()
result = response.read()

print(result.decode("utf-8"))
```
