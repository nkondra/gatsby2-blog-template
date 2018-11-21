import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    );
  }
}

export const query = graphql`
  query postQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      html
    }
  }
`;

export default postLayout;
