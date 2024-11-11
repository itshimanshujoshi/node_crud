
# Node CRUD Application

A basic CRUD (Create, Read, Update, Delete) application built using Node.js and Express.js, with MongoDB as the database.


## Features

- Create: Add new records to the database
- Read: Fetch and view existing records
- Update: Modify existing records
- Delete: Remove records from the database

## Installation

Clone the repository

```bash
  git clone https://github.com/itshimanshujoshi/node_crud.git
  cd node_crud
```
    
Install dependencies

```bash
  npm install
```

Set up environment variables

```bash
  MONGO_URL="mongodb://localhost:27017/crud"
  PORT=8000
```

Run the application

```bash
  npm start
```

## API Reference

#### Get all Users

```http
  GET /api/user/getallusers
```

#### Add a new user

```http
  POST /api/user/create
```

#### Update a user by ID

```http
  PUT /api/user/update/:id
```

#### Delete a user by ID

```http
  DELETE /api/user/delete/:id
```
