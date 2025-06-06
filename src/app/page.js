'use client'; // makes it client side
import { Button } from '@carbon/react';
import LandingPage from './home/page';
import RepoPage from './repos/page';

export default function Page() {
  return <LandingPage />;
}

export function Home() {
  return <Button>Button</Button>;
}

export function Repos() {
  // do i need this
  return <RepoPage />;
}
