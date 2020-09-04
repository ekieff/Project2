# Wine-os App

This app is built with RESTful routes.
You can interact with the app on heroku here:
https://elaines-wineapp.herokuapp.com/ 

## User Stories

* A user can log in.
* A user can view all wines.
* A user can view all notes for a wine.
* A user can add a note, edit a note, or delete a note to a wine.
* A user can view their notes on their profile page

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
| GET | /profile | server.js | Displays a user's wine notes |
| GET | /wines | wines.js | get wines from API |
| GET | /wines/:id | wines.js | render both wine details and associated wineTastings for a wine |
| POST | /winesTastings | wineTastings.js | while in the wine create a new tasting |
| GET | winetasting/:id/:winename | wineTastings.js | get a wineTasting by id and return the wine name in profile | 
| PUT | /wineTastings/:id | wineTastings.js | update a wine tasting |
| DELETE | /wineTastings/:id | wineTastings.js | delete a wine tasting |


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

Create your .env file, input your secret session and api key from Global Wine score, https://www.globalwinescore.com/api/ .

## Next Steps
I'd like to add additional features to my application, like increasing styling to reflect the sommelier exam.
