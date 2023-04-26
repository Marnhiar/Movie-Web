import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import { OrderProvider } from '@/components/context'

export const metadata = {
  title: 'Movie Web',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html className='h-full'>
      <body className='bg-[#192026] h-full'>
        <div className='w-full max-w-[1440px] mx-auto px-[1rem] h-full'>
          <Navbar />
          <div className='max-w-7xl mx-auto h-full'>
            <OrderProvider>{children}</OrderProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
