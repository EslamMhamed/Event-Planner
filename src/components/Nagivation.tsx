import { Calendar, Plus } from "lucide-react"
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav className="flex items-center justify-between gap-4 bg-secondary p-4 sm:px-6 py-4 flex-wrap 2xl:bg-tertiary 2xl:text-white *:py-2 *:px-4 *:flex *:gap-2 *:border ">
        <Link className="border-primary 2xl:border-white"  to="/">
            <Calendar /> Events
        </Link>

        <Link className="border-white"  to="/create">
            <Plus /> Create an Event
        </Link>
    </nav>
  )
}

export default Navigation