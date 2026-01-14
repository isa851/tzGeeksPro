import Card from "../../shared/card/Card";
import watch from "../../shared/images/watch.png";
import "./collection.scss";

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
];

export default function Collection() {
    return (
        <div className="collection">
            <div className="collection_content">
                <div className="collection_content_block1">
                    <div className="collection_content_block1_wrapper">
                    <h1 className="collection_content_block1_wrapper_title">СЕЗОН 2020/21</h1>
                    <div className="collection_content_block1_wrapper_card">
                             {data.map((item) => (
                                <div className="collection_content_block1_wrapper_card_item" key={item.id}>
                                    <img className="collection_content_block1_wrapper_card_item_image" src={item.image} alt="" />
                                    <h2 className="collection_content_block1_wrapper_card_item_title">{item.title}</h2>
                                    <p className="collection_content_block1_wrapper_card_item_price">{item.price} руб.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collection_content_block1_backgroundImage">
                        <h1>Новая коллекция</h1>
                        <div className="collection_content_block2_wrapper_info_line"></div>
                        <button>Каталог</button>
                    </div>
                </div>
                <div className="collection_content_block2">
                    <div className="collection_content_block2_wrapper">
                        <div className="collection_content_block2_wrapper_backgroundImage"></div>
                        <div className="collection_content_block2_wrapper_info">
                            <h1 className="collection_content_block2_wrapper_info_title">коллекция 2018</h1>
                            <div className="collection_content_block2_wrapper_info_line"></div>
                            <p className="collection_content_block2_wrapper_info_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
                            <button className="collection_content_block2_wrapper_info_btn">посмотреть коллекцию</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}