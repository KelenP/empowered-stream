import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Aqui é onde aquela sugestão mágica da IA que "ganhou vida" deve morar
export const metadata: Metadata = {
  title: "Empowered Stream",
  description: "Your intent, perfectly tuned. Discover music that resonates with your mood and vibe. Empowered Stream is your ultimate music companion, curating personalized playlists and recommendations based on your unique preferences. Whether you're looking for the perfect soundtrack for a workout, a chill evening, or a road trip, we've got you covered. Tune in and let the music empower your moments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Como o Header é fixo, ele fica aqui para aparecer em todas as páginas */}
        <Header />
        
        {/* O children representa a sua Main (ou qualquer outra página) */}
        {children}
      </body>
    </html>
  );
}