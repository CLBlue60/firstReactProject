import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        const value = quantity + 1;
        setQuantity(value);
    }

    function decrease() {
        if (quantity > 1) {
            const value = quantity - 1;
            setQuantity(value);
        }
    }

    return (
        <div className="qt-picker">
            <button disabled={quantity === 1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className='btn btn-sm btn-danger' onClick={increase}> + </button>
        </div>
    );
}

export default QuantityPicker;
