import '../globals.css'

export const metadata = {
  title: 'Petow@apos;s Pantry',
  description: 'For all your baking needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}