'use client';

import '@/src/app/ui/global.css';
import { inter } from '@/src/app/ui/fonts';
// import { Metadata } from 'next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The offiicial Next.js Course Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
