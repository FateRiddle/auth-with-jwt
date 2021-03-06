# auth-with-jwt
This is how you setup authentication on server side with `Express` by a few line of code. To keep it simple, no views.

### Prerequisites:

1. Postman (for sending request)
2. node.js

### How to use:

`git clone https://github.com/FateRiddle/auth-with-jwt.git`

`npm install`

then

`npm start`

open http://localhost:3000 to see if the project is running.

open your Postman,

1. `Post localhost:3000/login` with a body of json `{"username":"fate","password":"fate"}`

You'll receive the json web token generated. Try a different username or password, you'll be redirect to `/wrong`

2. `Get localhost:3000/api/something` with a header specified: `authentication`  `Bearer *copy-paste the token you get here*`

You'll get user info as return. Try a different header and you won't get access.

### How it works:

The project is generated with `express-generator`, only dependencies added was `jsonwebtoken` and `express-jwt`

`jsonwebtoken`: generate a json web token with user info.

`express-jwt`: setup a middleware that authenticates if the request sent to the server has the correct json web token.

1. Take a look at `app.js` where you use `express-jwt`.
2. `routes/login` contains login code.
3. `routes/api` contains a normal route that will only be access by those who carries the correct json web token.
