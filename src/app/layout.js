<<<<<<< Updated upstream
import './globals.css'

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with NextJS 13',
}
=======
import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Carbon + Next13',
  description: 'IBM Carbon Tutorial with Next.js 13',
};
>>>>>>> Stashed changes

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
