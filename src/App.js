import Routes from "./components/Routes";
import Home from "./components/Home";
import { GlobalStyle } from "./styles";

//test
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Home></Home>
      <Routes />
    </div>
  );
}

export default App;
