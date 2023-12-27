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
} from '@carbon/react';
import Link from 'next/link';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

const TutorialHeader = () => (
  <>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
        <Notification size={20} />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
        <UserAvatar size={20} />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
        <Switcher size={20} />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <Link href="/" passHref legacyBehavior>
        <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
      </Link>
      <Link href="/repos" passHref legacyBehavior>
        <HeaderMenuItem>Repositories</HeaderMenuItem>
      </Link>
    </HeaderNavigation>

    <HeaderSideNavItems>
      <Link href="/" passHref legacyBehavior>
        <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
      </Link>
      <Link href="/repos" passHref legacyBehavior>
        <HeaderMenuItem>Repositories</HeaderMenuItem>
      </Link>
      <Link href="/home" passHref legacyBehavior>
        <HeaderMenuItem>Home</HeaderMenuItem>
      </Link>
    </HeaderSideNavItems>
  </>
);

export default TutorialHeader;
