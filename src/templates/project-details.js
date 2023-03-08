import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, thumb } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <h4>{stack}</h4>
      <div>
        <Img
          className="cardDetails"
          fluid={thumb.childrenImageSharp[0].fluid}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        thumb {
          childrenImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
