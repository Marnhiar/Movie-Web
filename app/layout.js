import './globals.css'

export const metadata = {
  title: 'Movie Web',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
