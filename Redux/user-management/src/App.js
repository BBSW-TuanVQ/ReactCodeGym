
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
