import { NavLink } from "react-router";
function Header() {
  return (
    <div className="flex gap-3">
        <NavLink className="" to="./pageOne">Page one</NavLink>
        <NavLink to="./pageTwo">Page two</NavLink>
    </div>
  )
}

export default Header;