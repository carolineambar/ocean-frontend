import './Card.css'

function Card() {

    return (
      <>
        <div className="card">
          <h2 className="card-title">Rick Sanches</h2>
          <img className="card-image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Imagem do Rick Sanches"/>
        </div>
      </>
    )
  }
  
  export default Card