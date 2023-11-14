# ARCADIA
Arcadia is a full stack application that utilizes a React frontend and a Ruby on Rails backend. This application allows the user to create a user account with their own username and password, add an arcade to the database, and may also leave a review in the arcades review section. 

# Technologies Used
Ruby on Rails
BCrypt Gem
SQLite3
React
CSS
React Router

# Installation
Open Arcadia repository 
-run '$bundle install' to install all backend dependencies.

In a separate terminal within the same opened repo
-run '$npm install' to install all frontend dependencies

Start the server by running '$rails s'

Start the application by running '$npm start --prefix client' in the frontend repo terminal. 

After this you are all set to start using the application!

# UI
A user must sign up to create an account in the database or log in, in order to use app features. Once logged in, will be routed to the apps home page, showing the users 'profile information'.

The user is able to add an arcade to the database through a form validated by the backend and will have any error messages appear in the frontend. When adding a an arcade, the user must input the name, image URL, and number of games. This will be sent to backend via a POST request.

The user can make a review for newly added arcades. The user can only make one review per arcade, and the valdation is handled in the backend as well as displayed in the frontend. This will be sent to the backend via a POST request.

A user may only be able to edit or delete reviews they have created themselves. These edits are then sent back to the database via a PATCH and DELETE request.

While the backend database is updated, the frontend will update in response to the changes made by its HTTP requests made possible with routes defined in the backend application controller.

# Project Requirements
Use a Rails API backend with a React frontend.

Have at least three models on the backend, that include the following: (Arcade, User, Review)
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). 

Full CRUD actions for the resource belonging to the two others (joins). The update action should be implemented using a form that is pre-filled with existing values for the object. On submission of the form, the object should update. (Review)

Minimum of create and read actions for EACH resource. (Arcade, User)

Follow RESTful routing convention for backend routes.

Active Record validations must be present on your models for most attributes.

Use controller validations to alter back end json response to front end. The response should pass your object if the creation, update, or deletion succeeds. However, the response should pass error messages to the front end and display them if the action fails. 

Properly update front end state upon successful response from a POST, PATCH, or DELETE request. That is to say, you should NOT rely on another GET request or redirect to update front end state of your application.

Have at least three different client-side routes using React Router.
 Be sure to include a nav bar or other UI element that allows users to navigate between routes. Follow RESTful convention where applicable.

Implement authentication/authorization, including password protection. 

A user must be able to: sign up with a new user account,log in to the site with a secure password and stay logged in via user ID in the session hash, and log out of the site.

Use the React hook useContext to persist your logged in user object in front end state and avoid props drilling.