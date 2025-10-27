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
      <body className={`font-archivo bg-stone-200 text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
