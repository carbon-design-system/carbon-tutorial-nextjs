// In providers.js we will add inline theming for our navigation.
// First, we need to import our new Theme component.

'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
// import { Content } from '@carbon/react';
import { Content, Theme } from '@carbon/react';
// Then, we will wrap Theme around our header, and set the zoned theme using the theme prop,
// which accepts one of four strings: "white", "g10", "g90" or "g100".

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>

      {/* <TutorialHeader />
      <Content>{children}</Content> */}
    </div>
  );
}

// We have one last thing to fix before we’re done.
// Because we changed the header theme to dark, the <HeaderGlobalAction>
// tooltips are now light instead of dark, and when you scroll the page,
// it blends into the content.
// To fix this, we’ll add some overriding styles in _tutorial-header.scss:
