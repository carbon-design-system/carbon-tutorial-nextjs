'use client';

import { Content, Theme } from '@carbon/react';
import DemoHeader from '@/components/DemoHeader/DemoHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <DemoHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
