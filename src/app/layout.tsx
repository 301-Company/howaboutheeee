import type { Metadata } from "next";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title: "여긴 어때",
  description: "여긴 어때",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
