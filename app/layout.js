import { Rajdhani } from "next/font/google";
import "./globals.css";
import ProviderQuery from "./ProviderQuery/ProviderQuery";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Dua Dhikr",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <ProviderQuery>{children}</ProviderQuery>
      </body>
    </html>
  );
}
