import React, {useState} from 'react'

const Index = () => {
    
    const [variable1, setVariable1] = useState("Hola mundo, soy un estado");

    const funcionClick = ()=>{
        console.log("hice click en el boton")
    }

    return (
        <div>
            <div className='fondo-verde'>
                <span>El valor de la variable es:</span>
                {variable1}
            </div>
            <input type ='text' placeholder= 'Ingrese el nuevo valor para la variable' />
            <button onClick={funcionClick}>Haz click aca</button>
        </div>
    )
}

export default Index
