import ClayAlert from "@clayui/alert";
import ClayForm, {ClaySelectWithOption, ClayToggle} from "@clayui/form";
import ClaySlider from "@clayui/slider";
import ClayMultiSelect from "@clayui/multi-select";
import {ClayInput} from "@clayui/form";
import * as React from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";

function App() {
  // State for controlling the rating slider
  const [sliderValue, setSliderValue] = React.useState(50);

  //States used for controlling the MultiSelect that handles sports teams
  const [valueTeams, setValueTeams] = React.useState("");
  const [teams, setTeams] = React.useState([
    {
      label: "Clube Náutico Capibaribe",
      value: "nautico"
    }
  ]);

  return (
    <div className="App">
      <ClayForm>
        <div className="sheet">
          <ClayAlert displayType="info" title="Hello">
            {"Let's add some Clay components to see the magic happen!"}
          </ClayAlert>

          <ClayForm.Group>
            <label>{"Name"}</label>
            <ClayInput
              aria-label="Input for name"
              placeholder="Insert your name"
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label>{"Gender"}</label>
            <ClaySelectWithOption
              aria-label="Select for gender"
              defaultValue="other"
              options={[
                {
                  label: "Male",
                  value: "male"
                },
                {
                  label: "Female",
                  value: "female"
                },
                {
                  label: "Other",
                  value: "other"
                }
              ]}
              placeholder="Insert your age"
            />
          </ClayForm.Group>

          <ClayForm.Group>
            <label>{"From 0 to 100, which is your satisfaction level?"}</label>
            <ClaySlider onValueChange={setSliderValue} value={sliderValue} />
          </ClayForm.Group>

          <ClayForm.Group>
            <ClayToggle label="Do you want to receive special discounts?" required />
          </ClayForm.Group>

          <ClayForm.Group>
            <ClayToggle label="Do you want to receive free gifts?" required />
          </ClayForm.Group>

          <ClayForm.Group>
            <label>{"Which is your favorite sports team"}</label>
            <ClayMultiSelect
              inputName="teams"
              inputValue={valueTeams}
              items={teams}
              onChange={setValueTeams}
              onItemsChange={setTeams}
            />
          </ClayForm.Group>
        </div>
      </ClayForm>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
