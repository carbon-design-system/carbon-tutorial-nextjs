'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
  ClickableTile,
} from '@carbon/react';
import { Html } from 'next/document';
import Image from 'next/image';
import {
  Switcher,
  Notification,
  UserAvatar,
  NavaidCivil,
  ArrowRight,
} from '@carbon/icons-react';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">iX Innovation Hub</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>Get Started</Tab>
            <Tab>About</Tab>
            <Tab>Idea Submission</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <Column
                    md={4}
                    lg="50%"
                    sm={4}
                    className="landing-page__title"
                  >
                    <ClickableTile
                      href="/media"
                      slug
                      id="tile-click"
                      renderIcon={ArrowRight}
                    >
                      <h4>Media Content Creation Tool (MVP)</h4>
                      <p>
                        Build Paid Media Content E2E - design experiments,
                        generate copy using minimal inputs, review compliance,
                        and send to AMAL
                      </p>
                      <div className="ai-data">
                        <div className="data-container">
                          <br></br>
                          <p>Last Release Date:</p>
                          <h5>1/1/25</h5>
                        </div>
                      </div>
                    </ClickableTile>
                  </Column>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}></Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h3 className="landing-page__subheading">
                    What is the iX Innovation Hub?
                  </h3>
                  <p className="landing-page__p">
                    The Innovation Hub is a connected suite of capabilities that
                    automate processes throughout marketing starting within MMA.
                    Stay tuned for new releases as the ix Toolbox expands
                    throughout 2025.
                  </p>
                  <Button>View Roadmap</Button>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <p className="landing-page__p">
                    Carbon provides styles and components in Vanilla, React,
                    Angular, and Vue for anyone building on the web.
                  </p>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <p>This is a test panel - I'm learning</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid></Grid>
      </Column>
    </Grid>
  );
}
