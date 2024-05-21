import { NavLink as RouterLink} from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../globalStyles";

export const InternalNavlink = styled(RouterLink)`
    border: 1px solid black;
    display: inline-block;
    text-decoration: none;
    font-family: IBMPlexSans-Regular;
    color: ${theme.palette.SUBBLACK1};
    cursor: pointer;
    &.nav {
        /* padding: ; */
    }
`;

export const ButtonLink = styled(RouterLink)`
    text-decoration: none;
    color: ${theme.palette.SUBBLACK1};
    cursor: pointer;
`;
