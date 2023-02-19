# USERS ENDPOINTS PROJECT

![image](https://static.vecteezy.com/system/resources/previews/006/895/992/non_2x/computer-laptop-cartoon-illustration-icon-with-empty-lcd-panel-vector.jpg)

## How to use the project

- Install the packages
- npm init -y
- npm i mongoose express dotenv jsonwebtoken joi bcrypt

### Create your .env file

- PORT=**\*\****
- NODE_ENV=**\*\*\***
- MONGO_URI_DEV=**\*\*\***
- MONGO_URI_PROD=**\*\*\***
- JWT_SECRET=**\*\*\***

### Run this program with this command

- npm run dev or npm start

#### How to run on your POSTMAN or any other testing app of your choice

- \*Signup endpoint(POST)\*\*

  > http://localhost:{port_number}/api/v1/signup

- _Login endpoint(POST)_

  > http://localhost:{port_number}/api/v1/signup

- _Logout endpoint(GET)_
  > http://localhost:{port_number}/api/v1/logout
