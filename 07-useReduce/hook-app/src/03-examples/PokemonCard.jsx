export const PokemonCard = ({id, name, sprites = []}) => {
  return (
    <section style={{height: 200}}>
        <p>{id}</p>
        <h2 className="text-capitalize">{name}</h2>

        <div>
            {
                sprites.map(sprite => (
                    <img key={sprite} src={sprite} />//DEBEMOS PASAR UNA KEY YA QUE ESTO SE ESTA RENDERIZANDO AUTOMATICAMENTE
                ))
            }
        </div>
    </section>
  )
}

