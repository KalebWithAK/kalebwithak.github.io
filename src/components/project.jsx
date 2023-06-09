import { englishList } from "../lib"
//mport tsa from "../images/tsa.png"
//import xavier_austin_group from "../images/xavier-austin-group.png"

export default function Project({ title, img, date, purpose, utilized, url }) {


  /*switch (title.toLowerCase()) {
    case "xavier austin group":
      img = xavier_austin_group
      break
    case "south meck tsa":
      img = tsa
      break
    default:
      img = null
  }*/
  console.log(img)

  return (
    <div className="project-card">
      <a href={url}>
        <img src={'/images/' + img} alt={`${title} logo`} />
        <h3>{title}</h3>
      </a>
      <span className="datetime">{date}</span>
      <p>{purpose}</p>
      <p style={{position: "absolute", bottom: "1rem"}}>Built with {englishList(utilized)}</p>
    </div>
  )
}