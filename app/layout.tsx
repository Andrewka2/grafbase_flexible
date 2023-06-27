import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Flexible",
    description: "Showcase and discover remarcable develper projects"
}

function Layout({children}: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
    {
    }
    <head />
    <body>
        <NavBar/>
        <main>
            {children}
        </main>
        <Footer/>
    </body>
    </html>
  )
}

export default Layout