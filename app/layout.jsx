import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/loader';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
}

function RootLayout({ children, loader }) { //do not remove the loader prop. It gonna crash everything. IDK why but it does.
  return (
    <html>
      <body>
      <Nav/>
        <main>
          <Loader/>
          {children}
        </main>
      </body>
    </html>
  );
}
export default RootLayout