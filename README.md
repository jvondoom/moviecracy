# Movie Voting App
App made with meteor (?) to make users of the community vote for the movies they want to watch. 

Uses [OMBD Api](https://www.omdbapi.com/) to fetch the movies information. 

## Functional Requirements
- Voting period proposed: one week.
- Lets users submit one movie to the voting list.
- Lets users vote one time per one of the movies in the list
- Displays the Watchlist: top upvoted movies. 


## TODO
### Front End
0. Choose which framework to use. Meteor recommended since it has to be a reactive app.
1. Create Movie Watchlist section;  displays the top 10/20 most upvoted.
2. Create Movie Submit section; let the user search for a movie, connects to OMDB API to fetch the movie metadata and adds it to the Voting section.
3. Create Movie Voting section; displays all the movies in the list.

Note: Should the Watchlist and the Voting section be the same?

### Back End
1. Handle users.
2. Accepts to add one movie to the voting list.
3. Only accept one vote from each user.
4. Returns the list of movies sorted by most upvoted.
