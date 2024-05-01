'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme>
        <TutorialHeader theme="g100" />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
