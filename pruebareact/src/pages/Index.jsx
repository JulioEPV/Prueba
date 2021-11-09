import React, {useState, useEffect} from 'react'

const Index = () => {

    
    
    const [variable1, setVariable1] = useState("Hola mundo, soy un estado");
    const [valorInput, setValorInput] = useState("");

    const funcionClick = ()=>{
        setVariable1(valorInput);
    }

    const cambioInput = (e) =>{
        setValorInput(e.target.value);
    }

    useEffect(()=>{
        console.log("Cambio variable 1 y el valor es ",variable1);
    },[variable1]);

    return (
        <div>
            <div className='fondo-verde'>
                <span>El valor de la variable es:</span>
                {variable1}
            </div>
            <input  //value ={valorInput} 
            onChange={cambioInput} 
            type ='text' 
            placeholder= 'Ingrese el nuevo valor para la variable' />
            <button onClick={funcionClick}>Haz click aca</button>
        </div>
    )
}

export default Index
