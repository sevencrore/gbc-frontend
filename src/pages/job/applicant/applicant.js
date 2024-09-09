import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/src/sweetalert2.js";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layout/default";
import Block from "../../../components/Block/Block";
import { Icon } from "../../../components";
import { useState } from "react";
import api from "../../../../src/services/auth/api";

const baseURL = process.env.REACT_APP_API_BASE_URL_MASTER_DATA;

function Applicant() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    email: "",
    state: "",
    district: "",
    taluk: "",
    city: "",
    address: "",
    username: "",
    password: "",
    gender: "",
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
      // Uncomment below lines to make API call
      // api.post(baseURL + `Applicant/add`, data)
      //   .then((response) => {
      //     if (response.data.content.error) {
      //       saveError(response.data.content.error_description);
      //     } else {
      //       saveSuccess();
      //       setData({
      //         firstName: "",
      //         lastName: "",
      //         phoneNumber: "",
      //         alternatePhoneNumber: "",
      //         email: "",
      //         state: "",
      //         district: "",
      //         taluk: "",
      //         city: "",
      //         address: "",
      //         username: "",
      //         password: "",
      //         gender: "",
      //       });
      //       setValidated(false);
      //     }
      //   })
      //   .catch((err) => {
      //     if (Object.keys(err.response.data.validationErrors).length > 0) {
      //       saveError(err.response.data.validationErrors);
      //     }
      //   });
    }
  };

  const clear = () => {
    setData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      alternatePhoneNumber: "",
      email: "",
      state: "",
      district: "",
      taluk: "",
      city: "",
      address: "",
      username: "",
      password: "",
      gender: "",
    });
  };

  const navigate = useNavigate();
  const saveSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Saved successfully",
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
    <Layout title="Applicant">
      <Block.Head>
        <Block.HeadBetween>
          <Block.HeadContent>
            <Block.Title tag="h2">Applicant's Information</Block.Title>
          </Block.HeadContent>
          <Block.HeadContent>
            <ul className="d-flex">
              <li>
                <Link
                  to="/seriui/applicant-list"
                  className="btn btn-primary btn-md d-md-none"
                >
                  <Icon name="arrow-long-left" />
                  <span>Go to List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/seriui/applicant-list"
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

      <Block className="mt-n3">
        <Form noValidate validated={validated} onSubmit={postData}>
          <Card>
            <Card.Body>
              <Row className="g-3">
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="firstName">
                      First Name<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="firstName"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter First Name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      First Name should be entered.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                    <Form.Control
                      id="lastName"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="phoneNumber">
                      Phone Number<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="phoneNumber"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      onChange={handleInputs}
                      type="tel"
                      placeholder="Enter Phone Number"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid phone number.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="alternatePhoneNumber">
                      Alternate Phone Number
                    </Form.Label>
                    <Form.Control
                      id="alternatePhoneNumber"
                      name="alternatePhoneNumber"
                      value={data.alternatePhoneNumber}
                      onChange={handleInputs}
                      type="tel"
                      placeholder="Enter Alternate Phone Number"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">
                      Email<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleInputs}
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="state">
                      State<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="state"
                      name="state"
                      value={data.state}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter State"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="district">
                      District<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="district"
                      name="district"
                      value={data.district}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter District"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="taluk">Taluk</Form.Label>
                    <Form.Control
                      id="taluk"
                      name="taluk"
                      value={data.taluk}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter Taluk"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="city">City</Form.Label>
                    <Form.Control
                      id="city"
                      name="city"
                      value={data.city}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter City"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="address">Address</Form.Label>
                    <Form.Control
                      id="address"
                      name="address"
                      value={data.address}
                      onChange={handleInputs}
                      as="textarea"
                      rows={3}
                      placeholder="Enter Address"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter an address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">
                      Username<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="username"
                      name="username"
                      value={data.username}
                      onChange={handleInputs}
                      type="text"
                      placeholder="Enter Username"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Username should be entered.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">
                      Password<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleInputs}
                      type="password"
                      placeholder="Enter Password"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Password should be entered.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col lg="6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="gender">Gender</Form.Label>
                    <Form.Select
                      id="gender"
                      name="gender"
                      value={data.gender}
                      onChange={handleInputs}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="mt-3 d-flex justify-content-center">
            <Button type="submit" variant="primary" className="me-2">
              Save
            </Button>
            <Button type="button" variant="secondary" onClick={clear}>
              Cancel
            </Button>
          </div>
        </Form>
      </Block>
    </Layout>
  );
}

export default Applicant;
