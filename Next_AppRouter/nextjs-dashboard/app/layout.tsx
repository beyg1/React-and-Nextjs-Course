import './ui/globals.css'
import { inter } from '@/app/ui/fonts'

export const metadata = {}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased}`}>{children}</body>
    </html>
  );
}
