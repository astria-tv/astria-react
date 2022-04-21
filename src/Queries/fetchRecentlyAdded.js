import gql from 'graphql-tag';

const RECENTLY_ADDED = gql`
    {
        recentlyAdded {
            ... on Movie {
                type: __typename
                uuid
                name
                title
                year
                posterPath

                playState {
                    finished
                    playtime
                }

                files {
                    totalDuration
                }
            }
            ... on Episode {
                type: __typename
                uuid
                name
                episodeNumber

                season {
                    seasonNumber
                    posterPath
                    uuid

                    series {
                        name
                        uuid
                    }
                }

                playState {
                    finished
                    playtime
                }

                files {
                    totalDuration
                }
            }
        }
    }
`;

export default RECENTLY_ADDED;
