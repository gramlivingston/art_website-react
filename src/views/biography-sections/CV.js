import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

/*

Education



Teaching

Current:

Adjunct Professor for Creative Coding, University of Illinois Chicago

2020:

Guest Critic for Architecture, School of the Art Institute of Chicago

2019:

Digital/Physical Studio Teacher, Northwestern AWE program
Arts Educator, The Frank Lloyd Wright Trust, Chicago, IL

2017:

TA: Architecture Construction and Design, School of the Art Institute of Chicago

Publications

2019:

“Postcommodity Centers Optimism and Indigenous Philosophies in a New Site-Specific Installation” - Hyperallergic
“A Biennial Navigates Indigenous Cultures Around the Globe” - Hyperallergic

Group Exhibitions

2021:

Sidelong Glances Gallery 400, Chicago IL
2020:

Open Shed used for What? The Franklin, Chicago IL
Http: HyperTransferProtocal - Database as Symbolic Form Online, https://newart.city/show/http
Cyborgs: Imagining & Performing The Chicago Art Department, Chicago IL
2019:

Three Hands Clapping Elastic Arts, Chicago IL
Audio Visual Night I Elastic Arts, Chicago IL
Terrain Biennial Terrain Biennial, Chicago IL
Drawing Rally Co-Prosperity Sphere, Chicago IL
2018:

Transfiguration Museum of Ideas, Lviv Ukraine
Object and Image The Chicago Art Department, Chicago IL
30 under 30 Viridian Artist Gallery, New York City NY
Residencies / Awards

2019:

Art Department Scholarship University of Illinois at Chicago
2018:

CatenArt Residency MC6, Lviv & Kiev, Ukraine
Artist in Residence The Chicago Art Department, Chicago IL
Artist in Residence The Chicago Art Department, Chicago IL
Post-graduate Fellowship John David Mooney Foundation, Chicago IL
1st prize ArtSlant Prize Showcase, ArtSlant Magazine
2015:

Presidential Merit Scholarship School of the Art Institute of Chicago, Chicago, IL
Curatorial

2020:

Intercontinental Biennale of the Indigenous Arts Organizing Committee Member
2019:

Togetherism: @ Co-Prosperity Sphere assistant curator
*/

function CV() {
  return (
    <>
      <div id="fadeInAnim">
        <div className="section section-content section-gray">
          <Container>
            <Row>
              <Col md="7">
              <div className="section-description">
                  <h3 className="title">Education</h3>
                  <Row> 
                  <Col md="2">
                  <h6 className="category">2021:</h6>
                  </Col>
                  <h6 className="category">MFA University of Illinois at Chicago</h6>
                  </Row>
                  <Row> 
                  <Col md="2">
                  <h6 className="category">2017:</h6>
                  </Col>
                  <h6 className="category">BFA School of the Art Institute of Chicago</h6>
                  </Row>
                  <h5 className="description">
                    We took into consideration multiple use cases and came up
                    with some specific elements for you. If you need elements
                    such as tables, comments, description areas, tabs and many
                    others, we've got you covered. They're beautiful and easy to
                    use for the end user navigating your website.
                  </h5>




                  <h3 className="title">Group Exhibitions</h3>
                
                
                  <Row> 
                  <Col md="2">
                  <h6 className="category">2021:</h6>
                  </Col>
                  <Col>
                  <h5 className="description" style={{marginTop: 20 + "px"}}>
                  -Sidelong Glances Gallery 400, Chicago IL
                  </h5>        
                  </Col>          
                  </Row>
      
      
                  <Row> 
                  <Col md="2">
                  <h6 className="category">2020:</h6>
                  </Col>
                  <Col>
                  <h5 className="description" style={{marginTop: 20 + "px"}}>
                  -Open Shed used for What? The Franklin, Chicago IL
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Http: HyperTransferProtocal - Database as Symbolic Form Online, https://newart.city/show/http
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Cyborgs: Imagining & Performing The Chicago Art Department, Chicago IL
                  </h5>   
                  </Col>                     
                  </Row>

                  <Row> 
                  <Col md="2">
                  <h6 className="category">2019:</h6>
                  </Col>
                  <Col>
                  <h5 className="description" style={{marginTop: 20 + "px"}}>
                  -Three Hands Clapping Elastic Arts, Chicago IL
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Audio Visual Night I Elastic Arts, Chicago IL
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Terrain Biennial Terrain Biennial, Chicago IL
                  </h5>   
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Drawing Rally Co-Prosperity Sphere, Chicago IL
                  </h5>   
                  </Col>                     
                  </Row>


                  <Row> 
                  <Col md="2">
                  <h6 className="category">2018:</h6>
                  </Col>
                  <Col>
                  <h5 className="description" style={{marginTop: 20 + "px"}}>
                  -Transfiguration Museum of Ideas, Lviv Ukraine
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -Object and Image The Chicago Art Department, Chicago IL
                  </h5>                        
                  <h5 className="description" style={{marginTop: 5 + "px"}}>
                  -30 under 30 Viridian Artist Gallery, New York City NY
                  </h5>   
                  </Col>                     
                  </Row>


                </div>
                {/* <div className="image-container">

                

                  <img
                    alt="..."
                    className="img"
                    src={
                      require("assets/img/presentation-page/ipad-content-2.png")
                        .default
                    }
                  />
                  <img
                    alt="..."
                    className="area-img add-animation"
                    src={
                      require("assets/img/presentation-page/ipad-left-img.jpg")
                        .default
                    }
                  />
                  <img
                    alt="..."
                    className="info-img add-animation"
                    src={
                      require("assets/img/presentation-page/ipad-right-img.jpg")
                        .default
                    }
                  />
                </div> */}
              </Col>
              <Col md="4">
                <div className="section-description">
                  <h3 className="title">CV Stuff</h3>
                  <h6 className="category">For Areas that Need More Space</h6>
                  <h5 className="description">
                    We took into consideration multiple use cases and came up
                    with some specific elements for you. If you need elements
                    such as tables, comments, description areas, tabs and many
                    others, we've got you covered. They're beautiful and easy to
                    use for the end user navigating your website.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CV;
