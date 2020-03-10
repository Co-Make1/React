import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const Main = () => {
    return (
        <StyledMain>
            <StyledLogo />
        </StyledMain>
    );
};

const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled(LogoIcon)`
    width: 250px;
    height: 250px;
`;

export default Main;
