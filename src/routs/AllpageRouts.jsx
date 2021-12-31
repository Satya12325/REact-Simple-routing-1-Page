import {BrowserRouter,Switch} from 'react-router-dom'
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import Service from '../Components/Service';


function AllpageRouts() {
    return (
        <div>
            <Switch>
            <BrowserRouter exact path="/">
                <Home/>
            </BrowserRouter>
            </Switch>
            <Switch>
            <BrowserRouter path="/about-us">
                <About/>
            </BrowserRouter>
            </Switch>
            <Switch>
            <BrowserRouter path="/Contact">
                <Contact/>
            </BrowserRouter>
            </Switch>
            <Switch>
            <BrowserRouter path="/Login">
                <Login/>
            </BrowserRouter>
            </Switch>
            <Switch>
            <BrowserRouter path="/Service">
                <Service/>
            </BrowserRouter>
            </Switch>
        </div>
    )
}

export default AllpageRouts;