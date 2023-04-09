import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WelcomePage} from "./component/WelcomePage";
import {StoreNavbar} from "./component/Navbar";

function App() {
    return (
        <div>
            <StoreNavbar/>
            <WelcomePage/>
        </div>
    );
}

export default App;
