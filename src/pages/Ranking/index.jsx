import React from "react";
import './style.css'

import RankingLine from "../../components/RankingLine";

import Agent from "../../assets/agent.svg"
import People from "../../assets/people.svg"
import EnterPrise from "../../assets/enterprise.svg"
import Rank from "../../assets/trophy.svg"
import infoLogo from "../../assets/info.svg"

const Ranking = () => {
    return(
        <div className="Ranking">
            <div className="RankTextImage">
                <img src={Rank} alt="" />
                <h1>Ranking </h1>
            </div>
            
            <div className="RanksContainer">
                <div className="RankA">

                    <div className="ImgText"><img src={People} alt="" />Comunidade</div>
                    
                    <div className="Rank1">
                        <RankingLine position={1} name="Dona Maria" points={2100}/>
                        <RankingLine position={2} name="Carlos" points={1900}/>
                        <RankingLine position={3} name="Sr. Roberto" points={1500}/>
                        <RankingLine position={4} name="Bruna" points={1300}/>
                        <RankingLine position={5} name="Jorge" points={900}/>
                    </div>
                </div>


                <div className="RankA">
                    <div className="ImgText">
                        <img src={EnterPrise} alt="" />Instituição
                    </div>

                    <div className="Rank3">
                        <RankingLine position={1} name="Uerj" points={2100}/>
                        <RankingLine position={2} name="IPRJ" points={1900}/>
                        <RankingLine position={3} name="UFF" points={1500}/>
                        <RankingLine position={4} name="APAE" points={1300}/>
                        <RankingLine position={5} name="Casa da Moeda" points={900}/>
                    </div>
                </div>      
            </div>

            <div className="BulletinBoard">
                <div className="BulletinBoardIn">
                    <img src={infoLogo} alt="" />
                    <p>As colocações acima são referentes ao quiz dos ODS. Nesse sentido, os primeiros colocados são os que melhores pontuaram na perguntas referentes as ODS de sua rotina. </p>
                </div> 
            </div>
        </div>
    )
}

export default Ranking