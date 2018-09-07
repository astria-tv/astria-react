import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from 'Components/Loading';
import MediaCard from 'Components/Media/Card';

const FETCH_MOVIES = gql`
    {
        movies {
            name,
            posterPath: poster_path,
            id: imdb_id,
            uuid
            playState: play_state {
              finished
              playtime
            }
        }
    }
`;

const FetchMovieList = () => (
  <Query
    query={FETCH_MOVIES}
  >

    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;

      return data.movies.map(({
        name,
        posterPath,
        id,
        uuid,
        playState,
      }) => {
        const movie = {
          name,
          posterPath,
          id,
          uuid,
          playState,
        };

        return (<MediaCard type="movie" key={uuid} {...movie} />);
      });
    }}

  </Query>
);

export default FetchMovieList;
