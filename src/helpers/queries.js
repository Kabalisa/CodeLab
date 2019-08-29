import gql from 'graphql-tag';

export const lagosJavaDevelopers = gql`
  query {
    search(query: "location:lagos", type: USER, first: 100) {
      userCount
      edges {
        node {
          ... on User {
            name
            login
            avatarUrl
            starredRepositories {
              totalCount
            }
            repositories {
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
            projects {
              totalCount
            }
          }
        }
      }
    }
    viewer {
      avatarUrl
    }
  }
`;
