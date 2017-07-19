Food for Mood

![alt text](https://user-images.githubusercontent.com/26361086/27227321-090ef992-5271-11e7-802e-dfdfff9da8cd.png)

![alt text](https://user-images.githubusercontent.com/26361086/27227470-96c4b4de-5271-11e7-85ef-46b0feeb50c8.png)

FRONT END DEPLOYED - https://jlisaw.github.io/what-should-i-eat-browser/

FRONT END REPO - https://github.com/JLisaW/what-should-i-eat-browser

BACKEND REPO - https://github.com/JLisaW/what-should-I-eat-API

BACKEND DEPLOYED - https://floating-falls-88707.herokuapp.com/

Explanation of project:

There is a connection between mood and food.  Emotional eating is a way to soothe our negative emotions however, in the long run it can make us feel worse.  The purpose of this application is help users decide what he/she should eat to improve his/her mood.  The user can create an account, create, edit and delete a customized mood list.  These lists will be stored in a database for the user.  The user will need to sign up, sign in, and create his/her custom mood and the foods they associate with it.  There is an update mood and delete button next to each item on the list.

Technologies Used

* Javascript
* jQuery
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

I started creating this app by creating user stories to help me determine the user experience I wanted.  I built the back-end using Rails which helped me determine the relationships. I started by building the back-end to help me determine the API single resource relationships.  I tested the CURL scripts to make sure my functions were running properly on Rails.  Then I started creating the front-end functionality using Javascript, Bootstrap, HTML, Handlebars, and jQuery.  I created a basic HTML/CSS for a visual of what I wanted the app to entail and test the functionalities I was going to create.  Finally I styled the application with CSS.

ERD and Wireframes

http://imgur.com/jIDNTzi

For Future Iterations

* Button to add food items to an existing mood.
* Button to delete food items from the list.
* Generic list of moods and food items the user should eat.
* Generic list of moods and food items the user should avoid.
