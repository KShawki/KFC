import './globals.css'


export const metadata = {
  title: 'KFC Official Site - Various Deals Available',
  description: 'Visit Our Website and Choose From Our Many Delicious Meals. Order Online Today. You Can Now Enjoy KFC With Our Safe and Contactless Deliveries. Delivery Around Egypt.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
