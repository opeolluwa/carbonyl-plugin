# Clojure

## Minify

```clojure
(require '[clj-http.client :as client])

(client/post "https://carbonyl.onrender.com/api/v2/minify" {:headers {:Accept "*/*"}
:content-type :json
:form-params {:url "<url-goes-here>"}})
```

```

```
