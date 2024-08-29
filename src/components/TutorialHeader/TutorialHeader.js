// import the icons in the TutorialHeader.js file, we need to import each individual icon we will use.
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

import Link from 'next/link';

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

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />

        {/* <HeaderName href="/" prefix="IBM">
          Carbon Tutorial
        </HeaderName> */}

        {/* We need to use the Link component instead of the default anchor elements 
      to prevent full page reload when navigating to different pages in Next.js applications. 
      To use Link, we wrap HeaderName component and pass through href elements to it: */}

        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="IBM-sie-mal-an">Carbon Tutorial</HeaderName>
        </Link>

        {/* Do the same with the components HeaderNavigation 
and HeaderSideNavItems that contain href="/repos", 
updating them to: */}

        {/* <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
        </HeaderNavigation> */}
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/repos" passHref legacyBehavior>
            <HeaderMenuItem>Repositories</HeaderMenuItem>
          </Link>
        </HeaderNavigation>

        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
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

        {/* <HeaderGlobalBar /> */}
        {/* Add the HeaderGlobalAction component inside of the HeaderGlobalBar where we will 
          add our icons. These represent actions in the header a user can make */}
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

// You should now have a working header that routes to different pages
// without full page reload! However, our page does not match the design specs.
//  We need to change the header theme to g100 to match the specs.

// In providers.js we will add inline theming for our navigation.
// First, we need to import our new Theme component.
