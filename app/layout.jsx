import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanded ja terviserajad'
}

function RootLayout ({ children, loader }) {
  return (
    <html lang="et">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout