import Routes from "./routes/Routes.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
