import Image from 'next/image'
import logo from "../../public/bootstrap-logo.svg"
export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src={logo} alt="logo bootstrap" width="30" height="24" className="d-inline-block align-text-top" />
                    <span className="m-2">Bootstrap</span>
                </a>
            </div>
        </nav>

    )
}
