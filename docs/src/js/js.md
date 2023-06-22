# JavaScript

## Minify

```js
let headersList = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

let bodyContent = JSON.stringify({
  url: "<url-goes-here>",
});

let response = await fetch("https://carbonyl.onrender.com/api/v2/minify", {
  method: "POST",
  body: bodyContent,
  headers: headersList,
});

let data = await response.text();
console.log(data);
```
