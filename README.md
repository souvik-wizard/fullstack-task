# Instructions

Just do "npm i" in both frontend and backend.
Start the frontend server using "npm start" and the backend using "nodemon index" or "npm start".
Frontend port number is http://localhost:3000/ .

# Questions

1.How can you implement shared functionality across a component tree?
<br>
In React, there are several ways to implement shared functionality across a component tree. Using Context API, Prop Drilling, Redux etc. As this is a small project I've used ContextAPI instead of Redux.

2.Why is the useState hook appropriate for handling state in a complex component?
<br>
It lets you manage and update individual pieces of state separately. This keeps your component organized and makes it easier to track changes, especially when you have multiple states interacting with each other.
