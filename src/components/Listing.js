import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    text-decoration: underline;
    font-size: 0.8rem;
    font-family: sans-serif;
    color: #0b3c5d;
  }
`;

const LISTING_QUERY = graphql`
  query HomeListings {
    allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => allMarkdownRemark.edges.map(({ node }) => (
      <Post key={node.frontmatter.slug}>
        <h2>{node.frontmatter.title}</h2>
        <span>{node.frontmatter.date}</span>
        <p>{node.excerpt}</p>
        <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>
            Read More
        </Link>
      </Post>
    ))
    }
  />
);

export default Listing;
