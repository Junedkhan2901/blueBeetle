import React from 'react';
import { useSelector } from 'react-redux';
const Bblog = () => {

    const textvalue = useSelector((state) => state.cart.textvalue);
    // const { cartSlice } = useSelector((state) => state.textvalue);
    console.log("hello from component b", textvalue);
    return (
        <div style={{
            height: "300px", width: "1200px", marginTop: "50px", boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px"
        }}>
            <div>
                <div style={{ margin: "20px", borderBottom: "1px solid #adb5bd" }}>
                    <h3>Component B</h3></div>
                <div style={{ margin: "20px" }}>
                    <div><h5>Entered text from Component A:</h5></div>
                    <input type='text' value={textvalue} ></input>
                </div>
            </div>
        </div>

    )

}
export default Bblog;