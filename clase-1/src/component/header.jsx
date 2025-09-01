import Logo from "./logo"



const Header = () => {
    return (
        <>
        <div className="contenedor-fluid headerBackground p-5">
            <div className="row">
                <div className="col">
                    <Logo/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header