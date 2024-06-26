import type { Metadata } from 'next'
import { Montserrat as FontMontserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import ActiveSectionContextProvider from '@/store/active-section-context'
import './globals.css'
import { ThemeProvider } from '@/theme/theme-provider'
import Header from '@/components/shared/header'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/shared/footer'
import { ModeToggle } from '@/theme/mode-toggler'

export const metadata: Metadata = {
  title: 'Maksym Azimov | Portfolio',
  description:
    'Check out modern and stylish porfolio of an experienced Web Developer Maksym Azimov! Built using TypeScript, Next.js 14, Framaer Motion and Tailwind CSS.',
}

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'flex justify-center items-center relative',
          fontMontserrat.className
        )}
      >
        <div className="flex flex-col min-h-screen w-full">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed sm:left-0 sm:bottom-0 sm:top-auto sm:right-auto top-0 left-0 sm:m-4 my-5 mx-4 z-[99]">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  )
}
