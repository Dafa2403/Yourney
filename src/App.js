import "./App.css";
import {
  Brand,
  Home,
  Navigation,
  Portofolio,
  Member,
  Footer,
  Highlight,
} from "./routes";

function App() {
  return (
    <body>
      <Navigation />
      <Home />
      <Highlight />
      <Brand />
      <Portofolio />
      <Member />
      <Footer />
    </body>
  );
}

export default App;
