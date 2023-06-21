import React, { useState } from 'react';

import { setCartItems } from '../store/slices/cart-slice';

import { useDispatch} from "react-redux";
const Ablog = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState([]);

    function Fun(e) {
        e.preventDefault();
        dispatch(
            setCartItems(text)
        )
    }

    console.log(text);
    
    return (


        <div style={{
            height: "300px", width: "1200px", marginTop: "50px", boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px"
        }}>
            <div>
                <div style={{ margin: "20px", borderBottom: "1px solid #adb5bd" }}>
                    <h3>Component A</h3></div>
                <div style={{ margin: "20px" }}>

                    <form onSubmit={(e) => Fun(e)} >
                        <div><h5>Enter text:</h5></div>
                        {/* <InputGroup>
                                <Input placeholder='Enter anything'
                                    
                                />
                                <Button color='primary' type='submit'>
                                    Submit
                                </Button>
                            </InputGroup> */}
                        <input type='text' onChange={(text) => setText(text.target.value)}></input>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )

}
export default Ablog;