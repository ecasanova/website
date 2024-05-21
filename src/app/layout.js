import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enrique Casanova - Lead Engineer - Full Stack Developer",
  description: "Enrique Casanova is a Lead Engineer and Full Stack Developer with over 16+ years of experience building web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
