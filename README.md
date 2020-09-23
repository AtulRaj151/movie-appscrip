
### Description

- A  Movies App where user can find their favourite movie see the movie rating and add their movie in their list
- 

### API
 > https://api.themoviedb.org/
 -  Created an API token from https://api.themoviedb.org/ and use their APIs for
    getting the list of movies for a searched keyword and also to get the details about a movie
    based on the movie id/query
 
 
 > React and Redux have been used to pass the state to Components 
 
## Tech Stack
 - FrontEnd: ReactJs
### Project Structure:
       - action
            - ActionTypes: It contains action types constant
            - index.js: It contains Action creater function, like fetching Movie , which goes to reducer
        - reducers
              - index.js : it has combinedReducer function
              - search.js:  Change the state in response to the action sent to the store
        - store
              - It stores the new changes of updated state
        - Components
              - It contains all the component of the application like Navbar SearchDisplay and MovieCard
         
 - Hosting : GitHub Pages  https://atulraj151.github.io/movie-appscrip/
 

 
 


