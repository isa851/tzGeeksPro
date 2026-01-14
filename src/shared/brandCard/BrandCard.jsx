import "./brandCard.scss";

export default function BrandCard({ logo }) {
    return (
        <div className="brandCard">
            <img src={logo} alt="" className="brandImage" />
        </div>
    );
}