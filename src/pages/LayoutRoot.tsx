import { Outlet } from "react-router-dom";
import Nagivation from "../components/Nagivation";

function LayoutRoot() {
  return (
    <>
      <Nagivation />
      <main className="p-4 sm:p-6">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutRoot;
