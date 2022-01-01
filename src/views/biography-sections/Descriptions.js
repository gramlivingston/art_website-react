import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDescription() {
  return (
    <>
      <div className="section section-components section-dark">
      <br />

        <Row>
        <Col className="ml-auto mr-auto" lg="6" md="10">
            <Container className="basic-container ">
              <h3 className="title">Graham Livingston</h3>
              <h6 className="category"> Artist | Educator | Technologist</h6>
              <h5 className="description">
              an artist, educator and writer based in Chicago where he currently teaches new media art at the University of Illinois at Chicago. His projects explore the ways that sensual and conceptual qualities of objects, environments and people, are influenced by their relationship to their own digital representations. The objects, installations, and performances he makes are often transmedial in nature; and offer unique views of their subject matter across disparate spatial, physical and digital platforms. Recent projects have explored themes like computational periscopy, urban screen ecologies, and the geography of the internet.
              </h5>
              <h5 className="description">
              His work has been presented nationally and internationally at venues like Viridian Gallery’s 30 under 30 in NYC - juried by Chrissie Iles of the Whitney - and the Museum of Ideas in Lviv, Ukraine. In addition his writing has been published in Hyperallergic and he has been a guest critic for the architecture department at the School of the Art Institute of Chicago.
                </h5>
              <h5 className="description">
              Contact: studio[at]grahamlivingston.com
              </h5>

            </Container>
          </Col>
          <Col lg="5" md="12">
          <br />
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={
                  require("assets/img/04.JPG")
                    .default
                }
              /> 
               {/* 
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg").default}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={
                  require("assets/img/presentation-page/share-btn.png").default
                }
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={
                  require("assets/img/presentation-page/coloured-card-with-btn.png")
                    .default
                }
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={
                  require("assets/img/presentation-page/coloured-card.png")
                    .default
                }
              />
              <img
                alt="..."
                className="social-img"
                src={
                  require("assets/img/presentation-page/social-row.png").default
                }
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={
                  require("assets/img/presentation-page/pin-btn.png").default
                }
              /> 
            </div> 
            <div id="fadeInAnim" className="add-animation animated">
            <div className="section-description">
                  <h3 className="title" >Recent News</h3> 
                  </div>*/}
            </div>

          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default SectionDescription;
