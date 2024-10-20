import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Liikuma Kutsuv Kool",
    description: 'Liikumisega seotud nõuanned'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ee">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav />
              {children}
            </main>
        </body>
     </html>
  )
}
  export default RootLayout