import styled from "styled-components"
import DataTable from "./components/DataTable"
import projects from "./projects.json"
import Project from "./components/Project"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const App = () => {

  return (
    <Page>

      <Header>
        <h1>Hi, I'm Will</h1>
        <a href="https://www.linkedin.com/in/williamgrant04/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Header>
      <p><em>Junior full-stack web developer</em></p>

      <ContentWrapper>
        <StackAbout>
          <About>
            <h2>About</h2>

            <p>For a very long time, I've known I wanted to do something with computers. I wasn't sure what, but computers were the focus. After a while, I found out about coding (keep in mind, in this scenario, I was in primary school), and from then on, I knew that's what I wanted to pursue.</p>
            <p>I wasn't sure what kind of development I wanted to do, but after some time trying to decide between games, software, and web, I decided on web development.</p>
            <p>Throughout the years, I've worked with HTML, CSS, JS, ReactJS, and Ruby. I've also dabbled in C#, and recently, I've started working with TypeScript and React.</p>
          </About>

          <div>
            <h2>Languages & Tools</h2>
            <h3>Stack</h3>
            <DataTable type="stack"/>

            <h3>Tools</h3>
            <DataTable type="tools"/>
          </div>
        </StackAbout>

        <Projects>
          <ProjectsTitle>Projects</ProjectsTitle>

          <ProjectsScroll>
            {projects.map(({ title, link, repo, apiRepo, image, description }) => {
              return <Project title={title} link={link} repo={repo} apiRepo={apiRepo} image={image} description={description} key={title}/>
            })}
          </ProjectsScroll>
        </Projects>
      </ContentWrapper>
    </Page>
  )
}

const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    margin-right: 16px;
  }

  svg {
    font-size: 28px;
    color: white;
    transition: 0.25s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const StackAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 32px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const About = styled.div`
  font-size: 20px;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 0px;
  }
`

const Projects = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const ProjectsTitle = styled.h2`
  margin: 0;
  height: 5%;
`

const ProjectsScroll = styled.div`
  overflow-y: scroll;
  height: 80vh;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #505050;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #202020;
    border-radius: 8px;
  }
`

const Page = styled.div`
  background-color: #282828;
  color: #ebebeb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  padding: 0 128px;

  @media (max-width: 1024px) {
    padding: 0 64px;
    overflow-y: scroll;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    padding: 0 32px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 80%;
  }
`

export default App
