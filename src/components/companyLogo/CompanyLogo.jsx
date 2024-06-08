// import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../Link/Link";
import { HOME } from "../../routes/RouteConstants";
import PropTypes from "prop-types"

function CompanyLogo({classname, text, img}) {
    return (
        <ButtonLink to={HOME} >
            <StyledDiv>
                {img && <svg data-v-423bf9ae="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 170" className={`${classname}`}>
                    <g data-v-423bf9ae="" id="9e4713ed-83e8-4bbc-ab38-6652fd77e5c4" transform="matrix(1.0868111504448785,0,0,1.0868111504448785,-13.255261890115804,-0.23894260335429607)" stroke="none" >
                        <g clipRule="evenodd">
                            <path d="M12.983 10.59l17.018 88.223-5.872-59.049 29.021-1.892-.054-9.883L64.549 1 53.622 18.977z">
                            </path>
                            <path d="M59.389 54.548l5.16-53.541-8.74 39.716-19.612 1.045 1.57 20.462-7.766 36.583 12.057-39.899z">
                            </path>
                            <path d="M62.8 67.182l.549-10.453-15.979 3.755-.032 11.797-17.337 26.532 21.68-27.616zM65.711 62.394l14.841-4.731 1.509-12.532-15.899 2.095zM72.07 44.502l10.988-1.417 1.581-10.278-8.079-.373L64.549 1l8.43 30.967z"></path>
                            <path d="M87.413 31.294l1.256-9.506-9.544-2.694L64.549 1l14.483 22.437-.422 7z"></path>
                        </g>
                    </g>
                </svg>}
                <h2 className="text-sky-500 bottom-12 left-14 font-bold font-rg tracking-widest text-2xl sm:text-3xl">{text}</h2>
            </StyledDiv>
        </ButtonLink>
    );
}
CompanyLogo.propTypes = {
    classname: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.bool,
}
const StyledDiv = styled.div`
    /* position: relative; */
`;

export default CompanyLogo;
