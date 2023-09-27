import { gql } from '@apollo/client'

export const GET_ALL_MOVIES = gql`
  query GetMovies {
    movies {
      nodes {
        title
        content
        movieFields {
          runningTime
          featuredImage {       
            node {
              sizes
              sourceUrl
            }
          }
        }
      }
    }
  }
`