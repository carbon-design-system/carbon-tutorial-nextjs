import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenuButton,
  HeaderSideNavItems,
} from '@carbon/react';

import Link from 'next/link';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

export default function TutorialHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          {/* Side navigation toggle button */}
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />

          {/* Logo / Application name */}
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
          </Link>

          {/* Top navigation */}
          <HeaderNavigation aria-label="Carbon Tutorial">
            <Link href="/repos" passHref legacyBehavior>
              <HeaderMenuItem>Repositories</HeaderMenuItem>
            </Link>
          </HeaderNavigation>

          {/* Header action icons */}
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
              aria-label="App Switcher"
              tooltipAlignment="center"
              className="action-icons"
            >
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>

          {/* Side navigation items (example) */}
          <HeaderSideNavItems>
            <Link href="/repos" passHref legacyBehavior>
              <HeaderMenuItem>Repositories</HeaderMenuItem>
            </Link>
          </HeaderSideNavItems>
        </Header>
      )}
    />
  );
}
