
import './globals.scss';
// render our UI Shell by importing our TutorialHeader component and Content
// into a provider components in the Root Layout.
// We do this because layout components in Next.js 13 are server-side components.
import { Providers } from './providers';


export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with NextJS 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
      {/* <body>{children}</body> */}
    </html>
  );
}
