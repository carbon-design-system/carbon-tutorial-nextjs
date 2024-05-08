'use client';

import React from 'react';
import Image from 'next/image';
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
  unstable_StaticNotification as StaticNotification,
  unstable_FeatureFlags as FeatureFlags,
} from '@carbon/react';
import {
  Advocate,
  Globe,
  AcceleratingTransformation,
} from '@carbon/pictograms-react';
import { InfoSection, InfoCard } from '@/components/Info/Info';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          IBM Change Tools &amp; Accelerators
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
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
                  <h3 className="landing-page__subheading">
                    What is IBM Change?
                  </h3>
                  <p className="landing-page__p">
                    The IBM Change model provides a framework of accelerators
                    and new ways of working with our clients on their path to
                    transform their enterprise by innovating around the
                    experiences they offer to their employees.
                  </p>
                  <a
                    href="https://w3.ibm.com/services/contentplus/offerings/enterprise-change-management.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button>Learn more</Button>
                  </a>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 8 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={604}
                    height={498}
                  />
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
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
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
                  Carbon provides styles and components in Vanilla, React, Next,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles">
          <InfoCard
            heading="Carbon is Open"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={() => <Advocate size={32} />}
          />
          <InfoCard
            heading="Carbon is Modular"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={() => <AcceleratingTransformation size={32} />}
          />
          <InfoCard
            heading="Carbon is Consistent"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
