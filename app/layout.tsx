import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bruno Lambreht | Data Scientist & Python Developer',
  description: 'Portfolio of Bruno Lambreht - Data Scientist, Python Developer, and Economic Science enthusiast',
  keywords: ['Data Science', 'Python', 'DevOps', 'Economic Science', 'Machine Learning', 'Data Analysis'],
  authors: [{ name: 'Bruno Lambreht' }],
  themeColor: '#1a1a1a',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bruno-lambreht.vercel.app',
    title: 'Bruno Lambreht | Data Scientist & Python Developer',
    description: 'Portfolio of Bruno Lambreht - Data Scientist, Python Developer, and Economic Science enthusiast',
    siteName: 'Bruno Lambreht',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bruno Lambreht | Data Scientist & Python Developer',
    description: 'Portfolio of Bruno Lambreht - Data Scientist, Python Developer, and Economic Science enthusiast',
    creator: '@brunolambreht',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
