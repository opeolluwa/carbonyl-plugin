# C lang

<!--about the c lang here-->

## Minify

```c
CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "https://carbonyl.onrender.com/api/v2/minify");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "Accept: */*");
headers = curl_slist_append(headers, "Content-Type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\n  \"url\":\"<url-to-minify>\"\n}");

CURLcode ret = curl_easy_perform(hnd);
```
