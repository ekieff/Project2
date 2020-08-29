# Wine-os App

This app is built with RESTful routes.

## User Stories

* A user can log in.
* A user can view all wines.
* A user can view all notes for a wine.
* A user can add a note, edit a note, or delete a note to a wine.

### Models
## User
| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

## Wine
| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| wine | String | From API |
| color | String | From API |
| country | String | From API |
| region | String | From API |
| appelation | String | From API |
| vintage | Integer | From API |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

## Wine Tasting
| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| notes | Text | Must be provided |
| userId | Integer | Must be provided |
| wineId | Integer | Must be provided |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Default Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Home page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info |
| GET | /profile | server.js | Regular User Profile |

## Steps To Use

#### 1. Download dependencies
* Fork this repo
* 
```
npm i 
```

#### 2. Update config.json
sequelize db:create and
update your database with your database file.
sequelize db:migrate

#### 3. Create .env

Create your .env file, input your secret session and api key.
You may also wish to use seed.js to migrate my wines into your database.

## Next Steps
I'd like to add additional features to my application, like adding more wines from the API, and getting the userId from userName.
