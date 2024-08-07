"use client";

import { HashRouter } from "react-router-dom";

export function Providers({children}) {
  return <HashRouter basename="/">{children}</HashRouter>;
}
