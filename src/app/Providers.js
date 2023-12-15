'use client';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export default ({ children }) => {
  return (
    <>
      <div>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>{children}</Content>
      </div>
    </>
  );
};
