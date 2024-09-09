import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../../layout/default";
import Block from "../../../components/Block/Block";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Icon } from "../../../components";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../../../src/services/auth/api";

const baseURL = process.env.REACT_APP_API_BASE_URL_MASTER_DATA;

function District() {
  const [data, setData] = useState({
    stateId: "",
    districtName: ""
  });

  const [validated, setValidated] = useState(false);

  let name, value;
  const handleInputs = (e) => {
    // debugger;
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const _header = { "Content-Type": "application/json", accept: "*/*" };

  const postData = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      // api
      //   .post(baseURL + `district/add`, data)
      //   .then((response) => {
      //     if (response.data.content.error) {
      //       saveError(response.data.content.error_description);
      //     } else {
      //       saveSuccess();
      //       setData({
      //         stateId: "",
      //         districtName: "",
      //         districtNameInKannada: "",
      //       });
      //       setValidated(false);
      //     }
      //   })
      //   .catch((err) => {
      //     if (Object.keys(err.response.data.validationErrors).length > 0) {
      //       saveError(err.response.data.validationErrors);
      //     }
      //   });
      setValidated(true);
    }
  };

  const clear = () => {
    setData({
      stateId: "",
      districtName: ""
    });
  };

  // to get State
  const [stateListData, setStateListData] = useState([
    {
        "stateId": 30,
        "stateName": "Andhra Pradesh",
        "stateNameInKannada": "ಆಂಧ್ರ ಪ್ರದೇಶ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 60,
        "stateName": "Arunachal Pradesh",
        "stateNameInKannada": "ಅರುಣಾಚಲ ಪ್ರದೇಶ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 23,
        "stateName": "Bihar",
        "stateNameInKannada": "ಬಿಹಾರ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 64,
        "stateName": "Chhattisgarh",
        "stateNameInKannada": "ಛತ್ತೀಸ್‌ಗಢ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 65,
        "stateName": "Goa",
        "stateNameInKannada": "ಗೋವಾ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 66,
        "stateName": "Gujarat",
        "stateNameInKannada": "ಗುಜರಾತ್",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 67,
        "stateName": "Haryana",
        "stateNameInKannada": "ಹರಿಯಾಣ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 68,
        "stateName": "Himachal Pradesh",
        "stateNameInKannada": "ಹಿಮಾಚಲ ಪ್ರದೇಶ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 41,
        "stateName": "Jharkhand",
        "stateNameInKannada": "ಜಾರ್ಖಂಡ್",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 29,
        "stateName": "Karnataka",
        "stateNameInKannada": "ಕರ್ನಾಟಕ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 2,
        "stateName": "Kerala",
        "stateNameInKannada": "ಕೇರಳ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 36,
        "stateName": "Madhya Pradesh",
        "stateNameInKannada": "ಮಧ್ಯಪ್ರದೇಶ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 5,
        "stateName": "Maharashtra",
        "stateNameInKannada": "ಮಹಾರಾಷ್ಟ್ರ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 39,
        "stateName": "Manipur",
        "stateNameInKannada": "ಮಣಿಪುರ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 69,
        "stateName": "Meghalaya",
        "stateNameInKannada": "ಮೇಘಾಲಯ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 24,
        "stateName": "Mizoram",
        "stateNameInKannada": "ಮಿಜೋರಾಂ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 40,
        "stateName": "Nagaland",
        "stateNameInKannada": "ನಾಗಾಲ್ಯಾಂಡ್",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 72,
        "stateName": "Odisha",
        "stateNameInKannada": "ಒಡಿಶಾ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 6,
        "stateName": "Punjab",
        "stateNameInKannada": "ಪಂಜಾಬ್",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 141,
        "stateName": "Rajastan",
        "stateNameInKannada": "rajastan",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 74,
        "stateName": "Rajasthan",
        "stateNameInKannada": "ರಾಜಸ್ಥಾನ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 75,
        "stateName": "Sikkim",
        "stateNameInKannada": "ಸಿಕ್ಕಿಂ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 76,
        "stateName": "Tamil Nadu",
        "stateNameInKannada": "ತಮಿಳುನಾಡು",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 27,
        "stateName": "Telangana",
        "stateNameInKannada": "ತೆಲಂಗಾಣ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 78,
        "stateName": "Tripura",
        "stateNameInKannada": "ತ್ರಿಪುರಾ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 54,
        "stateName": "Uttar Pradesh",
        "stateNameInKannada": "ಉತ್ತರ ಪ್ರದೇಶ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 81,
        "stateName": "Uttarakhand",
        "stateNameInKannada": "ಉತ್ತರಾಖಂಡ",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 109,
        "stateName": "vb",
        "stateNameInKannada": "ಸ್ಟ್ರಿಂಗ್",
        "error": null,
        "error_description": null
    },
    {
        "stateId": 82,
        "stateName": "West Bengal",
        "stateNameInKannada": "ಪಶ್ಚಿಮ ಬಂಗಾಳ",
        "error": null,
        "error_description": null
    }
]);

  // const getList = () => {
  //   const response = api
  //     .get(baseURL + `state/get-all`)
  //     .then((response) => {
  //       setStateListData(response.data.content.state);
  //     })
  //     .catch((err) => {
  //       setStateListData([]);
  //     });
  // };

  useEffect(() => {
    // getList();
  }, []);

  const navigate = useNavigate();
  const saveSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Saved successfully",
      // text: "You clicked the button!",
    }).then(() => {
      navigate("#");
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
    <Layout title="District">
      <Block.Head>
        <Block.HeadBetween>
          <Block.HeadContent>
            <Block.Title tag="h2">District</Block.Title>
          </Block.HeadContent>
          <Block.HeadContent>
            <ul className="d-flex">
              <li>
                <Link
                  to="/seriui/district-list"
                  className="btn btn-primary btn-md d-md-none"
                >
                  <Icon name="arrow-long-left" />
                  <span>Go to List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/seriui/district-list"
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
          {/* <Form action="#"> */}
          <Row className="g-3 ">
            <Card>
              <Card.Body>
                {/* <h3>Farmers Details</h3> */}
                <Row className="g-gs">
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label>
                        State<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Select
                          name="stateId"
                          value={data.stateId}
                          onChange={handleInputs}
                          onBlur={() => handleInputs}
                          required
                          isInvalid={
                            data.stateId === undefined || data.stateId === "0"
                          }
                        >
                          <option value="">Select State</option>
                          {stateListData.map((list) => (
                            <option key={list.stateId} value={list.stateId}>
                              {list.stateName}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          State name is required
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="district">
                        District<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Control
                          id="district"
                          type="text"
                          name="districtName"
                          value={data.districtName}
                          onChange={handleInputs}
                          placeholder="Enter District"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          District name is required
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

export default District;
