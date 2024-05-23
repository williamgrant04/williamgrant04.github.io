import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


interface ProjectProps {
  title: string
  link: string
  repo: string
  apiRepo?: string
  image: string
}

const Project = (props: ProjectProps) => {
  return (
    <ProjectWrapper $image={props.image}>
      <h2>{props.title}</h2>

      <Links>
        <a href={props.link} target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
        <a href={props.repo} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        {props.apiRepo ? <a href={props.apiRepo} target="_blank"><FontAwesomeIcon icon={faGithub} /></a> : <></> }
      </Links>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.div<{ $image: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.$image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 8px;
  padding: 64px 16px;
  border-radius: 16px;
  transition: 0.25s;

  h2 {
    color: white;
    margin: 0 0 8px 0;
  }

  &:hover {
    transform: scale(1.02);
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;

  a {
    background-color: #ddd;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    margin: 0 8px;
    transition: 0.25s;

    svg {
      font-size: 150%;
      color: black;
    }

    &:hover {
      background-color: #ccc;
      transform: scale(1.1);
    }
  }
`

export default Project
