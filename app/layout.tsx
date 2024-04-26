import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/store/active-section-context'

export const metadata: Metadata = {
  title: 'Maksym Azimov | Portfolio',
  description:
    'Check out modern and stylish porfolio of an experienced Web Developer Maksym Azimov!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex justify-center items-center bg-gray-50 text-gray-950 relative pt-12 sm:pt-24">
        <div className="flex flex-col min-h-screen w-full">
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  )
}
