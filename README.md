This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate test folder).

Lets take a look inside the `src` folder

- `config` -> In ths folder anything and everything regarding any configurations o: setup of library of modules will be done. For example: setting up `dotenv` so that we can use the enviroment variables anywhere in a cleaner fashion, his is done in the `server-config.js`. One more example can be to setup you logging library taht can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> They are kind of last middleware as post them you call your business layer to execute the business logic. In controller we just receive the incoming request and date and then pass it to the business layer, and once business layer returns an output, we structure the API response in controller and send the output.

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `service` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes etc.

`config for db` -> create a json file inside `src/config` called `config.json`
Inside the config.json
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```