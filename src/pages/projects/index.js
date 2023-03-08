import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Img from "gatsby-image";

export default function index({ data }) {
  console.log(data);

  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className="projectCard">
        {projects.map((project) => (
          <Link
            className="card"
            to={"/projects/" + project.frontmatter.slug}
            key={project.id}
          >
            <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

//export page query

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;
