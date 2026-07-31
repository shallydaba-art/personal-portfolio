import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/700-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";

import "../styles.css";

export const metadata = {
  title: "Elshalom Daba — Data Analyst & Visual Storyteller",
  description: "Portfolio of Elshalom Daba: Computer Science graduate, Program Officer at CAWWE, photographer, and media producer based in Addis Ababa.",
  authors: [{ name: "Elshalom Daba" }],
  openGraph: {
    title: "Elshalom Daba — Portfolio",
    description: "Data. Art. Impact. The portfolio of a multidisciplinary creative based in Addis Ababa.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
