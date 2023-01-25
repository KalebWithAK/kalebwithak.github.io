import { englishList } from "../lib"
import tsa from "../images/tsa.png"
import xavier_austin_group from "../images/xavier-austin-group.png"

export default function Project({ title, date, purpose, utilized, url }) {
  let img

  switch (title.toLowerCase()) {
    case "xavier austin group":
      img = xavier_austin_group
      break
    case "south meck tsa":
      img = tsa
      break
    default:
      img = null
  }

  return (
    <div className="project-card">
      <a href={url}>
        <img src={img} alt={`${title} logo`} />
        <h3>{title}</h3>
      </a>
      <span className="datetime">{date}</span>
      <p>{purpose}</p>
      <p style={{position: "absolute", bottom: "1rem"}}>Built with {englishList(utilized)}</p>
    </div>
  )
}