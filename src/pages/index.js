import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <Layout>
        <section>
          <div className="wrapper--post">
            <div className="blog--title">
              <h1>Blog</h1>
            </div>

            <div className="post">
              {posts.map(({ node: post }) => (
                <Link to={post.fields.slug}>
                  <div key={post.id} className="post__card">
                    <h3>{post.frontmatter.title}</h3>
                    {post.frontmatter && (
                      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                    )}

                    <small> on {post.frontmatter.date}</small>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 480) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
