import React from "react";

import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
    return(
        <div className="Home">
            <div className="Content">
                <h1>Quero Participar</h1>
                <p>Responda algumas perguntas e descubra o quanto você contribui para as ODS</p>
            </div>
            
            <div className="Banner">
                <Link to='/participar'>Comunidade</Link>
                <Link to='/participar'>Agente</Link>
                <Link to='/participar'>Instituição</Link>
            </div>

            <div className="OdsAll">
                <div className="OdsContent">
                    <div>
                        <h1>Os Objetivos de Desenvolvimento Sustentável no Brasil</h1>
                    </div>
                    
                    <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</p>
                    
                </div>

                <div className="OdsContent">
                    
                    <p>Os Objetivos de Desenvolvimento Sustentável (ODS), também conhecidos como Objetivos Globais, foram adotados pelas Nações Unidas em 2015 como um apelo universal à ação para acabar com a pobreza, proteger o planeta e garantir que até 2030 todas as pessoas desfrutem de paz e prosperidade. Os 17 ODS são integrados – eles reconhecem que a ação em uma área afetará os resultados em outras, e que o desenvolvimento deve equilibrar a sustentabilidade social, econômica e ambiental.</p>

                    <div>
                        <h1>O que são os ODS?</h1>
                    </div>
                </div>
            </div>

            

            <div className="Content">
                <Link>Saiba mais sobre os ODS</Link>
            </div>

            
        </div>
    )
}

export default Home