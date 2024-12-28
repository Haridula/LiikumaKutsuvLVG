import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/loader';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
}

function RootLayout({ children, loader }) {
  return (
    <html>
      <body>
      <Nav />
        <main className="app">
          <Loader />
          {children}
        </main>
      </body>
    </html>
  );
}
  export default RootLayout