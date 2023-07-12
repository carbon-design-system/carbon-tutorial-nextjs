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
} from '@carbon/react';
import { Globe, Application, PersonFavorite } from '@carbon/react/icons';
import { InfoSection, InfoCard } from '@/components/Info/Info';
import Image from 'next/image'

export function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Design &amp; build with Carbon</h1>
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
                <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
                  <h2 className="landing-page__subheading">What is Carbon?</h2>
                  <p className="landing-page__p">
                    Carbon is IBM’s open-source design system for digital products and
                    experiences. With the IBM Design Language as its foundation, the
                    system consists of working code, design tools and resources, human
                    interface guidelines, and a vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img 
                    className="landing-page__illo"
                    src={`tab-illo.png`}
                    layout='fixed'
                    alt="Carbon illustration"
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                  Rapidly build beautiful and accessible experiences. The Carbon kit
                  contains all resources you need to get started.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column lg={16} md={8} sm={4} className="landing-page__tab-content">
                  Carbon provides styles and components in Vanilla, React, Next, Angular,
                  and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles" className="landing-page__r3">
          <InfoCard
            heading="Carbon is Open"
            body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
            icon={() => <PersonFavorite size={32} />}
          />
          <InfoCard
            heading="Carbon is Modular"
            body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={() => <Application size={32} />}
          />
          <InfoCard
            heading="Carbon is Consistent"
            body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
 )
}


/*   <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    */