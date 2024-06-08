// import React from "react";
import { FaCaretDown } from "react-icons/fa6";
import { InternalNavlink } from "../../../components/Link/Link";
import { navConfig } from "./navConfig";
import { HOWTOORDER } from "../../../routes/RouteConstants";
import styled from "styled-components";

function Nav() {
    return (
        <StyledNav id="nav-el"
            className="hidden lg:block">
            <ul
                className="flex items-center
            ">
                {navConfig.map((data, index) => (
                    <li className="relative cursor-pointer group" key={index}  id="ul-1">
                        <InternalNavlink to={data.path} 
                            className="px-5 flex items-center
                            font-md lg:text-gray-500 group-hover:text-black
                            dark:group-hover:text-white py-2"
                        >
                            {data.name}
                            <span className="absolute bottom-3">
                                <FaCaretDown
                                    className="group-hover:rotate-180 duration-300" 
                                />
                            </span>
                        </InternalNavlink>
                        <div className="absolute z-[9999] hidden
                        group-hover:block w-[200px] rounded-md
                        bg-white shadow-md dark:bg-gray-900 p-2
                        dark:text-white">
                            <ul className="space-y-2">
                                {data.dropdown.map((element, index) => (
                                    <li key={index}  id="ul-2">
                                        <InternalNavlink to={element.path}
                                            className="lg:text-gray-500
                                            dark:hover:text-white
                                            duration-200 hover:text-black
                                            p-2 inline-block w-full font-md
                                            hover:bg-primary/20 rounded-md"
                                        >
                                            {element.name}
                                        </InternalNavlink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
                <li className="cursor-pointer">
                    <InternalNavlink to={HOWTOORDER}
                        className="flex items-center
                        font-md lg:text-gray-500 hover:text-black
                        dark:hover:text-white py-2 px-4"
                    >
                        How to order
                    </InternalNavlink>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    &.nav-activ {
        animation: bounce 1s ease-in-out;
        @keyframes bounce {
            0%, 100% {
                transform: translateY(-25%);
                animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
                transform: translateY(0);
                animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
        }
    }
`;

export default Nav;
