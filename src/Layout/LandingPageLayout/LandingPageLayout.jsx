import React, { useRef } from 'react';
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export const TawkMessengerContext = React.createContext();

function LandingPageLayout() {
    const tawkMessengerRef = useRef();

    // Function to minimize the Tawk Messenger
    function handleMaximize() {
        if (tawkMessengerRef.current && tawkMessengerRef.current.minimize) {
          const tawkMessengerEl = tawkMessengerRef.current;
          tawkMessengerEl.toggle();
        }
    }

    // Provide the Tawk Messenger reference to the context
    const value = {
        tawkMessengerRef,
        maximize: handleMaximize,
    };

    return (
        <>
            <Header />
            <main>
                <TawkMessengerContext.Provider value={value}>
                    <Outlet />
                    <TawkMessengerReact
                        propertyId="665b07549a809f19fb37a9ef"
                        widgetId="1hv9p98po"
                        ref={tawkMessengerRef}
                    />
                </TawkMessengerContext.Provider>
            </main>
            <Footer />
        </>
    );
}

export default LandingPageLayout;