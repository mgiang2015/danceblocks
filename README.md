# DANCEBLOCKS

[Danceblocks](danceblocks-987c8.web.app/) is a web application to help dancers easily plan out blockings for their performance.

## Tech stack

- Frontend: Built using `create-react-app`, with additional libraries: `Material-UI` for buttons and input, `react-colorful` for color picker and `react-dnd` for drag and drop feature.
- Deployment: Website is deployed on Firebase using Firebase CLI tool.
- Backend: Server is developed using NodeJS (Express), MongoDB. User authentication is developed using `passport` and `express-jwt`. Most of the user-authentication code was adapted from [Learn how to handle authentication with Node using Passport.js](https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/)

## Features version 1.0.0

- [x] Drag-and-drop dancers. 
- [x] Add, delete and change existing dancer's label and color.
- [ ] Progress is saved and re-loaded after you have exited the app

