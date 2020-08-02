import React from 'react';
import './style.css';

import {Link} from 'react-router-dom';
import imagemErro from "../../../assets/img/erro.gif"
function PaginaErro(){
    document.getElementById("root").setAttribute("component", "Page404");
    return (
        
        <div className="Page404">
            
                <iframe className='jogo' src="https://editor.p5js.org/DanieleOliveira1/embed/KXxQKxd7Y"></iframe>
            
            
            <img className="PageNotFoundImg" src={imagemErro} alt="erro 404" />
        </div>
        
    )
}

export default PaginaErro;
