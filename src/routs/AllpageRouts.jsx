import {Route} from 'react-router-dom'
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import Service from '../Components/Service';
import Error from '../Components/Error';
import Users from '../Components/Users';
import UserDetails from '../Components/UserDetails';


function AllpageRouts() {
    return (
        <div>
         
            <Route exact path="/">
                <Home/>
            </Route>
            
            
            <Route  path="/about-us">
                <About/>
            </Route>
            
        
            <Route  path="/Contact">
                <Contact/>
            </Route>
            
        
            <Route  path="/Login">
                <Login/>
            </Route>
            
        
            <Route  path="/Service">
                <Service/>
            </Route>
            <Route exact path="/Users">
                <Users/>
            </Route>
            {/* <Route component={Error} /> */}

           
            <Route exact path="/Users/:id">
                <UserDetails/>
            </Route>
            
            
        </div>
    )
}

export default AllpageRouts;