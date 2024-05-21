import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../Link/Link";
import companyLogo from "../../assets/static/svg/default-monochrome.svg"

function CompanyLogo() {
    return (
        <ButtonLink>
            <StyledImg src={companyLogo}/>
        </ButtonLink>
    );
}

const StyledImg = styled.img`
    height: auto;
    /* max-width: 100%; */
    /* display: block; */
    width: 200px;
    /* border: 1px solid blue;  */
    /* height: 10vw; */
`;

export default CompanyLogo;
