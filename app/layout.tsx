import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Ecommerce Beta",
  description: "Created by angelDova",
};

// If loading a variable font, you don't need to specify the font weight >>> https://fonts.google.com/variablefonts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
