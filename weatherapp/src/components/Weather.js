import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                { this.props.temperature && <p>temperature :> { this.props.temperature }</p> }
                { this.props.city && <p>city :> { this.props.city }</p> }
                { this.props.country && <p>country :> { this.props.country }</p> }
                { this.props.humidity && <p>humidity :> { this.props.humidity }</p> }
                { this.props.description && <p>description :> { this.props.description }</p> }
                { this.props.error && <p>error :> { this.props.error }</p> }
            </div>
        );
    }
};

export default Weather;