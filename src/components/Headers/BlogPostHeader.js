import React from "react";
import {useParams} from "react-router-dom";


// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();
  let {id} = useParams();
  let data = require(`../../assets/projectInfo.json`);
  let title = data[`${id}`]['title'];
  let headerback = data[`${id}`]['headerBackground'];

  console.log(headerback)

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage: `url(${headerback})`
          }}

      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 id='header_title' className="title-uppercase text-center">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
