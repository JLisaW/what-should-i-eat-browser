Food for Mood

FRONT END DEPLOYED - https://jlisaw.github.io/what-should-i-eat-browser/

FRONT END REPO - https://github.com/JLisaW/what-should-i-eat-browser

BACKEND REPO - https://github.com/JLisaW/what-should-I-eat-API

BACKEND DEPLOYED - https://floating-falls-88707.herokuapp.com/

Explanation of project:

The purpose of this application is help users decide what he/she should eat to improve his/her mood.  The user can create an account, create, edit and delete a customized mood list.  These lists will be stored in a database for the user.  The user will need to sign up, sign in, and create his/her custom mood and the foods they associate with it.  There is an update mood and delete button next to each item on the list.


Technologies Used

* Javascript
* Jquery
* Handlebars
* HTML
* Bootstrap
* CSS

User Stories

* As a user, I want to be able to sign up for an account - POST
* As a user, I want to be able to sign into my account - POST
* As a user, I want to be able to log out of my account - DELETE
* As a user, I want to be able to change my password - PATCH
* As a user, I want to be able to create a custom mood/food - POST
* As a user, I want to be able to delete a food list - DELETE
* As a user, I want to be able to edit a food list - PATCH
* As a user, I want to be able to view the foods associated with a mood - GET

Process

I started creating this app by creating user stories to help me determine the user experience I wanted.  I built the backend using Rails which helped me determine the relationships between I started by building the backend to help me determine the API single resource relationships.  I tested the CURL scrips to make sure my functions were running properly on Rails.  Then I started creating the front-end functionality using Javascript, Bootstrap, HTML, Handlebars.  I created a basic HTML/CSS for a visual of what I wanted the app to entail and test the functionalities I was going to create.  Finally I styled the application with CSS.

ERD and Wireframes

http://imgur.com/jIDNTzi

For Future Iterations

* Button to add food items to an existing mood.
* Button to delete food items from the list.
* Generic list of moods and food items the user should eat.
* Generic list of moods and food items the user should avoid.
