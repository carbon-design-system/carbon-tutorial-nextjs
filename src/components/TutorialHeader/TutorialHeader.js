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
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import Link from 'next/link';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header>
        <SkipToContent />
        {/* For rendering Hamburger menu */}
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        {/* <HeaderName href="/" prefix="IBM">
            Carbon Tutorial
          </HeaderName> */}
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM">Carbon Tutorial</HeaderName>
        </Link>
        {/* <HeaderNavigation>
            <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
          </HeaderNavigation> */}

        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/repos" passHref legacyBehavior>
            <HeaderMenuItem>Repositories</HeaderMenuItem>
          </Link>
        </HeaderNavigation>

        <SideNav expanded={isSideNavExpanded} isPersistent={false}>
          <SideNavItems>
            {/* <HeaderSideNavItems>
                <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
              </HeaderSideNavItems> */}

            <HeaderSideNavItems>
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem>Repositories</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
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
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
