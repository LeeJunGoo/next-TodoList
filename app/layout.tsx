import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'TodoList',
  description: 'next.js를 활용한 TodoList입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
