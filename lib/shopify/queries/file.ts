export const getFilesQuery = `
query getFilesQuery($query: String)
  {
    files(first: 5, query: $query) {
      edges {
        node {
          id
          createdAt
          alt
          fileStatus
          preview {
            image {
              url
            }
          }
          ... on MediaImage {
            image {
              url
              altText
            }
          }
          ... on Video {
            id
            duration
            preview {
              status
              image {
                id
                width
                height
                url
              }
            }
            originalSource {
              url
              width
              height
              format
              mimeType
            }
            sources {
              url
              width
              height
              format
              mimeType
            }
          }
        }
      }
    }
  }
`;

export const getFilesUsedQuery = /* GraphQL */ `
  query {
    usedInProduct: files(first: 10, query: "used_in:product") {
      edges {
        node {
          ... on MediaImage {
            id
            alt
          }
        }
      }
    }
    unusedFiles: files(first: 10, query: "used_in:none") {
      edges {
        node {
          ... on GenericFile {
            id
            alt
            url
          }
        }
      }
    }
  }
`;
