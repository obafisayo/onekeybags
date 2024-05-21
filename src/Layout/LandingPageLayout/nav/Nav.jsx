import React from "react";
import styled from "styled-components";
import { InternalNavlink } from "../../../components/Link/Link";

function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <InternalNavlink className={"nav"}>Home</InternalNavlink>
                <InternalNavlink>
                    Luggage
                </InternalNavlink>
                <InternalNavlink>Backpacks</InternalNavlink>
                <InternalNavlink>Contact us</InternalNavlink>
                <InternalNavlink>How to order</InternalNavlink>
            </StyledUl>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    border: 1px solid blue;
    /* padding: 10px; */
`;
const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
`;

export default Nav;
