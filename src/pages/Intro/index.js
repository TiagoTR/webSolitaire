import './styles.css';

import {Link} from 'react-router-dom';

function Intro() {
    return (
        <div id="intro-page">
            <div className="card-intro">
                <div className="button-around"><Link to={'/game'} className="link"><button>Play</button></Link></div>
                <div className="button-around"><button>Config</button></div>
                
            </div>
        </div>
    );
}

export default Intro;