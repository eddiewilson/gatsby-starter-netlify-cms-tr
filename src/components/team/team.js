import React from "react";
// import { Link } from "gatsby"
// import { Quals } from "./team.css"
import TeamMember from "./team-member";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 4rem;
  background-color: #dae2e8;
`;

const Team = () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                team {
                  description
                  heading
                  team_member {
                    availablility
                    description
                    name
                    prices {
                      duration
                      price
                      treatment_type
                    }
                    qualifications
                    treatments
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Section id="three" className="section">
        <div className="container">
          <div className="grid">
            <div className="col-12">
              <h2>Meet The Team</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid team">
            {data.allMarkdownRemark.edges.map((team_members) =>
              team_members.node.frontmatter.team === null ? (
                ""
              ) : (
                <TeamMember
                  teamMember={team_members.node.frontmatter.team.team_member}
                />
              )
            )}
          </div>
        </div>
      </Section>
    )}
  />
);

export default Team;
