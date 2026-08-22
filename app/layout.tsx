import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/dm-serif-display/400.css";
import "@fontsource/dm-serif-display/400-italic.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://muna-kc-portfolio.example.com"),
  title: {
    default: "Muna K.C. | Data Science & Machine Learning",
    template: "%s | Muna K.C.",
  },
  description:
    "Portfolio of Muna K.C., a Data Science and Machine Learning candidate focused on Python, SQL, machine learning, data analysis, and predictive modeling.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "Python",
    "SQL",
    "Data Analyst",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Data Analytics",
    "Nepal",
  ],
  authors: [{ name: "Muna K.C." }],
  openGraph: {
    title: "Muna K.C. | Data Science & Machine Learning",
    description:
      "Portfolio of Muna K.C., a Data Science and Machine Learning candidate focused on Python, SQL, machine learning, data analysis, and predictive modeling.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
