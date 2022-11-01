import One from "./src/page1";
import Two from "./src/page2";
import Three from "./src/page3";
import {FaCircle} from "react-icons/fa";
import './App.css';
import Four from "./src/page4";
import Five from "./src/page5";


function App(){
    return(
        <body id="home">
        <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <div className="dotNavigation">
            <FaCircle color="orange"/>
            <FaCircle color="white"/>
            <FaCircle color="white"/>
            <FaCircle color="white"/>
        </div>

        </body>
        
    )
}

export default App;