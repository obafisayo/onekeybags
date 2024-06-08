import React from "react";
import styled from "styled-components";
import { RxReload } from "react-icons/rx";
import { TawkMessengerContext } from "../../../Layout/LandingPageLayout/LandingPageLayout";

function Home() {
    const { maximize } = React.useContext(TawkMessengerContext);
    const [roll, setRoll] = React.useState(false)
    return (
        <StyledDiv className="container">
            This is the Home page
            <br />
            <button type="button" id="btn"
                onClick={() => {
                    maximize();
                    const btn = document.querySelector("#btn")
                    btn.toggleAttribute("disabled")
                    setRoll(true)
                    btn.textContent = ""
                    setTimeout(() => {
                        btn.append("Minimize Tawkto")
                        setRoll(false)
                        btn.toggleAttribute("disabled")
                    }, 1000)
                }}
                className="px-4 py-2 bg-blue-700 rounded-lg text-white
                    flex gap-2 items-center justify-center
                "
            >
                Maximize TawkTo
                {roll && <RxReload className="animate-spin h-5 w-5 mr-3"/>}
            </button>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    // Your styled-components CSS here
`;

export default Home;