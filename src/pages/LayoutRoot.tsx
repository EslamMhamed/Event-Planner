import { Outlet } from "react-router-dom";
import Navigation from "../components/Nagivation";

function LayoutRoot() {
  return (
    <>
      <Navigation />
      <main className="p-4 sm:p-6">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutRoot;
