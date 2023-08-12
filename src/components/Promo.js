function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.name}</h1>
                </div>
                <div>
                <h2>{props.details}</h2>
            </div>
        </div>
    );
};

export default Promo;
