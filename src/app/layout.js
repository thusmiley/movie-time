import NavBar from "@/components/NavBar";
import "./styles/globals.css";
import { BookmarkProvider } from "@/context/BookmarkContext";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: {
    template: "%s | Serial Chiller",
    default: "Serial Chiller",
  },
  openGraph: {
    description: "Made by Thu Smiley @Naughty Cat",
    metadataBase: new URL("https://serial-chiller-ten.vercel.app/"),
    siteName: "Serial Chiller",
    locale: "en_US",
    type: "website",
  },
  keywords: ["Next.js", "React", "JavaScript", "Tailwind", "SASS"],
  authors: [
    { name: "Thu Smiley @Naughty Cat", url: "https://thusmiley.com/" },
  ],
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
          <NextTopLoader
            color="#FC4747"
            initialPosition={0.08}
            crawlSpeed={200}
            height={5}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #FC4747,0 0 5px #FC4747"
//             template='<div class="bar" role="bar"><div class="peg"></div></div> 
//   <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          {children}
          <Footer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
