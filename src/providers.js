'use client';

import TutorialHeader from '/Users/vibhutibisht/Desktop/carbon-tutorial-nextjs/carbon-tutorial-nextjs/src/app/components/TutorialHeader/TutorialHeader.js';
import { Content } from '@carbon/react';
import { Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
