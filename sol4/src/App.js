import React from "react";
import {Provider} from "react-redux";
import store from "./store/index";
import Routing from "./component/routing"
const App=()=>{
  return(
    <div>
      <Provider store={store}>
        <Routing/>
      </Provider>
    </div>
  )
}
export default App