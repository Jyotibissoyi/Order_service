## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

## Resources


📁 1. Create a .env file

Inside your project root, create a file named:

.env

📝 2. Add your environment variables

Example:

PORT = 3010

DB_URL =  "mongodb://localhost:27017/microservices_db"
replace your Url with above url.


## dummy data

Order creation-

{
    "customerName": "Jyoti",
    "email": "jyoti@gmail.com",
    "products": [
        {
            "productId": "694bbd767176b18d428625e3",
            "quantity": 3
        }
    ]
}
User Creation-
{
    "fullName": "Rahul Sharma",
    "email": "rahul@gmail.com",
    "gender": "Male"
}


