import React from "react";
import styled from "styled-components";
import Container from "../../../components/container/Container";
import Nav from "../nav/Nav";
import CompanyLogo from "../../../components/companyLogo/CompanyLogo";
import { theme } from "../../../globalStyles";

function Header() {
    return (
        <StyledHeader>
            <Container classname={"flex align-center"}>
                <CompanyLogo />
                <Nav />
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: ${theme.palette.BACKGROUNDWHITE};
    /* padding: 10px; */
`;

export default Header;
