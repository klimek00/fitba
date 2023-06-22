import { Link } from "react-router-dom";

export default function Body() {
  return (
    <>
      <div className="h-screen p-6">
        in build. always will be.<br/>
        you can always <Link to="soogulator"><span className="text-blue-600 visited:text-purple-600">Soogulate</span></Link> your food<br/>
        or learn <Link to='about'><span className="text-blue-600 visited:text-purple-600">something about me</span></Link><br/>
        just make sure you won't <Link to='lost'><span className="text-blue-600 visited:text-purple-600">get lost</span></Link>

      </div>
    </>
  )
}