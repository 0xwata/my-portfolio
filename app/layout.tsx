import './global.css'
import '@mantine/core/styles.css';
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { createTheme, MantineProvider } from '@mantine/core';
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Wataru Takamine',
  description: 'Wataru Takamine is a software engineer focused on building user-friendly and functional digital experiences. Driven by a passion for continuous learning and improvement, I applies my expertise to create impactful and innovative products.',
}

const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: 'teal',


});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className=" focus:bg-[#111e40] bg-[#0F172A]">
        <main className="">
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
