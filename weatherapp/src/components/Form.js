import React from "react";

const Form = (props) =>{
    return(
        <div className="w3-container w3-border w3-padding-32 w3-border-black w3-white">            
            <form class="w3-container" action="" method="GET" role="" onSubmit={props.getWeather}>
                <legend>API WEATHER using REACT </legend>
                <input type="text" className="w3-input w3-white w3-text-black" name="city" placeholder="City" />
                <input type="text" className="w3-input w3-white w3-text-black w3-margin-top" name="country" placeholder="Country" />
                <button type="submit" className="w3-btn w3-black w3-margin-top">GET WEATHER</button>
            </form>
        </div>
    );
};

export default Form;