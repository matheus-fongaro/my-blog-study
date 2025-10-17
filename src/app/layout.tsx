import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog do Matheus',
  description: 'Criado pelo Matheus, quem diria',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Container>
          <Header />
          {children}
        </Container>
        <footer className="text-6xl font-bold text-center py-8">
          footer aqui
        </footer>
      </body>
    </html>
  );
}
