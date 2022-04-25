# DANCEBLOCKS

[Danceblocks](https://danceblocks-987c8.web.app/) is a web application to help dancers easily plan out blockings for their performance.

## Tech stack

- Frontend: Built using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), with additional libraries: [Material-UI](https://mui.com/) for buttons and input, [react-colorful](https://github.com/omgovich/react-colorful) for color picker and [react-dnd](https://github.com/omgovich/react-colorful) for drag and drop feature. Implemented state management using [React Redux](https://react-redux.js.org/).
- Deployment: Website is deployed on [Firebase Hosting](https://firebase.google.com/docs/hosting) using Firebase CLI tool.
- Backend: Server is developed using NodeJS (Express), MongoDB. User authentication is developed using [passportJs](https://www.passportjs.org/) and [express-jwt](https://www.npmjs.com/package/express-jwt). Most of the user-authentication code was adapted from [Learn how to handle authentication with Node using Passport.js](https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/)

## Features version 1.1.0

- [x] Drag-and-drop dancers. 
- [x] Add, delete and change existing dancer's label and color.
- [x] Progress is saved and re-loaded after you have exited the app
- [ ] User authentication to sync data between devices

## State management with Redux
- The web app maintains an array of Circle objects as its state.
- Each Circle object consists of `id`, `top` and `left` coordinates, `background color`, and `title`. 
- This state should be readable and writeable to the `container` component and `sidebar` component. 
    - `container` can update each Circle coordinates to facilitate drag and drop.
    - `sidebar` can update each Circle `title`, `background color`. It can also add new Circle objects and delete existing Circle objects.

### Why Redux?
- [Redux](https://redux.js.org/) is a popular state management tool for web applications. It creates a global store where the application's state can be read and written to by any component.
- Suitable for this application as state needs to be access by multiple components.
- Redux is scalable. After setting up the store, minimal code is needed to implement add, update, read and delete. Extending the store to contain another state is easy as well.
- Redux can be hydrated with an existing state. This is important for the application because I wanted to implement persistent state.

### How Redux?
- I started with [React Redux tutorials](https://react-redux.js.org/tutorials/quick-start). I adapted most of the code from this tutorial, only changing the object structure according to what I need.
- For rehydration, I load the state from browser's LocalStorage and use that as the value of `preloadedState` in `configureStore` method. Detailed documentation for `configureStore` can be found [here](https://redux-toolkit.js.org/api/configureStore)

## Persistent state with LocalStorage
- Users should be able to come back to their current state after they close the brower or refresh the page.

### Why use LocalStorage?
- Current state has to be stored somewhere. 
- If it is stored in a database, client will have to make POST requests for every change in state. This is quite inefficient.
- There were choices between Cookie Storage, SessionStorage and LocalStorage.
    - I went with LocalStorage because LocalStorage is persistent until user manually clear it, unlike SessionStorage. 
    - Cookie Storage can only store up to 4KB, and are included in every request header. Storing a potentially massive state in Cookie Storage does not make sense unless you plan to sabotage your users' data usage. In that case, carry on!

### How to implement LocalStorage
- I followed [this tutorial](https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e) by Jam Creencia on Medium. The tutorial goes straight to the point and does not bother you with Redux boilerplate code.
- `store.subscribe` takes in a listener that is invoked every `dispatch()` call. You can use this method to update the state in LocalStorage each time state in the store is changed.