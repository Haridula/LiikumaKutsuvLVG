import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/Loader';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
}

function RootLayout({ children, loader }) {
  return (
    <html lang="et">
      <body>
        <main className="app">
          <Loader />
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout