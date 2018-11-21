import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query ArchiveQuery {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    text-decoration: underline;
    font-size: 0.8rem;
    font-family: sans-serif;
    color: #0b3c5d;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                <li key={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</li>
              </Link>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
