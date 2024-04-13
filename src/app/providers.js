'use client';
import { usePathname } from 'next/navigation';
import { Content, Theme } from '@carbon/react';
import styles from './_login.scss';
import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <div>
      <Theme theme="g100">
        {!isLoginPage ? (
          <Theme theme="g100">
            <TutorialHeader />
          </Theme>
        ) : null}
      </Theme>
      {!isLoginPage ? (
        <Theme theme="g90">
          <Content>{children}</Content>
        </Theme>
      ) : (
        <Theme className="login-page" theme="g100">
          {children}
        </Theme>
      )}
    </div>
  );
}
