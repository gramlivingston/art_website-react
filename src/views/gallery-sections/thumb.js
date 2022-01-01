import React from "react";


// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function GallerySummary() {
  let data = require(`../../assets/projectInfo.json`);
  let thumbnails = [];
  let ex = data['exuviae']['thumbnail']
  console.log(ex)



//  let thumbnail = data[`${id}`]['thumbnail']
  for(var prop in data){
    thumbnails.push({
      key:   prop,
      value: data[prop]["thumbnail"]
    })
}
console.log(thumbnails[0])

  return (
    <>
      <div className="section section-sections section-dark">
      
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
            <br />

              <Row>

                <Col md="4">
                 <br />
                 <a href = "project/exuviae">
                  <img
                    alt="..."
                    src={
                      `${data['exuviae']['thumbnail']}`
                    }
                  />
                  </a>
                <div className="info">
                <div className="description">
                  <h4 className="info-title">EXUVIAE</h4>
                  <p>
                    The sections will help you generate pages in no time. From
                    team presentation to pricing options, you can easily
                    customise and built your examples.
                  </p>
                </div>
              </div>
            </Col >
                <Col md="4">
                <br />
                <a href = "project/field_interactions">
                  <img
                    alt="..."
                    src={
                      `${data['field_interactions']['thumbnail']}`
                    }
                  />
                  </a>
                <div className="info">
                <div className="description">
                  <h4 className="info-title">FIELD INTERACTIONS</h4>
                  <p>
                    The sections will help you generate pages in no time. From
                    team presentation to pricing options, you can easily
                    customise and built your examples.
                  </p>
                </div>
              </div>
                </Col>

                <Col md="4">
                <br />
                <a href = "project/poemaboutplace">

                  <img
                    alt="..."
                    src={
                      `${data['poemaboutplace']['thumbnail']}`
                    }
                  />
                  </a>
              <div className="info">
                <div className="description">
                  <h4 className="info-title">POEMABOUT.place</h4>
                  <p>
                    The sections will help you generate pages in no time. From
                    team presentation to pricing options, you can easily
                    customise and built your examples.
                  </p>
                </div>
              </div>


                </Col>


              </Row>
              

              <Row>
                <Col md="4">
                 <br />
                 <a href = "project/highwayscene">
                  <img
                    alt="..."
                    src={
                      `${data['highwayscene']['thumbnail']}`
                    }
                  />
                  </a>
                <div className="info">
                <div className="description">
                  <h4 className="info-title">HIGHWAY SCENE</h4>
                  <p>
                    The sections will help you generate pages in no time. From
                    team presentation to pricing options, you can easily
                    customise and built your examples.
                  </p>
                </div>
              </div>
                </Col>
              </Row>


            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default GallerySummary;
