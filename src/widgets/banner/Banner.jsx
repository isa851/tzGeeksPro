import logo from "../../shared/images/headerLogo.png";
import "./banner.scss";

export default function Banner() {
    return (
        <div className="banner">
            <div className="container banner_content">
                <div className="banner_content_card">
                    <img className="banner_content_card_title" src={logo} alt="" />
                    <h3 className="banner_content_card_text">санкт-петербург</h3>
                </div>
                <div className="banner_content_description">
                    <p className="banner_content_description_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
                </div>
            </div>
        </div>
    );
}