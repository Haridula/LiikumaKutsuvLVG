import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/loader';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
};

function RootLayout({children}) {
  return (
    <html>
      <body >
        <Loader/>
        <Nav/>
        <main> {/* remember not to use global styles here.*/}
          {children}
        </main>
      </body>
    </html>
  ); 
};
export default RootLayout