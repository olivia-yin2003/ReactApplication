import { React, useState }  from 'react';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import './ranking.css';

function Ranking() {
  const [scenarioToggle, setScenarioToggle] = useState(false);
  const [loudToggle, setLoudToggle] = useState(false);
  const [quietToggle, setQuietToggle] = useState(false);
  const [noisyToggle, setNoisyToggle] = useState(false);
  const [sparseToggle, setSparseToggle] = useState(false);
  const [windyToggle, setWindyToggle] = useState(false);
  const [spaceToggle, setSpaceToggle] = useState(false);
  const [clearToggle, setClearToggle] = useState(false);
  return (
    <div className="rankingPage">
        <div class="rankingSelectContainer">
            <div class="selectButton">
                <span class="buttonText">Select Scenarios</span>
                {scenarioToggle
                ? <AiOutlineCheck className="plusMinus" size={27} onClick={() => setScenarioToggle(false)} />
                : <AiOutlinePlus className="plusMinus" size={27} onClick={() => setScenarioToggle(true)} />}
            </div>
            {scenarioToggle && (
            <ul class="scenarioItems">
            {loudToggle
                ?<li className="dropdownItem" onClick={() => setLoudToggle(false)}>
                <span className="checkbox">
                    <AiOutlineCheck />
                </span>
                <span className="itemText">Loud</span>
                </li>
                :<li className="dropdownItem" onClick={() => setLoudToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Loud</span>
                </li>}
            {quietToggle
                ?<li className="dropdownItem" onClick={() => setQuietToggle(false)}>
                <span className="checkbox">
                    <AiOutlineCheck />
                </span>
                <span className="itemText">Quiet</span>
                </li>
                :<li className="dropdownItem" onClick={() => setQuietToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Quiet</span>
                </li>}
            {noisyToggle
                ?<li className="dropdownItem" onClick={() => setNoisyToggle(false)}>
                <span className="checkbox">
                    <AiOutlineCheck />
                </span>
                <span className="itemText">Noisy</span>
                </li>
                :<li className="dropdownItem" onClick={() => setNoisyToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Noisy</span>
                </li>}
            {sparseToggle
                ?<li className="dropdownItem" onClick={() => setSparseToggle(false)}>
                <span className="checkbox">
                    <AiOutlineCheck />
                </span>
                <span className="itemText">Sparse</span>
                </li>
                :<li className="dropdownItem" onClick={() => setSparseToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Sparse</span>
                </li>}
            {windyToggle
            ?<li className="dropdownItem" onClick={() => setWindyToggle(false)}>
                <span className="checkbox">
                <AiOutlineCheck />
                </span>
                <span className="itemText">Windy</span>
            </li>
            :<li className="dropdownItem" onClick={() => setWindyToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Windy</span>
            </li>}
            {spaceToggle
            ?<li className="dropdownItem" onClick={() => setSpaceToggle(false)}>
                <span className="checkbox">
                <AiOutlineCheck />
                </span>
                <span className="itemText">Space</span>
            </li>
            :<li className="dropdownItem" onClick={() => setSpaceToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Space</span>
            </li>}
            {clearToggle
            ?<li className="dropdownItem" onClick={() => setClearToggle(false)}>
                <span className="checkbox">
                <AiOutlineCheck />
                </span>
                <span className="itemText">Clear</span>
            </li>
            :<li className="dropdownItem" onClick={() => setClearToggle(true)}>
                <span className="checkbox">
                </span>
                <span className="itemText">Clear</span>
            </li>}
            </ul>
            )}
        </div>
        <div className="rankingContainer">
            <div className="rankingHeader">
                <div className="rankingField">Rank</div>
                <div className="rankingField">STT</div>
                <div className="rankingField">Total Score</div>
                <div className="rankingField">Accuracy</div>
                <div className="rankingField">Speed</div>
                <div className="rankingField">Memory</div>
                <div className="rankingField">Usability</div>
                <div className="rankingField">API</div>
            </div>
            <div className="rankingLine">
            <div className="rankingField">Rank</div>
                <div className="rankingField">STT</div>
                <div className="rankingField">Total Score</div>
                <div className="rankingField">Accuracy</div>
                <div className="rankingField">Speed</div>
                <div className="rankingField">Memory</div>
                <div className="rankingField">Usability</div>
                <div className="rankingField">API</div>
            </div>
            <div className="rankingLine">
                <div className="rankingField">Rank</div>
                <div className="rankingField">STT</div>
                <div className="rankingField">Total Score</div>
                <div className="rankingField">Accuracy</div>
                <div className="rankingField">Speed</div>
                <div className="rankingField">Memory</div>
                <div className="rankingField">Usability</div>
                <div className="rankingField">API</div>
            </div>
        </div>
    </div>
  );
}

export default Ranking;