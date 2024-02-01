import NavBar from "@/components/NavBar";
import "./globals.css";
import { BookmarkProvider } from "@/context/BookmarkContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Serial Chiller",
  description: "Made by Thu Smiley @Naughty Cat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/logo.svg" />
        <meta property="og:image" content="/preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BookmarkProvider>
          <NavBar />
          {children}
          <Footer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
