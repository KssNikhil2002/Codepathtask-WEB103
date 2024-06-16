
import '../styles/styles.css'
export default function creatorcard({creator}) {
  return (
    <div className="creator-card">
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} className="creator-image" />}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
    </div>
  )
}
