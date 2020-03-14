import Link from "next/link";
const Card = () => (
  <div className="card">
      <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"></img>
    <div className="card__content">
      <p className="card__title">Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat nihil commodi reiciendis nobis. Atque eos nemo consequuntur ullam omnis?</p>
      <div className="card__info">
          <p className="card__tag">Tech</p> 
        <p className="card__price">🧡 23</p>
      </div>
    </div>
  </div>
);
export default Card;