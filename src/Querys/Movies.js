import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Movie from '../Components/Media/Movie'

const FETCH_MOVIES = gql `
    {
        movies {
            title,
            poster_path,
            imdb_id
        }
    }
`

const FetchMovies = () => (
    <Query 
        query={ FETCH_MOVIES }
    >

        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return data.movies.map(({ title, poster_path, imdb_id }, i) => {
                let movie_details = {
                    title,
                    poster_path,
                    imdb_id
                }

                return (<Movie key={i} {...movie_details} /> );
            });
        }}
        
    </Query>
);

export default FetchMovies