import styled from "styled-components"
import DataTable from "./components/DataTable"

const App = () => {

  return (
    <Page>
      <h1>Hi, I'm Will</h1>
      <p>Junior full-stack web developer</p>

      <ContentWrapper>
        <StackAbout>
          <About>
            <h2>About</h2>
            <p>Hi, I'm William, or Will. I've always been interested in something computers and code, even since primary school, I would drive the IT guys crazy by messing around with settings and I would play around with inspect element and change styles on random webpages.</p>
            <p>Throughout the years I've worked with HTML, CSS, JS, ReactJS, Ruby and I've dabbled in C#, and recently I've starting working in TypeScript with React. After some time trying to decide between game development, software development and web development, I decided on web development.</p>
          </About>

          <div>
            <h2>Languages & Tools</h2>
            <h3>Stack</h3>
            <DataTable type="stack"/>

            <h3>Tools</h3>
            <DataTable type="tools" />
          </div>
        </StackAbout>

        <Projects>
          <h2>Projects</h2>

          <ProjectsScroll>
            {/* Scrollable */}
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

const ProjectsScroll = styled.div`
  overflow-y: scroll;
`

const Page = styled.div`
  font-family: sans-serif;
  padding: 48px 128px;
  height: 100vh;

  h1 {
    margin: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`

export default App
