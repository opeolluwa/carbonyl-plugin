# Kotlin

## Minify

```kotlin

val client = OkHttpClient()

val mediaType = MediaType.parse("application/json")
val body = RequestBody.create(mediaType, "{\n \"url\":\"<url-goes-here>\"\n}")
val request = Request.Builder()
.url("https://carbonyl.onrender.com/api/v2/minify")
.post(body)
.addHeader("Accept", "_/_")
.addHeader("Content-Type", "application/json")
.build()

val response = client.newCall(request).execute()

```
