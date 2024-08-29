// Now in our RepoPagecomponent in the src/app/repos/page.js file we’ll import our Grid components at the top:
'use client';
// Import RepoTable into RepoPage.
import RepoTable from './RepoTable';

import { Grid, Column } from '@carbon/react';

// Then below the imports, include the following arrays to pass into the RepoTable component.
// We’ll be setting the rows array from an API in the next tutorial step, but for now, static example rows will suffice.

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

const rows = [
  {
    id: '1',
    name: 'Repo 1',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '2',
    name: 'Repo 2',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '3',
    name: 'Repo 3',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

// Then add our grid containers in the return section.
export default function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        Data table will go here
      </Column>
    </Grid>

    // <div>REPO PAGE</div>
  );
}

// Build repo page:
// We currently have RepoPage that just contains a grid and placeholder content for the time being.
// In the next tutorial step we’re going to be querying an API to populate the DataTable component in this page.
// As a best practice to separate data fetching from the presentation components, go ahead and create
// a RepoTable.js as a sibling to page.js in src/app/repos.

// Lastly in RepoPage, we need to simply replace Data table will go here with:

<RepoTable headers={headers} rows={rows} />;
