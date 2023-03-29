import "./App.css";
import { DisplayContainer } from "./component/DisplayContainer";
import { Formcontainer } from "./component/Formcontainer";
function App() {
  return (
    <div className="App">
      <header className="App-header main">
        <Formcontainer />
        <DisplayContainer />
      </header>
    </div>
  );
}

export default App;
