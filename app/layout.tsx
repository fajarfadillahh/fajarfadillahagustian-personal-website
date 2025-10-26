import { generateMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-archivo antialiased`}>{children}</body>
    </html>
  );
}
