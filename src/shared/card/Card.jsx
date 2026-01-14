import "./card.scss";



export default function Card({image, title, price}) {
    return (
        <div className="card">
            <div className="card_wrapper">
                <img className="card_wrapper_image" src={image} alt={title} />
                <h2 className="card_wrapper_title">{title}</h2>
                <p className="card_wrapper_price">{price} руб.</p>
            </div>
        </div>
    );
}