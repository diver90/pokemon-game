import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import cn from 'classnames';
import {FireBaseContext} from "./context/FirebaseContext";
import Firebase from "./service/firebase";

import style from './style.module.css';



const App = () => {
    const location = useLocation();
    const isPadding = location.pathname === '/' || location.pathname === '/game'|| location.pathname === '/game/board';
    return (
        <FireBaseContext.Provider value={new Firebase()} >
        <Switch>
            <Route path={'/404'} component={NotFoundPage}/>
            <Route>
                <>
                    <MenuHeader bgActive={!isPadding}/>
                    <div className={cn(style.wrap, {[style.isHomePage]: isPadding})}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route>
                                <Redirect to={'/404'}/>
                            </Route>
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
        </FireBaseContext.Provider>
    )
};

export default App;