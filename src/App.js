import React from "react";
import Count1 from "./classcomp/count";
import Form1 from "./classcomp/form";
import Count2 from "./funccomp/count";
import Form2 from "./funccomp/form";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Count1 start={0} />
        {/* start will become the property within the Count component */}
        <Form1 />
        <Count2 start={0} />
        <Form2 />
      </>
    );
  }
}

export default App;
