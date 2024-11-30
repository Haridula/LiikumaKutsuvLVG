import '@styles/globals.css';

import Feed from '@components/Feed';
import Nav from '@components/Nav';

export const metadata = {
    title: "Liikuma Kutsuv Kool",
    description: 'Liikumisega seotud nõuanned'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ee">
        <body>
            <div>
                <div/>
            </div>
            <main className="app">
                <Nav />
              {children}
            </main>
            <div>
            </div>
        </body>
        
     </html>
  )
}
  export default RootLayout