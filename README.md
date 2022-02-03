# Minifier

A URL minifier built in NodeJs ExpressJS and MySQl using Sequelize ORM

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| **ENVIRONMENT VARIABLE** | **DESCRIPTION**              | **EXAMPLE**              |
| ------------------------ | ---------------------------- | ------------------------ |
| `DB_ACCESS_KEY`          | database connection password | password                 |
| `DB_SCHEMA`              | database name                | minifier                 |
| `DB_USER`                | database user                | root                     |
| `DB_HOST`                | database host                | mysql.example-server.com |

## API Reference

#### 1. Minify a link

```http
 POST /api/minify
```

| **Parameter** | **Type** | **Description**                 | **Example**                 | Output                 |
| :------------ | :------- | :------------------------------ | --------------------------- | ---------------------- |
| `url`         | `string` | **Required**. The URL to minify | https://the-ghost-boxes.com | https:/min.rs/txjDBJkg |

### 2. Set Custom Id on a minified link

This endpoint accept a keyword and the minified link and set the custom keyword on the link

```http
  POST /api/custom-id
```

| Parameter                 | Type               | Description                             | Example                                                        | Output                   |
| :------------------------ | :----------------- | :-------------------------------------- | -------------------------------------------------------------- | ------------------------ |
| `keyword`, `minified url` | `string`, `string` | set custom keyword on the minified link | keyword => invitation, minified link => https:/min.rs/txjDBJkg | https:/min.rs/invitation |

## Development

Build the project

```bash
$ git clone https://github.com/opeolluwa/minifier #clone the project
$ cd minifier #navigate to the project root directory
$ npm install #install project dependencies
$ sequelize db:create #create database tables
$ npm run dev # run the project in development mode
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Demo

Checkout a live [demo](https://minifier.mdbgo.io)
