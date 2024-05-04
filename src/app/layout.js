import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Digital Change',
  description: 'Tools for accelerating digital transformation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
