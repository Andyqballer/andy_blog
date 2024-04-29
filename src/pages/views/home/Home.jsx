import React from 'react'
import Navbar from '../../../components/Navbar';
import Hero from './components/Hero'
import ProjectMain from './components/ProjectMain'
import Work from './components/Work'
import Posts from './components/Posts'
import MainFooter from '../../../components/MainFooter'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProjectMain />
        <Work />
        <Posts />
        <MainFooter />
    </div>
  )
}

export default Home