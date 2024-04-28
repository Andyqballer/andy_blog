import React from 'react'
import Hero from './components/Hero'
import ProjectMain from './components/ProjectMain'
import Work from './components/Work'
import Posts from './components/Posts'

const Home = () => {
  return (
    <div>
        <Hero />
        <ProjectMain />
        <Work />
        <Posts />
    </div>
  )
}

export default Home