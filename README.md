# Carbonyl

Fast and seamless URL minifier API

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [License](#license)

## Description

## Getting Started

To host the application on your servers, fork the project, afterwards, clone it to your machine and install the dependencies

```sh
git clone https://github.com/<your-github-username>/otter
cd otter
npm install
```

## Prerequisites

The following are required to run the project locally

- [Node.js](https://noddejs.org) - Cross platform JavaScript run time environment
- [npm](https://npmjs.com) - JavaScript package manager
- [MongoDB](https://mongoDB.com) - NoSQL database

## Integration

Get started with cURl

```sh
curl  -X POST \
 'https://carbonyl.conrender.com/api/v2/minify' \
 --header 'Accept: */*' \
 --header 'Content-Type: application/json' \
 --data-raw '{
 "url":"<url-goes-here>"
}'
```

### Language Integration

see the [documentation](https://opeolluwa.github.io/carbonyl) for the following language integration

- [x] Bash
- [x] C
- [x] C#
- [x] Clojure
- [x] Go
- [x] JavaScript
- [x] Kotlin
- [x] Node.js
- [x] PHP
- [x] Python
- [x] Ruby

## Support

## License

This project is proprietary software owned by [Adeoye Adefemi](https://gthub.com/opeolluwa) and distributed inder the [MIT License](./LICENSE)
