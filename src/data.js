import React, { Component } from 'react'
// data.js
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  // more records...
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  // more records...
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  // more records...
};

class FavMovie extends Component{
    render(){
        return(
            <div>
                {profiles.map((profile)=>{
                    const userName = users[profile.userID].name;
                    const favMovie = movies[profile.favoriteMovieID].name;
                    return(
                        <ul key={profile.id}>
                            <p>{`${userName}, ${favMovie}`}</p>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default FavMovie
