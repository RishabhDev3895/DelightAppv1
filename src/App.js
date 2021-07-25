import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import Meals from "./Components/Meals/AllMeals";
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
