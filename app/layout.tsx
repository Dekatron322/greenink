import { Metadata } from "next"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Greenink Limited",
  description:
    "Green Ink provides holistic business solutions with the aim of upscaling small and medium sized businesses to operationg at full capacity and maximizing value propositions",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://greeninkltd.com/",
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
