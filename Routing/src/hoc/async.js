// This component is responsible for lazy loading of component in React js application
import React from 'react';
const asyncComponent = (importComponent) => {
    return class extends React.Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({component: cmp.default})
            })
        }
        render(){
            const Comp = this.state.component;
            return Comp ? <Comp {...this.props}/> : null;
        }
    }
}
export default asyncComponent;