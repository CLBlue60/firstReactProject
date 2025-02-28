// Import necessary hooks and styles
import { useState, useEffect } from "react";
import "./QuantityPicker.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

// Define the QuantityPicker component
function QuantityPicker({ initialQuantity = 1, onChange }) {
    // State to manage the quantity
    const [quantity, setQuantity] = useState(initialQuantity);

    // Update quantity when initialQuantity changes
    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    // Increase quantity
    function increase() {
        const value = quantity + 1;
        setQuantity(value);
        onChange(value);
    }

    // Decrease quantity
    function decrease() {
        if (quantity > 1) {
            const value = quantity - 1;
            setQuantity(value);
            onChange(value);
        }
    }

    return (
        <div>
            {/* Button to decrease quantity */}
            <button className="btn btn-sm btn-danger" onClick={decrease}>
                <i className="fa-solid fa-cart-arrow-down"></i>
            </button>
            {/* Display current quantity */}
            <span className="mx-2">{quantity}</span>
            {/* Button to increase quantity */}
            <button className="btn btn-sm btn-success" onClick={increase}>
                <i className="fa-solid fa-cart-plus"></i>
            </button>
        </div>
    );
}

// Export the QuantityPicker component as the default export
export default QuantityPicker;
