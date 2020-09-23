import ClayAlert from "@clayui/alert";
import ClayForm, {ClaySelectWithOption} from "@clayui/form";
import {ClayInput} from "@clayui/form";
import * as React from "react";
import ReactDOM from "react-dom";
import "@clayui/css/lib/css/atlas.css";

function App() {
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
        </div>
      </ClayForm>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
