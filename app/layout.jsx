import '@styles/globals.css';
import Nav from '@components/Nav';

export const metadata = {
    title: "Liikuma Kutsuv LVG",
    description: 'Liikumisega seotud nõuanned ja terviserajad'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="ee">
        <body>
            <main className="app">
                <Nav />
              {children}
            </main>
        </body>
     </html>
  )
}
  export default RootLayout