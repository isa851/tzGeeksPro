import BrandCard from "../../shared/brandCard/BrandCard";
import logo from "../../shared/images/logo.png"
import "./brands.scss";

const data = [
    {
        logo: logo
    },
    {
        logo: logo
    },
    {
        logo: logo
    },
    {
        logo: logo
    }
];


export default function Brands() {
    return (
        <div className="brands">
            <h1 className="brands_title">наши бренды</h1>
            <div className="brands_line"></div>

            <div className="brands_list">
                {data.map((item, index) => (
                    <div className="brandCard" key={index}>
                        <BrandCard logo={item.logo} />
                    </div>
                ))}
            </div>
        </div>   
    );
}
