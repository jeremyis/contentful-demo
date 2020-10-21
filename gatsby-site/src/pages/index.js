import React from "react"
import { graphql } from 'gatsby'

export default function Home({ data }) {
  console.log(data);
  let {title} = data.allContentfulBlogPost.nodes[0];
  return (<div>ContentfulValue:{title}</div>);
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
        }
      }
      nodes {
        title
      }
    }
  }
`
