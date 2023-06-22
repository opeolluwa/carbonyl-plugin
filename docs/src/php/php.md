# PHP

## Minify

```php
<?php

use Illuminate\Support\Facades\Http;

$response = Http::withBody(
        '{
  "url":"<url-goes-here>"
}', 'json'
    )
    ->withHeaders([
        'Accept'=> '*/*',
        'User-Agent'=> 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type'=> 'application/json',
    ])
    ->post('https://carbonyl.onrender.com/api/v2/minify');

echo $response->body();
```
