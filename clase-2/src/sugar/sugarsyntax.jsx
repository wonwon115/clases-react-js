const SugarSyntax = () => {
    //forma clasica
/*         const condicion =true;
        let resultado = true;

        if (condicion){
            resultado = "podes tomar alcohol"
        }else {
            resultado = "NO, NO PODES TOMAR ALCOHOL"
        }
        console.log(resultado) */

        //sugar symtax
        let edad = 14
        const condicion = edad <= 18;
        let resultado = condicion ? "podes tomar alcohol" : "NO, NO PODES TOMAR ALCOHOL"

        //nuestro en consola el resultado
        console.log(resultado)

    return( 
        <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Sugar Syntax</h1>
                    <p>{resultado}</p>
                </div>
            </div>
        </div>
        </>
    ) 
}
export default SugarSyntax