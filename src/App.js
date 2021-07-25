import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import Meals from "./Components/Meals/Dishes";
import WelcomeNote from "./Components/Welcome/WelcomeNote";

function App() {
  return (
    <div className="App">
      <Layout>
        <WelcomeNote />
        <Meals />
      </Layout>
    </div>
  );
}

export default App;
