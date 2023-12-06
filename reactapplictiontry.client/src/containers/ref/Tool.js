import { React, useState }  from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCheck } from 'react-icons/ai';
import './tool.css';

function Tool() {
  const [sttToggle, setSttToggle] = useState(false);
  const [whisperToggle, setwhisperToggle] = useState(false);
  const [googleToggle, setGoogleToggle] = useState(false);
  const [metaToggle, setMetaToggle] = useState(false);
  const [deepgramToggle, setDeepgramToggle] = useState(false);
  const [paddlespeechToggle, setPaddlespeechToggle] = useState(false);
  const [amazonToggle, setAmazonToggle] = useState(false);
  const [microsoftToggle, setMicrosoftToggle] = useState(false);

  const [scenarioToggle, setScenarioToggle] = useState(false);
  const [loudToggle, setLoudToggle] = useState(false);
  const [quietToggle, setQuietToggle] = useState(false);
  const [noisyToggle, setNoisyToggle] = useState(false);
  const [sparseToggle, setSparseToggle] = useState(false);
  const [windyToggle, setWindyToggle] = useState(false);
  const [spaceToggle, setSpaceToggle] = useState(false);
  const [clearToggle, setClearToggle] = useState(false);

  const [useStoreToggle, setUseStoreToggle] = useState(false);
  const [updateStoreToggle, setUpdateStoreToggle] = useState(false);

  return (
    <div className="toolPage">
      <div class="buttonContainer">
        <div class="selectButton">
            <span class="buttonText">Select STTs</span>
            {sttToggle
              ? <AiOutlineMinus className="plusMinus" size={27} onClick={() => setSttToggle(false)} />
              : <AiOutlinePlus className="plusMinus" size={27} onClick={() => setSttToggle(true)} />}
        </div>
        {sttToggle && (
        <ul class="sttItems">
          {whisperToggle
            ?<li className="dropdownItem" onClick={() => setwhisperToggle(false)}>
              <span className="checkbox">
                <AiOutlineCheck />
              </span>
              <span className="itemText">OpenAI Whisper</span>
            </li>
            :<li className="dropdownItem" onClick={() => setwhisperToggle(true)}>
              <span className="checkbox">
              </span>
              <span className="itemText">OpenAI Whisper</span>
            </li>}
          {googleToggle
            ?<li className="dropdownItem" onClick={() => setGoogleToggle(false)}>
              <span className="checkbox">
                <AiOutlineCheck />
              </span>
              <span className="itemText">Google Chirp</span>
            </li>
            :<li className="dropdownItem" onClick={() => setGoogleToggle(true)}>
              <span className="checkbox">
              </span>
              <span className="itemText">Google Chirp</span>
            </li>}
          {metaToggle
            ?<li className="dropdownItem" onClick={() => setMetaToggle(false)}>
              <span className="checkbox">
                <AiOutlineCheck />
              </span>
              <span className="itemText">Meta MMS</span>
            </li>
            :<li className="dropdownItem" onClick={() => setMetaToggle(true)}>
              <span className="checkbox">
              </span>
              <span className="itemText">Meta MMS</span>
            </li>}
          {deepgramToggle
            ?<li className="dropdownItem" onClick={() => setDeepgramToggle(false)}>
              <span className="checkbox">
                <AiOutlineCheck />
              </span>
              <span className="itemText">DeepGram</span>
            </li>
            :<li className="dropdownItem" onClick={() => setDeepgramToggle(true)}>
              <span className="checkbox">
              </span>
              <span className="itemText">DeepGram</span>
            </li>}
          {paddlespeechToggle
          ?<li className="dropdownItem" onClick={() => setPaddlespeechToggle(false)}>
            <span className="checkbox">
              <AiOutlineCheck />
            </span>
            <span className="itemText">PaddleSpeech</span>
          </li>
          :<li className="dropdownItem" onClick={() => setPaddlespeechToggle(true)}>
            <span className="checkbox">
            </span>
            <span className="itemText">PaddleSpeech</span>
          </li>}
          {amazonToggle
          ?<li className="dropdownItem" onClick={() => setAmazonToggle(false)}>
            <span className="checkbox">
              <AiOutlineCheck />
            </span>
            <span className="itemText">Amazon Transcribe</span>
          </li>
          :<li className="dropdownItem" onClick={() => setAmazonToggle(true)}>
            <span className="checkbox">
            </span>
            <span className="itemText">Amazon Transcribe</span>
          </li>}
          {microsoftToggle
          ?<li className="dropdownItem" onClick={() => setMicrosoftToggle(false)}>
            <span className="checkbox">
              <AiOutlineCheck />
            </span>
            <span className="itemText">Microsoft Azure</span>
          </li>
          :<li className="dropdownItem" onClick={() => setMicrosoftToggle(true)}>
            <span className="checkbox">
            </span>
            <span className="itemText">Microsoft Azure</span>
          </li>}
        </ul>
        )}
      </div>
      <div class="buttonContainer">
        <div class="selectButton">
            <span class="buttonText">Select Scenarios</span>
            {scenarioToggle
              ? <AiOutlineMinus className="plusMinus" size={27} onClick={() => setScenarioToggle(false)} />
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
      <div class="buttonContainer">
        {useStoreToggle
        ?<div className="storeOption" onClick={() => setUseStoreToggle(false)}>
          <span className="storeCheckbox">
            <AiOutlineCheck />
          </span>
          <span className="storeOptionText">Use Stored Metrics</span>
        </div>
        :<div className="storeOption" onClick={() => setUseStoreToggle(true)}>
          <span className="storeCheckbox">
          </span>
          <span className="storeOptionText">Use Stored Metrics</span>
        </div>}
      </div>
      <div class="buttonContainer">
        {updateStoreToggle
        ?<div className="storeOption" onClick={() => setUpdateStoreToggle(false)}>
          <span className="storeCheckbox">
            <AiOutlineCheck />
          </span>
          <span className="storeOptionText">Update Stored Metrics</span>
        </div>
        :<div className="storeOption" onClick={() => setUpdateStoreToggle(true)}>
          <span className="storeCheckbox">
          </span>
          <span className="storeOptionText">Update Stored Metrics</span>
        </div>}
      </div>
      <div class="submitButton">
        <div className="submit">
          <span className="submitText">Submit</span>
        </div>
      </div>
      </div>
  );
}

export default Tool;