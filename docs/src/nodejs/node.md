# Node.js

```js
const http = require("http");

const options = {
  method: "POST",
  hostname: "localhost",
  port: "3030",
  path: "/api/v2/minify",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ url: "<url-goes-here>" }));
req.end();
```
