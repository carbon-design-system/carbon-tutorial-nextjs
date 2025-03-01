'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      {/* Carbon UI Shell에 g100 테마 적용 */}
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
