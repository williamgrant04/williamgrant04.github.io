import styled from "styled-components"
import DataTable from "./components/DataTable"
import projects from "./projects.json"
import Project from "./components/Project"

const App = () => {

  return (
    <Page>

      <h1>Hi, I'm Will</h1>
      <p><em>Junior full-stack web developer</em></p>

      <ContentWrapper>
        <StackAbout>
          <About>
            <h2>About</h2>

            <p>Hi, I'm William, or Will. For a very long time, I've known I wanted to do something with computers. I wasn't sure what, but computers were the focus. After a while, I found out about coding (keep in mind, in this scenario, I was in primary school), and from then on, I knew that's what I wanted to pursue.</p>
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

const StackAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-right: 32px;
`

const About = styled.div`
  font-size: 20px;
  margin-bottom: 16px;
`

const Projects = styled.div`
  width: 40%;
`

const ProjectsTitle = styled.h2`
  margin: 0;
  height: 5%;
`

const ProjectsScroll = styled.div`
  overflow-y: scroll;
  height: 80vh;
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

  h1 {
    margin: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`

export default App
