import watch from "../../shared/images/watch.png";
import Card from "../../shared/card/Card"
import "./receipts.scss";

const data = [
    {
        id: 1,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 2,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },  
    {
        id: 3,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 4,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 5,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 6,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 7,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
    {
        id: 8,
        image: watch,
        title:"Louis XVI ATHOS",
        price: "165 000",
    },
];

export default function Receipts() {
    return (
        <section className="receipts">
            <div className="container">
                <h1 className="receipts_title">новые поступления</h1>
                <div className="receipts_line"></div>
                <div className="receipts_grid">
                    {data.map((item) => (
                        <Card 
                            key={item.id} 
                            image={item.image} 
                            title={item.title} 
                            price={item.price} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}