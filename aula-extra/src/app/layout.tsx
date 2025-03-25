import Cabecalho from "@/components/Cabecalho";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
      <Cabecalho />
    </html>
  );
}
