import ClayAlert from "@clayui/alert";
import ClayForm, {ClaySelectWithOption, ClayToggle} from "@clayui/form";
import ClaySlider from "@clayui/slider";
import ClayMultiSelect from "@clayui/multi-select";
import {ClayInput} from "@clayui/form";
import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import * as React from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";
import { ClayIconSpriteContext } from "@clayui/icon";
import ClayLayout from "@clayui/layout";
import { ClayDropDownWithItems } from "@clayui/drop-down";

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
    <ClayIconSpriteContext.Provider value="icons.svg">
      <div className="App">
        <ClayForm>
          <div className="sheet">
            <h1>{'Personal Information Form'}</h1>
            <ClayAlert displayType="info" title="Hello">
              {"Let's add some Clay components to see the magic happen!"}
            </ClayAlert>

            <ClayLayout.Row>
              <ClayLayout.Col lg="4">
                <ClayForm.Group>
                  <label>{"Name"}</label>
                  <ClayInput
                    aria-label="Input for name"
                    placeholder="Insert your name"
                  />
                </ClayForm.Group>
              </ClayLayout.Col>

              <ClayLayout.Col>
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
              </ClayLayout.Col>
            </ClayLayout.Row>

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

            <ClayForm.Group>
                <ClayButton.Group>
                  <ClayButton type="button">
                      {'Submit'}
                  </ClayButton>
                  <ClayDropDownWithItems
                    items={[
                      {
                        label: 'Set as a draft',
                        onClick: () => alert('Settled as a draft')
                      },
                      {
                        label: 'Reset whole fields',
                        onClick: () => alert('Form Fields will be reseted')
                      }
                    ]}
                    trigger={
                      <ClayButtonWithIcon
                        aria-label="Click for more actions"
                        monospaced
                        symbol="caret-bottom"
                      />
                    }
                  />
              </ClayButton.Group>
            </ClayForm.Group>
          </div>
        </ClayForm>
      </div>
    </ClayIconSpriteContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
