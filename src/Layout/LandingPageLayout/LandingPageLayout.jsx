import React from "react";
import { Outlet } from "react-router-dom";

function LandingPageLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default LandingPageLayout;
