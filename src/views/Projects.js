import React from "react";
import {useParams} from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components
import SiteNavbar from "components/Navbars/SiteNavbar";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";


function Project() {
  let {id} = useParams();
  let data = require(`../assets/projectInfo.json`);
  //let title = data[`${id}`]['title']
  let year = data[`${id}`]['year']
  let material = data[`${id}`]['materials']
  let brief_description = data[`${id}`]['briefDescription']
  let detailShots = data[`${id}`]['detailShots'][0] //array
  //let headerback = data[`${id}`]['headerback'] 



  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
   document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  }); 
  return (
    <>
      <SiteNavbar />
      <BlogPostHeader />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container style={{marginLeft: 20+"px"}} >
           

              <Row>
              <Col lg="6" md="12">
                  <h2 style={{margin: 0 + "px"}}>{year}</h2>
                  <h3 className="title-uppercase" style={{margin: 0 + "px"}}>
                    <small>{material}</small>
                  </h3>
                
         
                  <a href="javascrip: void(0);">
                    <Card  
                      data-radius="none"
                      style={{
                        backgroundImage: `url(${detailShots})`
                      }}
                    />

                  </a>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="4" md="10">
                  <div className="article-content">
                    <h4 style={{marginTop: 50 + 'px'},{marginBottom: 25 + 'px'}} >--Statement--</h4>
                    <p>
                     {brief_description}
                    </p>
                    </div>
                    </Col>
                    </Row> 
                    <Row>
              </Row> 
             
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
