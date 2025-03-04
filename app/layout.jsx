import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/loader';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
};

function RootLayout({children}) {
  return (
    <html lang='et'>
      <body className='font-figtree text-main'>
        <Loader/>
        <Nav/>
        <main> {/* remember not to use global styles here.*/}
          {children}
          <Analytics/>
        </main>
      </body>
    </html>
  ); 
};
export default RootLayout