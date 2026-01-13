import Banner from "../widgets/banner/Banner";
import Brands from "../widgets/brands/Brands";
import Collection from "../widgets/collection/Collection";
import Receipts from "../widgets/receipts/Receipts";
import "./home.scss";

export default function Home() {
    return(
        <div className="home">
            <Banner/>
            <Collection/>
            <Receipts/>
            <Brands/>
        </div>
    );
}