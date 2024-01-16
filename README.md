
<!-- ABOUT THE PROJECT -->
## About The Project

The Movie Web Application is a platform that allows users to explore a curated collection of movies. The homepage showcases a diverse selection of films, and users can click on individual movie titles to access dedicated detail pages. On these pages, users can watch the movie's trailer, read a concise summary, and view a list of user-generated reviews. Authenticated users have the privilege to contribute their own reviews and add new movies to the collection. Unauthenticated users can view the entire movie collection but are limited to read-only access. The application is built using React.js, Node.js, Express.js, and MongoDB

<!-- REQUIREMENTS -->
## Requirements

* User Authentication:<br>
Implement secure user authentication.<br>
* Movie Display and Search:<br>
Display movies on the homepage with posters.<br>
Allow searching for movies by title.<br>
* Access Control:<br>
Enable public access to movie details.<br>
Restrict reviews and movie additions to authenticated users.<br>
* Movie and Review Management:<br>
Create and delete movies with unique names.<br>
Create, update, and delete reviews linked to movies and users.<br>
* Users:<br>
Implement user sign-up and log-in functionality.<br>
* Visual Enhancements:<br>
Allow users to add image URLs for movie posters.<br>
Enable video link addition for movie trailers.<br>
* Database Design:<br>
Design separate tables for Movie, User, and Review entities.<br>
* Movie Ranking:<br>
Use MongoDB aggregation to rank movies based on reviews.<br>
* Testing:<br>
Write unit and functional tests for both frontend and backend.<br>
* Docker:<br>
Create a Docker Compose file for easy app setup.<br>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danyal-dot-dev/movie-task-final.git
   ```
2. Navigate to frontend directory and create .env with the following data.<br>

VITE_BACKEND_URI="http://localhost:3000"<br>
VITE_PAGE_SIZE="4"<br>

3. Navigate to backend directory and create .env with the following data.<br>

DB_URI="mongodb://mongo:27017/moviehub"<br>
PORT=3000<br>
JWT_SECRET='movie@hub'<br>

4. Open the repo directory in terminal and run. 
   ```sh
   docker-compose build
   ```
5. Now run. 
   ```sh
   docker-compose up
   ```
6. Open chrome browser and navigate to http://localhost:5173/<br>

## Directory Structure

```bash
├── backend      #contains the backend api code for the application
│   ├── __tests__   #contains all the test cases for the backend api.
│   ├── controllers   #contains all the controllers for the application which are responsible for dealing with web requests and contain business logic for the application.
│   ├── middleware   #contains various middlewares used by the backend.  
│   ├── models   #contains database models which are used for interacting with collections.
│   ├── routes   #contains all the api endpoints.
│   └── services   #contains database services (respository) which are responsible for interacting with the database.
│   └── utilities   #contains various utilites like db connector, jwt, validators.
│   └── Dockerfile   #Dockerfile for building backend image.
│   └── index.js   #Runner file for backend.
├── frontend/src      #contains the frontend code for the application
│   ├── __tests__   #contains all the test cases for the frontend.
│   ├── components   #contains resuable/individual ui components that are used in pages.
│   ├── contexts   #contains context api providers of the application.  
│   └── helpers   #contains various helpers like axios.
│   ├── pages   #contains entire web pages of the application compromising of ui components.
│   └── routes   #contains frontend routes for the application.
├── docker-compose.yml   #for starting containers
└── .gitignore
```
