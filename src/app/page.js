
'use client';
import { Button } from '@carbon/react';
import LandingPage from './home/page';
import RepoPage from './repos/page';

// We need use client since the Carbon components we use are all client components.
// In Next 13 pages are pulled in as children to layout files
//  (see RootLayout src/app/layout.js) and these are always server side components.


export default function Home() {
  return (
    //     <div>
    // Hello Carbon! Well, not quite yet. This is the starting point for the Carbon NextJS tutorial.
    //     </div>

    <div>
      <LandingPage />
      <RepoPage />
      </div>
  );
}
