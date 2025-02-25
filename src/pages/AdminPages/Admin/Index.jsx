import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
// css
import "./Admin.scss";
import { ReactComponent as ScriptIcon } from "../../../Assets/icons/script.svg";
import { ReactComponent as SheetIcon } from "../../../Assets/icons/dataSheet.svg";
import { ReactComponent as SecurityIcon } from "../../../Assets/icons/security.svg";
import { ReactComponent as NoticeIcon } from "../../../Assets/icons/notice.svg";
import { ReactComponent as GridIcon } from "../../../Assets/icons/grid.svg";
import { ReactComponent as TokenIcon } from "../../../Assets/icons/token.svg";
import { ReactComponent as RobotIcon } from "../../../Assets/icons/bot.svg";
import { ReactComponent as MedalReward } from "../../../Assets/icons/medalReward.svg";
import { ReactComponent as UsersIcon } from "../../../Assets/icons/people.svg";
import { ReactComponent as ContactCard } from "../../../Assets/icons/contactCard.svg";
import { ReactComponent as DocIcon } from "../../../Assets/icons/doc.svg";
import { ReactComponent as FaqIcon } from "../../../Assets/icons/faq.svg";
import { getAllContentPages } from "../../../redux/admin/contentPages/thunk";
import UsersTab from "./Component/TabContent/Users/Index";
import ScriptTab from "./Component/TabContent/Scripts/ScriptTab";
import TokenTab from "./Component/TabContent/TokenUsage/Index";
import PromotsTab from "./Component/TabContent/Promts/Index";
import SubscriptionManagement from "./Component/TabContent/Subscription/Index";
import DashboardTab from "./Component/TabContent/Dashboard/Index";
import ContentPageTab from "./Component/TabContent/ContentPage/Index";
import FAQTab from "./Component/TabContent/FAQ/Index";
import CreditPlans from "./Component/TabContent/CreditPlans";
import BotsTab from "./Component/TabContent/Bots/Index";
import Configuration from "./Component/TabContent/Configuration/Index";
import ContactTab from "./Component/TabContent/Contact/Index";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { logData } from "../../../services/logService";

const tabLinks = [
  {
    title: "Main Pages",
    links: [
      {
        icon: <GridIcon />,
        label: "Dashboard",
        eventKey: "Dashboard",
      },
      {
        icon: <UsersIcon />,
        label: "Users",
        eventKey: "Users",
      },
      {
        icon: <MedalReward />,
        label: " Subscription Management",
        eventKey: "Subscription",
      },
      {
        icon: <MedalReward />,
        label: "Credit Plans",
        eventKey: "credit",
      },
      {
        icon: <ScriptIcon />,
        label: "Scripts",
        eventKey: "Scripts",
      },
      {
        icon: <ScriptIcon />,
        label: "Prompts",
        eventKey: "Prompts",
      },
      {
        icon: <RobotIcon />,
        label: "Bots",
        eventKey: "Bots",
      },
      {
        icon: <TokenIcon />,
        label: "Token Usage",
        eventKey: "TokenUsage",
      },
      {
        icon: <ContactCard />,
        label: "Contact",
        eventKey: "Contact",
      },
    ],
  },
  {
    title: "Content Pages",
    links: [
      {
        icon: <FaqIcon />,
        label: "FAQ Management",
        eventKey: "FAQ",
      },
    ],
  },
  {
    title: "Configuration",
    links: [
      {
        icon: <DocIcon />,
        label: "Configuration",
        eventKey: "configuration",
      },
    ],
  },
];

/**
 * Description:- This component includes the sidebar of admin dashboard.
 * @returns {any}
 */

const Admin = () => {
  const { allContentPages } = useSelector((state) => state.contentPages);
  const [allTabs, setAllTabs] = useState([...tabLinks]);

  const handleContentPages = async () => {
    const response = await handleApiRequest(getAllContentPages, {}, false);
  };

  useEffect(() => {
    handleContentPages();
  }, []);

  useEffect(() => {
    if (allContentPages.items) {
      let contentPages = [];

      for (let contentPage of allContentPages.items) {
        contentPages.push({
          label: contentPage.name,
          eventKey: contentPage.name,
          icon:
            contentPage.name === "About Us" ? (
              <SheetIcon />
            ) : contentPage.name === "Privacy And Policy" ? (
              <SecurityIcon />
            ) : contentPage.name === "Terms & Condition" ? (
              <NoticeIcon />
            ) : (
              <NoticeIcon />
            ),
        });
      }

      setAllTabs((prev) => {
        const faq = prev[1].links.pop();
        prev[1].links = [...contentPages, faq];
        return [...prev];
      });
    }
  }, [allContentPages]);

  // logData("allContentPages", allContentPages);
  // logData("allTabs", allTabs);
  // logData("tabLinks", tabLinks);

  return (
    <>
      <section className="admin position-relative " style={{ zIndex: "9" }}>
        <Container fluid>
          <Tab.Container id="left-tabs-example" defaultActiveKey="Dashboard">
            <Row className="align-items-start commonTab">
              <Col lg="3" className="my-2 sticky-top" style={{ top: "70px" }}>
                <div className="sidebarCstm py-2 bg-white py-3 px-4">
                  <Nav variant="pills" className="flex-column">
                    {allTabs.map((navSection) => (
                      <div key={navSection.title} className="py-2">
                        <div className="top pb-2">
                          <p className="m-0 text-muted text-uppercase">
                            {navSection.title}
                          </p>
                        </div>
                        {navSection.links.map((link) => {
                          return (
                            <Nav.Item key={link.eventKey}>
                              <Nav.Link
                                className="d-flex align-items-center bg-transparent border-0 px-0 py-2"
                                eventKey={link.eventKey}
                              >
                                <span className="icn me-2">{link.icon}</span>
                                {link.label}
                              </Nav.Link>
                            </Nav.Item>
                          );
                        })}
                      </div>
                    ))}
                  </Nav>
                </div>
              </Col>
              <Col sm={9} className="my-2">
                <Tab.Content className="">
                  <Tab.Pane eventKey="Dashboard">
                    <DashboardTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Users">
                    <UsersTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Subscription">
                    <SubscriptionManagement />
                  </Tab.Pane>
                  <Tab.Pane eventKey="credit">
                    <CreditPlans />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Scripts">
                    <ScriptTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Prompts">
                    <PromotsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Bots">
                    <BotsTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="TokenUsage">
                    <TokenTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Contact">
                    <ContactTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="FAQ">
                    <FAQTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="configuration">
                    <Configuration />
                  </Tab.Pane>
                  {allContentPages.items?.map((contentPage) => {
                    return (
                      <Tab.Pane
                        key={contentPage.id}
                        eventKey={contentPage.name}
                      >
                        <ContentPageTab pageDetails={contentPage} />
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};

export default Admin;
