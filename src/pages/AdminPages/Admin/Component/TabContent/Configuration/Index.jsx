import React, { useEffect, useState } from "react";
import { Button, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  addSettingConfigs,
  getSettingConfigs,
} from "../../../../../../redux/admin/configrations/thunk";
import { handleApiRequest } from "../../../../../../services/handleApiRequest";

/**
 * Description:- Here Admin can update site configrations like aws configs, mailgun configs, stripe configs, google api configs, twilio configs and others.
 * @returns {any}
 */

const Configuration = () => {
  const { allConfigs } = useSelector((state) => state.configrations);
  const [configsDetails, setConfigsDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChnage = (e) => {
    setConfigsDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleResetConfigs = (e) => {
    setConfigsDetails({});
  };

  const handleAllConfigs = async () => {
    const response = await handleApiRequest(getSettingConfigs);
  };

  const handleAddConfigs = async () => {
    const response = await handleApiRequest(addSettingConfigs, configsDetails);
    if (response.isSuccess) {
      handleAllConfigs();
    }
  };

  useEffect(() => {
    handleAllConfigs();
  }, []);

  // console.log("allConfigs", allConfigs);
  // console.log("configsDetails", configsDetails);

  return (
    <>
      <div className="cardCstm py-3">
        <div className="top border-bottom pb-3 px-lg-4 px-3 d-flex align-items-center justify-content-between gap-10">
          <div className="left d-flex align-items-center gap-10">
            <h4 className="m-0 fw-bold">Configuration</h4>
          </div>
        </div>
        <div className="CardBody py-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="AWS">
            <Nav variant="pills" className="px-3 border-bottom underLineTab">
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="AWS"
                  onClick={handleResetConfigs}
                >
                  AWS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="AWS_Ses"
                  onClick={handleResetConfigs}
                >
                  AWS Ses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="Twillio"
                  onClick={handleResetConfigs}
                >
                  Twillio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="Stripe"
                  onClick={handleResetConfigs}
                >
                  Stripe
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="Google_Api"
                  onClick={handleResetConfigs}
                >
                  Google Api
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="Firebase_Server"
                  onClick={handleResetConfigs}
                >
                  Firebase Server
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link
                  className="bg-transparent position-relative"
                  eventKey="mailgun"
                  onClick={handleResetConfigs}
                >
                  Mailgun
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="px-3 pt-3">
              <Tab.Pane eventKey="AWS">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="AWS Secret Access Key"
                        name="awsSecretAccessKey"
                        value={
                          configsDetails.awsSecretAccessKey ??
                          allConfigs.data?.awsSecretAccessKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Secret
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="AWS Secret Access Id"
                        name="awsSecretAccessId"
                        value={
                          configsDetails.awsSecretAccessId ??
                          allConfigs.data?.awsSecretAccessId ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Region
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="AWS Region Name"
                        name="awsRegionName"
                        value={
                          configsDetails.awsRegionName ??
                          allConfigs.data?.awsRegionName ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Bucket
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="AWS Bucket Name"
                        name="awsBucketName"
                        value={
                          configsDetails.awsBucketName ??
                          allConfigs.data?.awsBucketName ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="awsUrl"
                        name="awsUrl"
                        value={
                          configsDetails.awsUrl ?? allConfigs.data?.awsUrl ?? ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="AWS_Ses">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Amazon Ses Key"
                        name="amazonSesKey"
                        value={
                          configsDetails.amazonSesKey ??
                          allConfigs.data?.amazonSesKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Secret
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Amazon Ses Secret"
                        name="amazonSesSecret"
                        value={
                          configsDetails.amazonSesSecret ??
                          allConfigs.data?.amazonSesSecret ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="Twillio">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="twilioAccountSid"
                        name="twilioAccountSid"
                        value={
                          configsDetails.twilioAccountSid ??
                          allConfigs.data?.twilioAccountSid ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Secret
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="twilioAuthToken"
                        name="twilioAuthToken"
                        value={
                          configsDetails.twilioAuthToken ??
                          allConfigs.data?.twilioAuthToken ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Bucket
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="twilioFrom"
                        name="twilioFrom"
                        value={
                          configsDetails.twilioFrom ??
                          allConfigs.data?.twilioFrom ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="Stripe">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Sandbox Publishable Key"
                        name="sandboxPublishableKey"
                        value={
                          configsDetails.sandboxPublishableKey ??
                          allConfigs.data?.sandboxPublishableKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Secret
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Sandbox Secret Key"
                        name="sandboxSecretKey"
                        value={
                          configsDetails.sandboxSecretKey ??
                          allConfigs.data?.sandboxSecretKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="Google_Api">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Google Api Key"
                        name="googleApiKey"
                        value={
                          configsDetails.googleApiKey ??
                          allConfigs.data?.googleApiKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Secret
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Email"
                        name="email"
                        value={
                          configsDetails.email ?? allConfigs.data?.email ?? ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="Firebase_Server">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Api key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Api Key"
                        name="apiKey"
                        value={
                          configsDetails.apiKey ?? allConfigs.data?.apiKey ?? ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Authentication Domain
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Authentication Domain"
                        name="authDomain"
                        value={
                          configsDetails.authDomain ??
                          allConfigs.data?.authDomain ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Project Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Project Id"
                        name="projectId"
                        value={
                          configsDetails.projectId ??
                          allConfigs.data?.projectId ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Storage Bucket
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Storage Bucket"
                        name="storageBucket"
                        value={
                          configsDetails.storageBucket ??
                          allConfigs.data?.storageBucket ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Messaging Sender Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Messaging Sender Id"
                        name="messagingSenderId"
                        value={
                          configsDetails.messagingSenderId ??
                          allConfigs.data?.messagingSenderId ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        App Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="App Id"
                        name="appId"
                        value={
                          configsDetails.appId ?? allConfigs.data?.appId ?? ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Measurement Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Measurement Id"
                        name="measurementId"
                        value={
                          configsDetails.measurementId ??
                          allConfigs.data?.measurementId ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="mailgun">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Api key
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Mailgun Api Key"
                        name="mailgunApiKey"
                        value={
                          configsDetails.mailgunApiKey ??
                          allConfigs.data?.mailgunApiKey ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Authentication Domain
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Mailgun Domain"
                        name="mailgunDomain"
                        value={
                          configsDetails.mailgunDomain ??
                          allConfigs.data?.mailgunDomain ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label fw-sbold m-0">
                        Mailgun From
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ background: "#eee" }}
                        placeholder="Mailgun From"
                        name="mailgunFrom"
                        value={
                          configsDetails.mailgunFrom ??
                          allConfigs.data?.mailgunFrom ??
                          ""
                        }
                        onChange={handleChnage}
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
              <Row className="mt-3 btnWrpp justify-content-center">
                <Col lg="6" className="my-2">
                  <Button
                    onClick={handleAddConfigs}
                    className="d-flex w-100 align-items-center justify-content-center commonBtn"
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default Configuration;
