'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  HeaderPanel,
} from '@carbon/react';

import {
  Notification,
  UserAvatar,
  Menu,
  Switcher as SwitcherIcon,
} from '@carbon/icons-react';

import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton aria-label="Open menu" />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
        </Link>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
            className="action-icons"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
            className="action-icons"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label={isSideNavExpanded ? 'Close switcher' : 'Open switcher'}
            aria-expanded={isSideNavExpanded}
            isActive={isSideNavExpanded}
            onClick={onClickSideNavExpand}
            tooltipAlignment="end"
            id="switcher-button"
          >
            <SwitcherIcon size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel
          expanded={isSideNavExpanded}
          onHeaderPanelFocus={onClickSideNavExpand}
          href="#switcher-button"
        >
          <Switcher
            aria-label="Switcher Container"
            expanded={isSideNavExpanded}
          >
            <Link href="/repos" passHref legacyBehavior>
              <SwitcherItem aria-label="Repositories" href="/repos">
                Repositories
              </SwitcherItem>
            </Link>
            <SwitcherDivider />
            <SwitcherItem href="#" aria-label="Link 2">
              Link 2
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 3">
              Link 3
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 4">
              Link 4
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 5">
              Link 5
            </SwitcherItem>
            <SwitcherDivider />
            <SwitcherItem href="#" aria-label="Link 6">
              Link 6
            </SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </Header>
    )}
  />
);

export default TutorialHeader;
