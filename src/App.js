import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import AppProvider from './store/AppProvider'
import ScrollToRouteTop from './components/ScrollToRouteTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Protocol from './pages/Protocol'
import Community from './pages/Community/'
import Developers from './pages/Developers/'
import Banner from './sections/Banner'
import NotFound from './pages/NotFound'
import { createGlobalStyle } from 'styled-components'
import smoothscroll from 'smoothscroll-polyfill'
import CookieBanner from './components/CookieBanner'
import { globalStyles } from './styles'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const GlobalStyles = createGlobalStyle`${globalStyles}`

smoothscroll.polyfill()

const Routes = () => (
    <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Home} path="/event" />
        <Route exact component={Protocol} path="/event/whitecollar" />
        <Route exact component={Community} path="/event/bplan" />
        <Route exact component={Developers} path="/event/technokraft" />
        <Route path='/juecell' component={() => { 
            window.open('https://juecell.in')
            window.location.href = '/'
            return null
        }}/>
        <Route component={NotFound} path="*" />
    </Switch>
)

const history = createHistory()

history.listen((location, action) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

const App = () => (
    <AppProvider>
        <GlobalStyles />
        <Router history={history}>
            <ScrollToRouteTop>
                <Banner />
                <Routes />
                <Footer />
                <CookieBanner />
            </ScrollToRouteTop>
        </Router>
    </AppProvider>
)

export default App
