import { BallCanvas } from "./canvas"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className={`sm:px-16 px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10`}>
      {technologies.map((technology)=> (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech