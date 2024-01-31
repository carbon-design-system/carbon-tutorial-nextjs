'use client';

import {
  Button,
  Search,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Tile,
  Toggle,
} from '@carbon/react';

export default function Home() {
  return (
    <main>
      <Tile>
        <h1>Getting Started</h1>
        <p>Based Carbon Design System + Next.js</p>
      </Tile>
      <br />
      <Tabs>
        <TabList aria-label="List of tabs">
          <Tab>Tag</Tab>
          <Tab>Search</Tab>
          <Tab>Toggle</Tab>
          <Tab disabled>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Tag type="green">Getting Started</Tag>
            <Tag type="high-contrast">NextJS</Tag>
            <Tag type="outline">Carbon</Tag>
          </TabPanel>
          <TabPanel>
            <Search />
          </TabPanel>
          <TabPanel>
            <Toggle />
          </TabPanel>
          <TabPanel>Tab Panel 4</TabPanel>
        </TabPanels>
      </Tabs>
      <Tile>
        <Button kind="primary">About</Button>
        <Button kind="secondary">Github</Button>
      </Tile>
    </main>
  );
}
