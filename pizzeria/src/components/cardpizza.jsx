const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title text-start fw-bold text-dark">Pizza {name}</h5>
        <hr />
        <p className="card-text mb-1 fs-6 text-dark">Ingredientes:</p>
        <p className="card-text small text-dark">🍕 {ingredients.join(", ")}</p>
        <hr />
        <h5 className="fw-bold fs-5 text-dark">
          Precio: ${price.toLocaleString("es-CL")}
        </h5>
        <div className="d-flex justify-content-around mt-3">
          <button className="btn btn-light border btn-sm px-3">
            Ver Más 👀
          </button>
          <button className="btn btn-dark btn-sm px-3">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;