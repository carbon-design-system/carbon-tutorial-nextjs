# Carbon Tutorial for NextJS 13
Base NextJS 13 app using IBM Carbon Design System React components

# Initial Setup

## Create NextJS 13 app
```bash
yarn create next-app

✔ What is your project named? … next-base
✔ Would you like to use TypeScript? … *No / Yes
✔ Would you like to use ESLint? … No / *Yes
✔ Would you like to use Tailwind CSS? … *No / Yes
✔ Would you like to use `src/` directory? … No / *Yes
✔ Would you like to use App Router? (recommended) … No / *Yes
✔ Would you like to customize the default import alias? … *No / Yes

cd carbon-tutorial-next
yarn dev
```
Configure paths in `jsconfig.json`
```
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/components/*": ["components/*"],
      "@/app/*": ["app/*"]
   }
  }
}
```

## Update the NextJS Bootstrap
Modify some of the boostrap code in order to support the Carbon components.

In `app/layout.js` (RootLayout) take out:
```
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
```
Take out className tag from <body> and update the meta data.

Then `yarn dev` to confirm.

# Tutorial Step 1 actions

## Install Carbon
```bash
yarn add @carbon/react@1.33.0
```

## Styling SaaS
In `src/app` change `global.css` to `.scss` and change import in `layout.js`.

and delete `.css` imports in `page.js`.
Change import
```bash
yarn add sass@1.63.6
yarn dev
```
Overwrite contents in `global.scss` from React `src/index.scss`:
```bash
@use '@carbon/react';

/// Remove overrides once Carbon bugs are fixed upstream.
/// Need grid option to not add page gutters at large viewports, to also use when nesting grids
/// @link https://github.com/carbon-design-system/carbon/issues/2792
@media (min-width: 42rem) {
  .cds--grid--no-gutter {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/// Padding was introduced in 10.3.0, needs an option to let grid set the viewport gutter
/// @link https://github.com/carbon-design-system/carbon/issues/3010
.cds--content {
  margin-top: 3rem;
  background: var(--cds-background);
}
```

### Stylesheet strategy
Root Layout `layout.js` imports `./global.scss` which uses `./{dir}/{page-name}.scss`. These file names need to be unique.  This is because the app structure for the Tutorial is not using Next CSS Modules and requires that the CSS definitions do not clash e.g. `.landing-page__banner` and `.repo-page__banner`.

We don't need to do the `import './app.scss';` step of the tutorial for Next.

## First Page changes
In `src/app/page.js` change code to
```
'use client'

import { Button } from '@carbon/react';

export default function Home() {
  return (
    <Button>Button</Button>
  )
}
```
We need `use client` since the Carbon components we use are all client components. In Next 13 pages are pulled in as children to layout files (see RootLayout `src/app/layout.js`) and these are always server side components.

## Add UI Shell
Create a components folder and a header component
```src/components/TutorialHeader
├──_tutorial-header.scss
└──TutorialHeader.js
```

Add `@use '@/components/TutorialHeader/tutorial-header';` to `global.scss`.
Install icons with `yarn add @carbon/icons-react`.

Create TutorialHeader.js
```
'use client'

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
import {
  Switcher,
  Notification,
  UserAvatar,
} from '@carbon/icons-react';

import Link from 'next/link';

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
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="IBM">
              Carbon Tutorial
            </HeaderName>
          </Link>     
           <HeaderNavigation aria-label="Carbon Tutorial">
              <Link href="/repos" passHref legacyBehavior>
                <HeaderMenuItem >
                  Repositories
                </HeaderMenuItem>
              </Link>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}>
              <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/repos" passHref legacyBehavior>
                  <HeaderMenuItem >
                    Repositories
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="Notifications"
                tooltipAlignment="center">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center">
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
```
Things differet to Reach to note
- `use client` since we have created a new component that pulls in `carbon/react` components
- <Link> wrapping of Carbon components and its NextJS import 

## Use the Providers pattern
We can wrap the `{children}` in Root Layout with a Provider component that will use to hold the components we want across all pages. See this [explanation](https://nextjs.org/docs/getting-started/react-essentials#rendering-third-party-context-providers-in-server-components) in Next docs.

`app/layout.js`
```
import './globals.scss'
import { Providers } from './providers';

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with NextJS 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  )
}
```
Add `app/providers.js` component that builds the UI Shell.
```
'use client'

import { Content, Theme } from '@carbon/react';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          {children}
        </Content>
    </div>
  )
}
```
At this point in the consoler you will see this warning:
```
Warning: Content: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
```

There will be an upcoming change to Carbon React components to not use `defaultProps` see [here](https://github.com/carbon-design-system/carbon/issues/13424)

## Add First Pages
Create a `LandingPage` as our home page which will be pulled into the root page `app/page.js` and a second `RepoPage` and their `.scss` files. In Next 13 page routes are defined by the name of their leaf folder and a `page.js` component. 
```
src/app/home
├── _landing-page.scss
└── page.js
src/app/repos
├── _repo-page.scss
├── index.js
└── page.js
```
Add Sass to `globals.scss`
```
@use '@/app/home/landing-page';
@use '@/app/repos/repo-page';
```

LandingPage
```
``use client`

function LandingPage() {
    return (
        <div>LANDING PAGE</div>
    );
};

export default LandingPage;
```
RepoPage
```
`use client`

function RepoPage() {
    return (
        <div>REPO PAGE</div>
    );
};

export default RepoPage;
```

and change `app/page.js` to pull in LandingPage
```
import LandingPage from './home/page';

export default function Page() {
    return <LandingPage />;
  }
```

## Routing
Don't need to add the React routing since all in built with `AppRouter` in NextJS.

## Styling
Add to `_tutorial-header.scss`
```
@use '@carbon/react/scss/colors';

// overriding header tooltip bg color
// because the navigation is dark themed while the content is white
// which means the dark theme tooltip bg blends into the white content bg
.cds--header__global .cds--popover-content {
  background-color: colors.$gray-20;
}

.cds--header__global .cds--popover-caret {
  background-color: colors.$gray-20;
}
```

