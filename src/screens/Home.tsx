import React from "react";
import FullPageBlog from "../components/blog/FullPageBlog";
import MediumBlog from "../components/blog/MediumBlog";
import PlaceBlogs from "../components/blog/PlaceBlogs";

function Home() {
  type Props = {
    content: string;
  };

  const CateHeader = (props: Props): JSX.Element => {
    return (
      <div className="home-page__cate-header flex-center">
        <span></span>
        <h3>{props.content}</h3>
        <span></span>
      </div>
    );
  };
 
  return (
    <div className="home-page">
      <FullPageBlog />
      <CateHeader content="Featured places" />

      <div className="flex-between">
        <PlaceBlogs />
        <PlaceBlogs />
        <PlaceBlogs />
        <PlaceBlogs />
      </div>

      <CateHeader content="Featured stories" />

      <div className="flex-between home-page__features-stories">
        <MediumBlog />
        <MediumBlog />
        <MediumBlog />
        <MediumBlog />
        <MediumBlog />
        <MediumBlog />
      </div>

      <div className="home-page__actions">
        <h3>Discover the complete colection of my stories</h3>

        <div className="btn-cg primary round">
          <span>Keep exploring</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
