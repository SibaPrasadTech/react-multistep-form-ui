import './App.css';
import './fonts/Inter-Regular.ttf';
import './step.css';

function App() {
  return (
    <div className="Container">
      <div className="HeadingSection">
        <img className="Logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="LOGO" />
        <span className="CompanyText">Cutshort</span>
      </div>
      <div className="ProgressbarSection">
        <div class="stepper-wrapper">
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">2</div>
          </div>
          <div class="stepper-item active">
            <div class="step-counter">3</div>
          </div>
          <div class="stepper-item">
            <div class="step-counter">4</div>
          </div>
        </div>
      </div>
      <div className="FormInfoArea">
        <div className="FormPrimaryInfo">Welcome! First things first...</div>
        <div className="FormSecondaryInfo">You can always change them later.</div>
      </div>
      <div className="FormArea">
        <div className="QuestionSection">
          <div className="fullname">
            <label for="fullname">Full Name</label>
            <input id="name" type="text" placeholder='Elon Musk' />
          </div>
          <div className="displayname">
            <label for="displayname">Display Name</label>
            <input id="displayname" type="text" placeholder='Musk' />
          </div>
        </div>
        <div className="ButtonSection">
          <button>Create Workspace</button>
        </div>
      </div>
    </div>
  );
}

export default App;
