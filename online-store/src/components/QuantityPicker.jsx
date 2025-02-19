import { useState, useEffect } from "react";
import "./QuantityPicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

function QuantityPicker({ initialQuantity = 1, onChange }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    function increase() {
        const value = quantity + 1;
        setQuantity(value);
        onChange(value);
    }

    function decrease() {
        if (quantity > 1) {
            const value = quantity - 1;
            setQuantity(value);
            onChange(value);
        }
    }

    return (
        <div>
            <button className="btn btn-sm btn-danger" onClick={decrease}>
                <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-sm btn-success" onClick={increase}>
                <i className="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    );
}

export default QuantityPicker;
