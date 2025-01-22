'use client';

import { Content, Theme } from '@carbon/react';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g0">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
