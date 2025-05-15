import { Metadata } from "next"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Altima",
  description:
    "Experience unparalleled convenience and security with the Disappearing Handle Smart Door, featuring cutting-edge technology and sleek design. Perfect for your home, office, hotel, motel, and beyond.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://altima.com/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://www.figma.com/design/ndBAgSCqggTC6F9yysERXZ/Altima-Door?node-id=1-33&t=LlEG3yk4M0V976XV-4",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
