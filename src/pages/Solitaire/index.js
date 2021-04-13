import React,{useState} from 'react';
import './styles.css';

import retornar from '../../assets/icons/retornar.svg';
import opcoes from '../../assets/icons/opcoes.svg';

function Solitaire() {
    const [opcoesClicked, setOpcoesClicked] = useState(false);

    return (
        <div id="solitaire-game">
            <div className="top-area">
                <div className="baralho"></div>
                <div className="four-as">
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                    <div>A</div>
                </div>
            </div>
            <div className="body">

            </div>
            <div className="bottom-text">
                <div className={opcoesClicked ? "opcoes-clicked" : "opcoes"}>
                    <img src={opcoes} alt="opcoes" onClick={() => setOpcoesClicked(!opcoesClicked)}/>
                </div>
                <div>
                    <h2>Pontos:</h2>
                    <span>110</span>
                </div>
                
                <div>
                    <h2>Movimentos:</h2>
                    <span>20</span>
                </div>
                
                <div className="retornar">
                    <img src={retornar} alt="retornar"/>
                    <span>desfazer</span>
                </div>
            </div>
        </div>
    );
}

export default Solitaire;