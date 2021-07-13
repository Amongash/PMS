# Parcel Management System

This is a simple implementation of a Parcel Management System built on top of React and NodeJS.
The client folder represents the frontend while the server folder represents the backend.

To run the applications, NodeJS and npm need to be installed.

## Quick start

### 1. Frontend:

`cd client` <br />
Run `npm install` to install dependencies <br />
Create an `.env` file by renaming the `.env.example` file <br />
Run `npm start` to start the application <br />

### 2. Backend API:

The backend API utilizes MongoDB for data storage. MongoDB is thus required for the functioning of the API.

`cd server` <br />
Run `npm install` to install dependencies <br />
Create an `.env` file by renaming the `.env.example` file <br />
Run `npm start` to start the application <br />

The following routes are available in the API.
####Authentication
`POST : API_URL/auth/login` <br />
After login, enable Authorization by passing the access token provided to the Authorization tab to allow subsequent requests.

####Registration
`POST :API_URL/auth/register`<br />

####Parcel Management
`GET : API_URL/parcels`<br />
`GET : API_URL/parcels/{parcelId}`<br />
`POST : API_URL/parcels`<br />
`PUT : API_URL/parcels/{parcelId}`<br />
`DELETE : API_URL/parcels/{parcelId}`<br />
####User Management
`GET : API_URL/users`<br />
`GET : API_URL/users/{userId}`<br />
`POST : API_URL/users`<br />
`PUT : API_URL/users/{userId}`<br />
`DELETE : API_URL/parcels/{parcelId}`<br />

### Database setup

To install the database collections, navigate to the db folder in the root directory and run <br/>
`sudo mongoimport --db pms --collection parcels --file parcels.json` <br />
`sudo mongoimport --db pms --collection users --file users.json` <br />

Afterwards login to the application using the following credentials:<br />
email : johndoe@example.com <br />
password : 123456789
