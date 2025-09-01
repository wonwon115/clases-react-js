const Hamburgesas = () => {
    return (
        <>
            <div className="contenedor">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="https://www.shutterstock.com/image-photo/simple-hamburger-view-perspective-above-260nw-2518252637.jpg" className="card-img-top" alt="Hamburguesa común"/> {/* Cambiar class por className */}
                            <div className="card-body">
                                <h5 className="card-title">Hamburguesa Común</h5>
                                <p className="card-text">Doble medallón de carne, jamón, queso, huevo, lechuga, tomate</p>
                            </div>
                        </div>
                    </div>
                    {/* Corregir la indentación y los mismos errores en las otras cards */}
                    <div className="col">
                        <div className="card">
                            <img src="https://www.shutterstock.com/image-photo/simple-hamburger-view-perspective-above-260nw-2518252637.jpg" className="card-img-top" alt="Hamburguesa común"/>
                            <div className="card-body">
                                <h5 className="card-title">Hamburguesa Común</h5>
                                <p className="card-text">Doble medallón de carne, jamón, queso, huevo, lechuga, tomate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://www.shutterstock.com/image-photo/simple-hamburger-view-perspective-above-260nw-2518252637.jpg" className="card-img-top" alt="Hamburguesa común"/>
                            <div className="card-body">
                                <h5 className="card-title">Hamburguesa Común</h5>
                                <p className="card-text">Doble medallón de carne, jamón, queso, huevo, lechuga, tomate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hamburgesas