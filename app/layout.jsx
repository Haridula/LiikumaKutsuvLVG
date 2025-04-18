import '@styles/globals.css';
import Nav from '@components/Nav';
import Loader from '@components/Loader';
import Scrollback from '@components/Scrollback';
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
}

const RootLayout = ({children}) => {
  return (
    <html lang='et'>
      <body className='font-figtree text-main'>
        <Scrollback/>
        <Loader/>
        <Nav/>
        <main> {/* remember not to use global styles here.*/}
          {children}
          <Analytics/>
        </main>
      </body>
    </html>
  );
}

export default RootLayout