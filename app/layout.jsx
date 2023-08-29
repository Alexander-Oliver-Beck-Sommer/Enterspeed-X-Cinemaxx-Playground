import Header from "./components/header/Header";
import "./scss/globals.scss"

export const metadata = {
  title: "Enterspeed X Cinemaxx - Playground",
  description:
    "This app is created to test and see how well Enterspeed works with Next.js (React), and if it's efficient enough to use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
