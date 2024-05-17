import React from "react";
import * as ROUTES from '../constants/routes';
import { Header } from "../components";
import logo from '../logo.svg';

export function HeaderComponent({children}) {
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Movee" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
