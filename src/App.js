import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import ContactPage from "./routes/Contact";
import AboutPage from "./routes/About";
import NotFoundPage from "./routes/NotFound";
import MenuHeader from "./components/MenuHeader";
import cn from 'classnames';
import style from './style.module.css';
import Footer from "./components/Footer";

const App = () => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route path={'/404'} component={NotFoundPage}/>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(style.wrap, {[style.isHomePage]: match.isExact})}>
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
    )
};

export default App;