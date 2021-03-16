import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";


const Toolbar = () => {
    return ( 
        <div className={classes.Toolbar}> 
        <Logo/>
        <Nav/>

        Toolbar</div>
     );
}
 
export default Toolbar;