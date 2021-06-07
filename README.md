# Karat CC Mock Backend

This repo is the node/express server that serves mocked out data for the [client app](https://github.com/ALIEN-TANG/karat-cc-frontend). It connects to a PostgreSQL database using [Sequelize ORM](https://sequelize.org/master/). Mock data was created via the free [mockeroo platform](https://mockaroo.com/) according to models provided in the [prompt specifications](https://www.notion.so/Frontend-Coding-Challenge-Card-Dashboard-2cca6139563d4f879411f34cd349d884#4f90f94bc8734743aa07b777a3d84eab).

Mock data can be viewed in `data/mock.js`.

## Install

```
$ git clone git@github.com:ALIEN-TANG/karat-cc-backend.git
$ cd karat-cc-backend
$ npm install
```

## Configure app

You will need a `.env` to run the application. A basic `.env-sample` is provided for you to fill out. For now, ping Alex!

```
<!-- .env-sample -->
PORT=6060
DB_HOST=localhost
DB_USER=[[ USE OWN ]]
DB_PASSWORD=[[ USE OWN ]]
DB_DEV=[[ USE OWN ]]
DB_DIALECT=postgres
```

And don't forget to source the variables:

```
$ source .env
```

## Set up development database

This application uses a PostgreSQL database with [Sequelize (v6)](https://sequelize.org/master/) for [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping). To download and install PostgreSQL, see the latest documentation [here](https://www.postgresql.org/download/). I also recommend using [Postico](https://eggerapps.at/postico/) or a similar client for an easier UI to interact with the development database.

Once you have PosgreSQL set up, migrate the models and seed the database with the following commands:

```
$ npm run dev // run once to sync database
$ npm run seed
```

## Running in development

```
$ npm run dev
```

Nodemon will take care of re-compiling your code as you make changes during development.
