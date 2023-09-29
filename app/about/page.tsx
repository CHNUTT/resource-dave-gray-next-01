import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'about our company',
  icons: '/favicon.ico'
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link href='/'>Link to Home Page</Link>
    </>
  );
}

export default About;
