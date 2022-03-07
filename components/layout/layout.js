import Navbar from "../navbar"
import Footer from "../footer"

export default function Layout(props) {
    const { children } = props
    return (
        <div className="container-fluid Pagina">
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}
