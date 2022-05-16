import React from 'react'
import FullPageBlog from '../components/blog/FullPageBlog'
import MediumBlog from '../components/blog/MediumBlog'
import PlaceBlogs from '../components/blog/PlaceBlogs'


function Home() {
  type Props = {
    content: string
  }
  
  const CateHeader = (props: Props): JSX.Element => { 
    return (
      <div className="cate-header flex-container center">
        <span></span>
          <h3>
            {props.content}
          </h3>
          <span></span>
      </div>
    )
  }

  return (
    <div className="home-page">
      <FullPageBlog/>
      <CateHeader content = 'Featured places'/>

      <div className = 'flex-container space-evenly'>
        <PlaceBlogs/>
        <PlaceBlogs/>
        <PlaceBlogs/>
        <PlaceBlogs/>    
      </div>

      <CateHeader content = 'Featured stories'/>
      
      <div className = 'flex-container wrap'>
          <MediumBlog/>
          <MediumBlog/>
          <MediumBlog/>
          <MediumBlog/>
          <MediumBlog/>
          <MediumBlog/>
      </div>

      <div className = 'flex-container center column'>
        <h3>
          Discover the complete colection of my stories
        </h3>

        <div className = 'btn primary-background'>
          <h6>
            Keep exploring
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Home