import React from "react";

import Calendar from "./components/Calendar";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faEdit);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">date_range</span>
              <span>
                react
                <b>calendar</b>
              </span>
            </div>
          </header>
          <main>
            <Calendar />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
