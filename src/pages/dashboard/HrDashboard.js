import { Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../layout/default";

function HrDashboard() {
  return (
    <Layout title="HR">
      <Row className="g-gs">
        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Total Candidate</h4>
                    {/* <p className="small">Best seller of the month</p> */}
                  </div>
                  <div className="my-3">
                    {/* <div className="amount h2 fw-bold text-primary">&#8377;35,89,46,466</div> */}
                    <div className="amount h2 fw-bold text-primary">130</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    View Candidates
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Total Recruitment Companies</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary">23</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Candidate Follow Up</h4>
                    {/* <p className="small">Best seller of the month</p> */}
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">10</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Lapsed Follow Up</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">111</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Today Company Follow Up</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary">100</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Interview Scheduled</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">27</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Lapsed Interview calls</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">5</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Today Quotation Follow Up</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">28</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Lapsed Candidate Pay</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">35</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl="3">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="card-title">
                    <h4 className="title mb-1">Pending Interview Rounds</h4>
                  </div>
                  <div className="my-3">
                    <div className="amount h2 fw-bold text-primary ">84</div>
                  </div>
                  <Button href="#" size="sm" variant="primary">
                    Show
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}

export default HrDashboard;
