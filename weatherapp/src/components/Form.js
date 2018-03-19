import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>            
                <form action="" method="GET" role="" onSubmit={this.props.getWeather}>
                    <legend>API WEATHER using REACT </legend>
                    <div className="form-group">
                        <input type="text" className="form-control" name="city" placeholder="City" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="country" placeholder="Country" />
                    </div>
                    <button type="submit" className="btn btn-primary">GET WEATHER</button>
                </form>
            </div>
        );
    }
};

export default Form;