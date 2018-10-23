import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Bestun Gardi</h1>
    <p>Welcome to my photo gallery</p>
    <p>Enjoy</p>
    <Link to="/gallery/">See all my photos</Link>

    
  </Layout>
)

export default IndexPage
