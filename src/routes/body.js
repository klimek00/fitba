import { Link } from "react-router-dom";

export default function Body() {
  return (
    <>
      <div className="h-screen p-6">
        in build. always will be.<br/>
        you can always <Link to="soogulator">Soogulate</Link> your food

      </div>
    </>
  )
}