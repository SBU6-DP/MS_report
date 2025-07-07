import React, { useContext, useState } from "react";
import Select from "react-select";
import "./doctor.css";
import Layouts from "../Layouts/Layouts";
import { ThemeContext } from "../../../ThemContent";

import chevronLeft from "../../../images/icons/chevron-left.svg";
import profile from "../../../images/icons/profile-1.jpg";
import location from "../../../images/icons/location.svg";
import kebab_menu from "../../../images/icons/kebab_menu.svg";
import white_kebab from "../../../images/icons/dark-kebab.svg";
import verified_tick from "../../../images/icons/Verified_tick.svg";
import profileimage from '../../../images/icons/profile_icon.svg'
import suitcaseimg from '../../../images/icons/suitcase.svg'
import awardimg from '../../../images/icons/award.svg'
import toolsimg from '../../../images/icons/tool.svg'
import starimg from '../../../images/icons/stars.svg'
import graphimg from '../../../images/icons/file_graph.svg'
import noteimg from '../../../images/icons/file-check.svg'
import colorimg from '../../../images/icons/colors_circle.svg'
import lightimg from '../../../images/icons/lightbulb.svg'

import { Badge, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

function Doctor() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("1");

  return (
    <>
      <Layouts>
        <div className="container doctor-main">
          <div className="doctor-search">
            <div className="search-box">
              <div className="back-btn">
                <h6 className="doctor-back-btn">
                  <img src={chevronLeft} /> Back to List
                </h6>
              </div>
              <div className="doctor-profile-detail">
                <div className="profile-left">
                  <div className="verified-space">
                    <img src={profile} className="doctor-img" />
                    <div className="verified-tick">
                      <img src={verified_tick} />
                    </div>
                  </div>
                  <div className="doctor-main-detail">
                    <h3 className="name">Dr. Michael Johnson</h3>
                    <h5 className="info">
                      Family Medicine | Neurosurgeon and CNN's Chief Medical
                      Correspondent.
                    </h5>
                    <h5 className="loc">
                      <img src={location} />
                      San Francisco
                    </h5>
                  </div>
                </div>
                <div className="profile-right">
                  <button className="more">
                    <img src={theme === "dark" ? white_kebab : kebab_menu} />
                  </button>
                  <button className="pubmed">View Pubmed profile</button>
                  <button className="linkedin">View LinkedIn profile</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="container p-0">
          <div className="row">
            <div className="col-8">
              <div className="doctor-tabs-container">
                <Nav tabs className="doctor-profile-tabs">
                  <NavItem>
                    <NavLink
                      NavLink
                      onClick={() => setActiveTab("1")}
                      className={`nav-link ${
                        activeTab === "1" ? "active" : ""
                      }`}
                    >
                      Profile Overview
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={() => setActiveTab("2")}
                      className={`nav-link ${
                        activeTab === "2" ? "active" : ""
                      }`}
                    >
                      Publication & Insights
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      onClick={() => setActiveTab("3")}
                      className={`nav-link ${
                        activeTab === "3" ? "active" : ""
                      }`}
                    >
                      Engagement Triggerers{" "}
                      <Badge color="light" className="ai-badge">
                        ⚡ AI Generated
                      </Badge>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <div className="tabContent-container">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="container-1">
                      <header className="profile-summary-header">
                        Profile Summary
                      </header>

                      <div className="profile-summary-contents">
                        <div className="About-box">
                          <p className="profile-summary-headings">
                            {" "}
                            <img
                              src={profileimage}
                              className="profilesummary-icons"
                            />
                            About
                          </p>
                          <ul className="About-list">
                            <li>Sarah Johnson, MD, PhD</li>
                            <li>15+ years experience in Cardiology</li>
                            <li>Currently at Metro Heart Institute</li>
                          </ul>
                        </div>
                        <div className="Keyroles">
                          <p className="profile-summary-headings">
                            {" "}
                            <img
                              src={suitcaseimg}
                              className="profilesummary-icons"
                            />
                            Key Roles & Expertise
                          </p>
                          <ul className="Keyroles-list">
                            <li>
                              Cardiology specialist with focus on interventional
                              procedures
                            </li>
                            <li>
                              Clinical researcher with emphasis on
                              cardiovascular outcomes
                            </li>
                            <li>
                              Medical educator and mentor to residents and
                              fellows
                            </li>
                          </ul>
                        </div>
                        <div className="Practice-influence">
                          <p className="profile-summary-headings">
                            {" "}
                            <img
                              src={awardimg}
                              className="profilesummary-icons"
                            />
                            Practice Influence
                          </p>
                          <ul className="Practice-influence-list">
                            <li>Author of 25+ peer-reviewed publications</li>
                            <li>Regular speaker at Cardiology conferences</li>
                            <li>Member of American Heart Association</li>
                          </ul>
                        </div>

                        <div className="Top-skills">
                          <p className="profile-summary-headings">
                            {" "}
                            <img
                              src={toolsimg}
                              className="profilesummary-icons"
                            />
                            Top Skills
                          </p>
                          <div className="skills-span">
                            <span>Interventional cardiology</span>
                            <span>Clinical trial design and execution</span>
                            <span>Patient outcome optimization</span>
                            <span>Medical education</span>
                            <span>Interdisciplinary collaboration </span>
                          </div>
                        </div>

                        <div className="Engagement-Triggers">
                          <p className="profile-summary-headings">
                            {" "}
                            <img
                              src={starimg}
                              className="profilesummary-icons"
                            />
                            Engagement Triggers
                          </p>
                          <ul className="Engagement-Triggers-list">
                            <li>
                              Recent publication on novel anticoagulation
                              approaches
                            </li>
                            <li>Upcoming presentation at annual conference</li>
                            <li>
                              New clinical research initiative starting next
                              quarter
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="container"></div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div className="ai-generated-box">
                      <header className="AI-Generated-heading">
                        AI-Generated Insights
                      </header>

                      <div className="Research-trends">
                        <p className="AI-Generated-topics">
                          {" "}
                          <img
                            src={graphimg}
                            className="Research-trends-icons"
                          />
                          Research Trends
                        </p>
                        <p className="Research-trends-content">
                          The publications show a focus on improving cardiology
                          treatments with innovative approaches and careful
                          attention to clinical outcomes and patient experience.
                        </p>
                      </div>

                      <div className="Key-Research-topics">
                        <p className="AI-Generated-topics">
                          <img src={noteimg} className="Key-Research-icons" />{" "}
                          Key Research Topics
                        </p>
                        <div className="ai-topic-list">
                          <span>Cardiology treatments</span>
                          <span>Clinical outcomes</span>
                          <span>Therapeutic approaches</span>
                          <span>Patient care</span>
                          <span>Medical innovation</span>
                          <span>Medical innovation</span>
                        </div>
                      </div>

                      <div className="Collaboration-Pattern">
                        <p className="AI-Generated-topics">
                          {" "}
                          <img
                            src={colorimg}
                            className="Collaboration-Pattern-icon"
                          />
                          Collaboration Pattern
                        </p>
                        <p className="Collaboration-Pattern-content">
                          Sarah Johnson works with various research teams and
                          co-authors, indicating a collaborative approach to
                          advancing knowledge in cardiology.
                        </p>
                      </div>

                      <div className="Potential-research-intrest">
                        <p className="AI-Generated-topics">
                          <img
                            src={lightimg}
                            className="Potential-Research-icons"
                          />{" "}
                          Potential Research Interests
                        </p>
                        <div className="ai-research-int">
                          <span>Innovative treatment modalities</span>
                          <span>Patient outcome optimization</span>
                          <span>Clinical research methodology</span>
                          <span>Evidence-based medicine</span>
                          <span>Therapeutic innovation</span>
                        </div>
                      </div>
                    </div>
                    <div className="container-conversation">
                      <div className="conversation-starters-contents">
                        <header className="conversation-starters-heading">
                          Conversation Starters
                        </header>
                        <div className="conversation-starters-box1">
                          <ul className="conversation-starters-box1-description">
                            <i>
                                "I noticed your recent work on anticoagulation
                            approaches. How do you see this evolving with newer
                            treatment options?"
                            </i>
                            <li className="blue">
                              <div className="blue-content">
                                <p className="why-chosen">Why Chosen</p>
                                <p className="why-chosen-content">
                                  Directly relates to HCP's recent research
                                  focus
                                </p>
                              </div>
                            </li>
                            <li className="pink">
                              <div className="pink-content">
                                <p className="Viatris-connection">
                                  Viatris Connection
                                </p>
                                <p className="Viatris-connection-content">
                                  Connects to Viatris cardiovascular portfolio
                                </p>
                              </div>
                            </li>
                            <li className="green">
                              <div className="green-content">
                                <p className="Sales-Enablement-Tip">
                                  Sales Enablement Tip
                                </p>
                                <p className="Sales-Enablement-Tip-content">
                                  Listen for treatment challenges that Viatris
                                  products might addressl
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="container-conversation">
                      <div className="conversation-starters-contents">
                        <header className="conversation-starters-heading">
                          Next Best Actions
                        </header>
                        <div className="conversation-starters-box1">
                          <ul className="conversation-starters-box1-description">
                            <i>
                                Share recent clinical data on Viatris cardiovascular products
                            </i>
                            <li className="blue blu-left">
                              <div className="blue-content">
                                <p className="why-chosen">Rationale</p>
                                <p className="why-chosen-content">
                                  Aligns with HCP's research interests and clinical focus
                                </p>
                              </div>
                            </li>
                            <li className="pink pink-left">
                              <div className="pink-content">
                                <p className="Viatris-connection">
                                  Sales Intent
                                </p>
                                <p className="Viatris-connection-content">
                                  Position Viatris as a scientifically-driven partner
                                </p>
                              </div>
                            </li>
                            <li className="green green-left">
                              <div className="green-content">
                                <p className="Sales-Enablement-Tip">
                                  Execution Tip
                                </p>
                                <p className="Sales-Enablement-Tip-content">
                                  Focus on specific outcomes relevant to HCP's patient population
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
            <div className="col-4">
              <div className="container recent-activity-box">
                <header className="Recent-activity-header">
                  Recent Activities
                </header>
                <div className="Recent-activity-content">
                  <div className="activity-list">
                    <p className="activity-detail">
                      Published health education article
                    </p>
                    <p className="Recent-activity-timings">2 days ago</p>
                  </div>

                  <div className="activity-list">
                    <p className="activity-detail">
                      Updated the LinkedIn profile
                    </p>
                    <p className="Recent-activity-timings">2 days ago</p>
                  </div>

                  <div className="activity-list">
                    <p className="activity-detail">
                      Active on medical platform
                    </p>
                    <p className="Recent-activity-timings">4 days ago</p>
                  </div>

                  <div className="activity-list">
                    <p className="activity-detail">
                      Updated the PubMed profile
                    </p>
                    <p className="Recent-activity-timings">2 week ago</p>
                  </div>

                  <div className="activity-list">
                    <p className="activity-detail">
                      Published the Neuroscience research article
                    </p>
                    <p className="Recent-activity-timings">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
}

export default Doctor;
