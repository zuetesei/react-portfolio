import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import Homepage from "../pages/Home/index";
// import { Portfolio } from "../pages/portfolio";
import { Contact } from "../pages/Contact/index";
import { About } from "../pages/About/index";
import { Socialicons } from "../components/Socials/index";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{
                enter: 400,
                exit: 400,
            }}
            classNames="page"
            unmountOnExit
        >
            <Routes location={location}>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Homepage />} />
            </Routes>
        </CSSTransition>
    </TransitionGroup>
));

function AppRoutes() {
    return (
        <div className="s_c">
            <AnimatedRoutes />
            <Socialicons />
        </div>
    );
}

export default AppRoutes;