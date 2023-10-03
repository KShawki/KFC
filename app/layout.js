import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Welcome to KFC',
  description: 'Visit Our Website and Choose From Our Many Delicious Meals. Order Online Today. You Can Now Enjoy KFC With Our Safe and Contactless Deliveries. Meals For One.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className='bg-[#f1f3f6]'>{children}</body>
    </html>
  )
}
