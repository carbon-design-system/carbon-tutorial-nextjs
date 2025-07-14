'use client';

import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  // HeaderSideNav,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react';

import { Notification, UserAvatar, Switcher } from '@carbon/icons-react';
import Link from 'next/link';

export default function TutorialHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <SkipToContent />
          <Header aria-label="Carbon Tutorial Header">
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <Link href="/" passHref legacyBehavior>
              <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
            </Link>
            <HeaderNavigation aria-label="Carbon Tutorial">
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Repositories</HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center"
              >
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center"
              >
                <UserAvatar size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="center"
              >
                <Switcher size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            {/* <HeaderSideNav expanded={isSideNavExpanded}>
  <HeaderSideNavItems>
    <Link href="/repos" passHref legacyBehavior>
      <HeaderMenuItem>Repositories</HeaderMenuItem>
    </Link>
  </HeaderSideNavItems>
</HeaderSideNav> */}
          </Header>
        </>
      )}
    />
  );
}
