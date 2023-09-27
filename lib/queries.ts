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

export const GET_CATEGORIES = gql`
query getCategories {
    categories {
      nodes {
        name
        id
      }
    }
  }
`

export const GET_POST_BY_TITLE = gql`
query getAvionics {
    posts(where: {title: "Avionics"}) {
      nodes {
        content
        excerpt
        slug
        featuredImage {
          node {
            title
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
`