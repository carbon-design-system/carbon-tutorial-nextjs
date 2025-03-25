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
import { Notification, UserAvatar, Switcher } from '@carbon/icons-react';
import Link from 'next/link';

const menuItems = [
  { name: 'Repositories', href: '/repos' },
  { name: 'Settings', href: '/repos' },
  { name: 'Import', href: '/repos' },
];

const TutorialHeader = () => (
  <HeaderContainer
    // The render prop is a function that receives an object with properties
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      // This function returns the JSX to be rendered inside the HeaderContainer
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />

        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName href="/" prefix="IBM">
            Carbon Tutorial
          </HeaderName>
        </Link>

        <HeaderNavigation aria-label="Carbon Tutorial">
          {menuItems.map((item, index) => (
            <Link href={item.href} passHref legacyBehavior>
              <HeaderMenuItem key={index}>{item.name}</HeaderMenuItem>
            </Link>
          ))}
        </HeaderNavigation>

        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              {menuItems.map((item, index) => (
                <Link href={item.href} passHref legacyBehavior>
                  <HeaderMenuItem key={index}>{item.name}</HeaderMenuItem>
                </Link>
              ))}
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>

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
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
