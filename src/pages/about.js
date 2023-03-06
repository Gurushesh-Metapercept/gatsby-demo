import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default function about({ data }) {
  console.log(data);
  return (
    <Layout>
      <section>
        <h1>about</h1>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "abc.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
