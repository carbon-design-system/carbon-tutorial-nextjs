'use client';

// import * as React from 'react';

// import { useLayoutEffect, useEffect, useRef } from 'react';

// import { stopEvent, getDocument, isMouseLikePointerType, contains, activeElement, isSafari, isTypeableCombobox, isVirtualClick, isVirtualPointerEvent, getTarget, getPlatform, isTypeableElement, isReactEvent, isRootElement, isEventTargetWithin, isMac, getUserAgent } from '@floating-ui/react/utils';
// import { floor, evaluate } from '@floating-ui/utils';
// import { getComputedStyle, isElement, getNodeName, isHTMLElement, getWindow, isLastTraversableNode, getParentNode } from '@floating-ui/utils/dom';

//  First, we need to import our grid components at the top of LandingPage:
// import { Grid, Column } from '@carbon/react';

// In our first row we’ll need a Breadcrumb component.
// First, let’s import the components we need. Because we’ll be importing several components for this page,
// we’ll import them directly from the @carbon/react package instead of the direct path for each one.
// import { Breadcrumb, BreadcrumbItem, Grid, Column } from '@carbon/react';

// import { Breadcrumb, BreadcrumbItem, Grid, Column } from '@carbon/react';

// We’ll break this down into three rows.
// The first row with the gray background doesn’t appear to need any columns.
// The second row with the white background looks like it has two columns of different widths.
// The third row with the gray background looks like it has four columns of equal width.

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

//   In our second row we’ll need Tabs and Button components. We’ll update the @carbon/react import
// Note: We’re using the grid for the page layout, but we also need to apply the grid
// within the tab content. When doing so, make sure the nested grid has the
// expected Grid > Column DOM structure. Nested grids are officially supported with our
// CSS Grid. If you are using FlexGrid, subgrid is not supported.

// We can now add our images and text for each column in the first Tab in LandingPage.
// Let’s import Image from Next.js by adding the following import under our Carbon React component imports

import Image from 'next/image';

<Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
  <Image
    className="landing-page__illo"
    src="/tab-illo.png"
    alt="Carbon illustration"
    width={604}
    height={498}
  />
</Column>;

// Now let’s set the image size in _landing-page.scss and also set the background color of our page

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        {/* We can now add our component to the first row, along with a header, like so: */}
        {/* <Breadcrumb noTrailingSlash> */}
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>{' '}
        1
      </Column>

      {/* In our second row we’ll need Tabs and Button components. We’ll update the @carbon/react import to: */}
      {/* 
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
} from '@carbon/react'; */}

      {/* The <TabList> is the tab navigation, and the <TabPanels> contains each tab content. 
You’ll notice that within each <TabPanel>, we nested another <Grid> and <Column>. 
This is because the parent column <Column lg={16} md={8} sm={4} className="landing-page__r2"> 
is acting as a faux row, and each tab within that row contains the actual column content. 
When nesting columns, you must always wrap the nested group within another <Grid> */}

      {/* Hold up! If you were to run the Equal Access Toolkit to check for accessibility violations, 
you’d see Multiple navigation landmarks must have unique labels specified with aria-label 
or aria-labelledby because both the Breadcrumb and Tabs components use <nav> elements. 
To fix, add aria-label to the Breadcrumb opening tag */}

      {/* Same goes for the TabList opening tag: */}

      {/* Next, we’ll need to add some styling overrides to move the tabs to the right on large viewports. 
Create a file _overrides.scss in src/app/home with this declaration block. */}

      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          {/* <TabList className="tabs-group"> */}
          <TabList className="tabs-group" aria-label="Tab navigation">
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
                  <h3 className="landing-page__subheading">What is Carbon?</h3>
                  <p className="landing-page__p">
                    Carbon is IBM’s open-source design system for digital
                    products and experiences. With the IBM Design Language as
                    its foundation, the system consists of working code, design
                    tools and resources, human interface guidelines, and a
                    vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  IMAGE WILL GO HERE
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
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </p>
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
          </TabPanels>
        </Tabs>
        <Grid className="tabs-group-content">
          <Column md={4} lg={7} sm={4} className="landing-page__tab-content">
            7/16
          </Column>

          <Column md={4} lg={{ span: 8, offset: 8 }} sm={4}>
            8/16
          </Column>
        </Grid>
      </Column>

      {/* The third row will be created in a later tutorial, so we’ll just add the headers for now. */}

      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        {/* <Grid>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
        </Grid> */}

        <Grid>
          <Column lg={4} md={2} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column
            lg={{ start: 5, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Carbon is Open
          </Column>
          <Column
            lg={{ start: 9, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Carbon is Modular
          </Column>
          <Column
            lg={{ start: 13, span: 3 }}
            md={{ start: 3, span: 6 }}
            sm={4}
            className="landing-page__title"
          >
            Carbon is Consistent
          </Column>
        </Grid>
      </Column>
    </Grid>

    // <div>LANDING PAGE</div>
  );
}
