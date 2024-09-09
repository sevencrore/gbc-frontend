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

function Taluk() {
  const [data, setData] = useState({
    talukName: "",
    stateId: "",
    districtId: ""
  });

  const [validated, setValidated] = useState(false);

  let name, value;
  const handleInputs = (e) => {
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
      // event.stopPropagation();
      api
        .post(baseURL + `taluk/add`, data)
        .then((response) => {
          if (response.data.content.error) {
            saveError(response.data.content.error_description);
          } else {
            saveSuccess();
            setData({
              talukName: "",
              stateId: "",
              districtId: ""
            });
            setValidated(false);
          }
        })
        .catch((err) => {
          if (Object.keys(err.response.data.validationErrors).length > 0) {
            saveError(err.response.data.validationErrors);
          }
        });
      setValidated(true);
    }
  };

  const clear = () => {
    setData({
      talukName: "",
      stateId: "",
      districtId: ""
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
  //       if (response.data.content.state) {
  //         setStateListData(response.data.content.state);
  //       }
  //     })
  //     .catch((err) => {
  //       setStateListData([]);
  //     });
  // };

  useEffect(() => {
    // getList();
  }, []);

  // to get district
  const [districtListData, setDistrictListData] = useState([
    {
        "districtId": 98,
        "stateId": 29,
        "districtName": "Bagalkot ",
        "stateName": null,
        "districtNameInKannada": "ಬಾಗಲಕೋಟೆ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 58,
        "stateId": 29,
        "districtName": "Bagalkote",
        "stateName": null,
        "districtNameInKannada": "ಬಾಗಲಕೋಟೆ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 27,
        "stateId": 29,
        "districtName": "Ballari",
        "stateName": null,
        "districtNameInKannada": "ಬಳ್ಳಾರಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 100,
        "stateId": 29,
        "districtName": "Bangalore (Rural) ",
        "stateName": null,
        "districtNameInKannada": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 101,
        "stateId": 29,
        "districtName": "Bangalore (Urban) ",
        "stateName": null,
        "districtNameInKannada": "ಬೆಂಗಳೂರು ನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 73,
        "stateId": 29,
        "districtName": "Belagavi",
        "stateName": null,
        "districtNameInKannada": " ಬೆಳಗಾವಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 34,
        "stateId": 29,
        "districtName": "Bengaluru Rural",
        "stateName": null,
        "districtNameInKannada": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 72,
        "stateId": 29,
        "districtName": "Bengaluru Urban",
        "stateName": null,
        "districtNameInKannada": "ಬೆಂಗಳೂರು ನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 52,
        "stateId": 29,
        "districtName": "Bidar",
        "stateName": null,
        "districtNameInKannada": "ಬೀದರ್",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 41,
        "stateId": 29,
        "districtName": "Chamarajanagar",
        "stateName": null,
        "districtNameInKannada": "ಚಾಮರಾಜನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 29,
        "stateId": 29,
        "districtName": "Chikkaballapura",
        "stateName": null,
        "districtNameInKannada": null,
        "error": null,
        "error_description": null
    },
    {
        "districtId": 45,
        "stateId": 29,
        "districtName": "Chikkaballapura",
        "stateName": null,
        "districtNameInKannada": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 26,
        "stateId": 29,
        "districtName": "Chikkamagaluru",
        "stateName": null,
        "districtNameInKannada": "ಚಿಕ್ಕಮಗಳೂರು",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 75,
        "stateId": 29,
        "districtName": "Chitradurga",
        "stateName": null,
        "districtNameInKannada": "ಚಿತ್ರದುರ್ಗ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 24,
        "stateId": 29,
        "districtName": "Dakshina Kannada",
        "stateName": null,
        "districtNameInKannada": "ದಕ್ಷಿಣ ಕನ್ನಡ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 76,
        "stateId": 29,
        "districtName": "Davanagere",
        "stateName": null,
        "districtNameInKannada": "ದಾವಣಗೆರೆ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 63,
        "stateId": 29,
        "districtName": "Dharwad",
        "stateName": null,
        "districtNameInKannada": "ಧಾರವಾಡ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 61,
        "stateId": 29,
        "districtName": "Gadag",
        "stateName": null,
        "districtNameInKannada": "ಗದಗ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 36,
        "stateId": 29,
        "districtName": "Hassan",
        "stateName": null,
        "districtNameInKannada": "ಹಾಸನ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 30,
        "stateId": 29,
        "districtName": "Haveri",
        "stateName": null,
        "districtNameInKannada": "ಹಾವೇರಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 77,
        "stateId": 29,
        "districtName": "Kalaburagi",
        "stateName": null,
        "districtNameInKannada": "ಕಲಬುರಗಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 21,
        "stateId": 29,
        "districtName": "Kodagu",
        "stateName": null,
        "districtNameInKannada": "ಕೊಡಗು",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 78,
        "stateId": 29,
        "districtName": "Kolar",
        "stateName": null,
        "districtNameInKannada": "ಕೋಲಾರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 79,
        "stateId": 29,
        "districtName": "Koppal",
        "stateName": null,
        "districtNameInKannada": "ಕೊಪ್ಪಳ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 38,
        "stateId": 29,
        "districtName": "Mandya",
        "stateName": null,
        "districtNameInKannada": "ಮಂಡ್ಯ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 51,
        "stateId": 29,
        "districtName": "Mysuru",
        "stateName": null,
        "districtNameInKannada": "ಮೈಸೂರು",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 40,
        "stateId": 29,
        "districtName": "Raichur",
        "stateName": null,
        "districtNameInKannada": "ರಾಯಚೂರು",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 99,
        "stateId": 29,
        "districtName": "Rama Nagara ",
        "stateName": null,
        "districtNameInKannada": "ರಾಮನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 33,
        "stateId": 29,
        "districtName": "Ramanagara",
        "stateName": null,
        "districtNameInKannada": "ರಾಮನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 35,
        "stateId": 29,
        "districtName": "Shivamogga",
        "stateName": null,
        "districtNameInKannada": " ಶಿವಮೊಗ್ಗ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 46,
        "stateId": 29,
        "districtName": "Tumakuru",
        "stateName": null,
        "districtNameInKannada": "ತುಮಕೂರು",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 64,
        "stateId": 29,
        "districtName": "Udupi",
        "stateName": null,
        "districtNameInKannada": "ಉಡುಪಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 23,
        "stateId": 29,
        "districtName": "Udupi 1",
        "stateName": null,
        "districtNameInKannada": null,
        "error": null,
        "error_description": null
    },
    {
        "districtId": 97,
        "stateId": 29,
        "districtName": "Udupi56",
        "stateName": null,
        "districtNameInKannada": "ಉಡುಪಿ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 25,
        "stateId": 29,
        "districtName": "Uttara kannada",
        "stateName": null,
        "districtNameInKannada": "ಉತ್ತರ ಕನ್ನಡ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 50,
        "stateId": 29,
        "districtName": "Vijayanagara",
        "stateName": null,
        "districtNameInKannada": "ವಿಜಯನಗರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 74,
        "stateId": 29,
        "districtName": "Vijayapura",
        "stateName": null,
        "districtNameInKannada": "ವಿಜಯಪುರ",
        "error": null,
        "error_description": null
    },
    {
        "districtId": 71,
        "stateId": 29,
        "districtName": "Yadgiri",
        "stateName": null,
        "districtNameInKannada": "ಯಾದಗಿರಿ",
        "error": null,
        "error_description": null
    }
]);

  // const getDistrictList = (_id) => {
  //   const response = api
  //     .get(baseURL + `district/get-by-state-id/${_id}`)
  //     .then((response) => {
  //       if (response.data.content.district) {
  //         setDistrictListData(response.data.content.district);
  //       }
  //     })
  //     .catch((err) => {
  //       setDistrictListData([]);
  //     });
  // };

  useEffect(() => {
    if (data.stateId) {
      // getDistrictList(data.stateId);
    }
  }, [data.stateId]);

  const navigate = useNavigate();
  const saveSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Saved successfully",
      // text: "You clicked the button!",
    }).then(() => navigate("#"));
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
    <Layout title="Taluk">
      <Block.Head>
        <Block.HeadBetween>
          <Block.HeadContent>
            <Block.Title tag="h2">Taluk</Block.Title>
          </Block.HeadContent>
          <Block.HeadContent>
            <ul className="d-flex">
              <li>
                <Link
                  to="/seriui/taluk-list"
                  className="btn btn-primary btn-md d-md-none"
                >
                  <Icon name="arrow-long-left" />
                  <span>Go to List</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/seriui/taluk-list"
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
        {/* <Form action="#"> */}
        <Form noValidate validated={validated} onSubmit={postData}>
          <Row className="g-3 ">
            <Card>
              <Card.Body>
                {/* <h3>Farmers Details</h3> */}
                <Row className="g-gs">
                  <Col lg="6">
                    <Form.Group className="form-group ">
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
                          State Name is required
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group ">
                      <Form.Label>
                        District<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Select
                          name="districtId"
                          value={data.districtId}
                          onChange={handleInputs}
                          onBlur={() => handleInputs}
                          required
                          isInvalid={
                            data.districtId === undefined ||
                            data.districtId === "0"
                          }
                        >
                          <option value="">Select District</option>
                          {districtListData.length
                            ? districtListData.map((list) => (
                                <option
                                  key={list.districtId}
                                  value={list.districtId}
                                >
                                  {list.districtName}
                                </option>
                              ))
                            : ""}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          District Name is required
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Taluk">
                        Taluk<span className="text-danger">*</span>
                      </Form.Label>
                      <div className="form-control-wrap">
                        <Form.Control
                          id="Taluk"
                          name="talukName"
                          value={data.talukName}
                          onChange={handleInputs}
                          type="text"
                          placeholder="Enter Taluk"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Taluk Name is required
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

export default Taluk;
