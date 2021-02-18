
// Import React-Router modules
import {
    Switch,
    Route,
} from "react-router-dom";
  

// Import Routes
import Home from './routes/home/Home'
import Page404 from './routes/404/404'
import PortolioMain from './routes/portfolio/PortfolioMain'
import Contact from './routes/contact/Contact'

function App(){
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            {/* PortfolioMain.js has switch for /portfolio/:slug */}
            <Route path="/portfolio">
                <PortolioMain />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
}

export default App;