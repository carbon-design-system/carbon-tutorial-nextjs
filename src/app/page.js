'use client';
import { Button } from '@carbon/react';

export default function Home() {
  return <Button>Button</Button>;
}

import LandingPage from './home/page';

export function Page() {
  return <LandingPage />;
}

import RepoPage from './repos/page';
export function Repo() {
  return <RepoPage />;
}
