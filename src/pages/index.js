import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  console.log(data);
  return (
    <Layout>
      <section>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
