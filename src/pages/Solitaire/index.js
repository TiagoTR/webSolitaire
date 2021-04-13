import './styles.css';

import retornar from '../../assets/icons/retornar.svg';

function Solitaire() {
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
                <div>
                    <h2>Pontos:</h2>
                    <span>110</span>
                </div>
                
                <div>
                    <h2>Movimentos:</h2>
                    <span>20</span>
                </div>
                
                <div>
                    <img src={retornar} alt="retornar"/>
                    <span>desfazer</span>
                </div>
            </div>
        </div>
    );
}

export default Solitaire;