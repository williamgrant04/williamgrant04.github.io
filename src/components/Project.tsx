import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react"


interface ProjectProps {
  title: string
  link: string
  repo: string
  apiRepo?: string
  image: string
  description: string
}

const Project = (props: ProjectProps) => {
  const [showDesc, setShowDesc] = useState(false)

  useEffect(() => {
    console.log(showDesc)
  }, [showDesc])

  const handleMouseEnter = () => {
    setShowDesc(true)
  }

  const handleMouseLeave = () => {
    setShowDesc(false)
  }

  return (
    <ProjectWrapper $image={props.image} $show={showDesc} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>{props.title}</h2>

      <Links>
        <a href={props.link} target="_blank">
          <FontAwesomeIcon icon={faLink} />
        </a>
        <a href={props.repo} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        {props.apiRepo ? <a href={props.apiRepo} target="_blank"><FontAwesomeIcon icon={faGithub} /></a> : <></> }
      </Links>
      <Description $show={showDesc}>
        <p>{props.description}</p>
      </Description>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.div<{ $image: string, $show: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 8px;
  margin-bottom: ${props => props.$show ? "213px" : "8px"};
  height: 200px;
  border-radius: 16px;
  transition: 0.25s;

  h2 {
    color: white;
    margin: 0 0 8px 0;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:after {
    content: "";
    position: absolute;
    transition: 0.25s;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${props => props.$show ? "16px 16px 0 0" : "16px"};
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.$image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #eee;
  }
`

const Links = styled.div`
  z-index: 1;
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

const Description = styled.div<{ $show: boolean }>`
  transition: 0.25s;
  position: absolute;
  bottom: ${props => props.$show ? "calc(-100%)" : "0"};
  background-color: #494949;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.$show ? "0 0 16px 16px" : "16px"};

  height: 100%;
  width: 100%;

  p {
    padding: 0 24px;
  }
`
export default Project
