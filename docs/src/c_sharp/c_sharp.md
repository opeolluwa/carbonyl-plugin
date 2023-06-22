# C#

## Minify

```c#
var client = new HttpClient();
var request = new HttpRequestMessage();
request.RequestUri = new Uri("https://carbonyl.onrender.com/api/v2/minify");
request.Method = HttpMethod.Post;

request.Headers.Add("Accept", "*/*");

var bodyString = "{  \"url\":\"<url-goes-here>\"}";
var content = new StringContent(bodyString, Encoding.UTF8, "application/json");
request.Content = content;

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```
