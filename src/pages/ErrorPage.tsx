import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="mt-12 flex flex-col items-center ">
        <h2 className="text-2xl font-bold text-white ">Not Found Page</h2>
        <Link className=" mt-5 rounded-2xl   px-4 py-2 bg-gray-300 hover:bg-gray-400" to="/" >Home Page</Link>
    </div>
  )
}

export default ErrorPage