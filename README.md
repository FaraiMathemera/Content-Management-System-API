# Content Management System API
 Backend Developer Assessment
 
## Prerequisites
- Node JS
- PostgreSQL

### Download PostgreSQL

Get PG4 Admin installed and setup.
 
## Installation

```
npm install
```

## Setup ENV
Create an .env file in the root directory with the below parameters.

```
NODE_ENV="development"
PORT=""
USERNAME=""
PASSWORD=""
DATABASE=""
```

- PORT -> any port of your choice
- USERNAME -> Your postgresql username usual "postgres"
- PASSWORD -> Your postgresql password
- DATABASE -> If you do not have a db you should create one and declare it in here

## Run locally

```
npm run dev
```

## Run Migrations

 Run the migration that will create the table needed to run this project
 
```
sequelize db:migrate
```
