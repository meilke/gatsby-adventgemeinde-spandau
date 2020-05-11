import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export default function About({ data }) {
  return (
    <Layout>{data.allContentfulFrontpage.edges.map(renderFrontpage)}</Layout>
  )

  function renderFrontpage(edge) {
    return (
      <div key={edge.node.title}>
        <h1>{edge.node.title}</h1>
        <p>{edge.node.content.content}</p>
      </div>
    )
  }
}

export const query = graphql`
  {
    #allContentfulFrontpage(filter: { title: { eq: "GAAANZ NEU" } }) {
    allContentfulFrontpage {
      edges {
        node {
          title
          content {
            content
          }
        }
      }
    }
  }
`
