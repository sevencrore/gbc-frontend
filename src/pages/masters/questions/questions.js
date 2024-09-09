import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/default";
import Block from "../../../components/Block/Block";
import { Icon } from "../../../components";
import { useState } from "react";
// import axios from "axios";
import api from "../../../../src/services/auth/api";

const baseURL = process.env.REACT_APP_API_BASE_URL_MASTER_DATA;

function Questions() {
  const [data, setData] = useState({
    title: "",
    applicationDate: "",
    selectedJob: "",
    selectedApplicant: "",
  });

  const [validated, setValidated] = useState(false);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const postData = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setValidated(true);
      //   api
      //     .post(baseURL + `Job-Application/add`, data)
      //     .then((response) => {
      //       if (response.data.content.error) {
      //         saveError(response.data.content.error_description);
      //       } else {
      //         saveSuccess();
      //         setData({
      //           title: "",
      //           code: "",
      //           nameInKannada: "",
      //         });
      //         setValidated(false);
      //       }
      //     })
      //     .catch((err) => {
      //       if (Object.keys(err.response.data.validationErrors).length > 0) {
      //         saveError(err.response.data.validationErrors);
      //       }
      //     });
    }
  };

  const clear = () => {
    setData({
      title: "",
      applicationDate: "",
      selectedJob: "",
      selectedApplicant: "",
    });
  };

  const navigate = useNavigate();
  const saveSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Saved successfully",
      // text: "You clicked the button!",
    });
  };
  const saveError = (message) => {
    let errorMessage;
    if (typeof message === "object") {
      errorMessage = Object.values(message).join("<br>");
    } else {
      errorMessage = message;
    }
    Swal.fire({
      icon: "error",
      title: "Save attempt was not successful",
      html: errorMessage,
    });
  };
  return (
    <Layout title="Questions">
      <Block.Head>
        <Block.HeadBetween>
          <Block.HeadContent>
            <Block.Title tag="h2">Questions</Block.Title>
          </Block.HeadContent>
          <Block.HeadContent>
            <ul className="d-flex">
              <li>
                <Link
                  to="/seriui/Questions-list"
                  className="btn btn-primary btn-md d-md-none"
                >
                  <Icon name="arrow-long-left" />
                  <span>Go to List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/seriui/job-_pplication-list"
                  className="btn btn-primary d-none d-md-inline-flex"
                >
                  <Icon name="arrow-long-left" />
                  <span>Go to List</span>
                </Link>
              </li>
            </ul>
          </Block.HeadContent>
        </Block.HeadBetween>
      </Block.Head>

      <Block className="mt-n5">
        <Form noValidate validated={validated} onSubmit={postData}>
          <Row className="g-3 ">
            <Card>
              <Card.Body>
                <Row className="g-gs">
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="title">
                        Questions<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Control
                          id="title"
                          name="title"
                          value={data.title}
                          onChange={handleInputs}
                          type="text"
                          placeholder="Enter Title"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Questions should be entered.
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="applicationDate">
                        Application Date<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Control
                          id="applicationDate"
                          name="applicationDate"
                          value={data.applicationDate}
                          onChange={handleInputs}
                          type="date"
                          placeholder="Select Application Date"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Application Date should be selected.
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="selectedJob">
                        Select Job<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Select
                          id="selectedJob"
                          name="selectedJob"
                          value={data.selectedJob}
                          onChange={handleInputs}
                          required
                        >
                          <option value="">Select Job</option>
                          {/* Add options for jobs here */}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a job.
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="selectedApplicant">
                        Select Applicant<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Select
                          id="selectedApplicant"
                          name="selectedApplicant"
                          value={data.selectedApplicant}
                          onChange={handleInputs}
                          required
                        >
                          <option value="">Select Applicant</option>
                          {/* Add options for applicants here */}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select an applicant.
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div className="gap-col">
              <ul className="d-flex align-items-center justify-content-center gap g-3">
                <li>
                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </li>
                <li>
                  <Button type="button" variant="secondary" onClick={clear}>
                    Cancel
                  </Button>
                </li>
              </ul>
            </div>
          </Row>
        </Form>
      </Block>
    </Layout>
  );
}

export default Questions;
