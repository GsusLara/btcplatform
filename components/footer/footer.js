import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="text-center p-3" style={{color: "#ffffff"}}>
                <FontAwesomeIcon icon={["fas","copyright"]}/> 2021 Copyright:
                <a className="text-white mx-1" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}
