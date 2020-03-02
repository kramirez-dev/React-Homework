import React, {Component} from 'react';
import Random from '../components/random';


class randomAPI extends Component {
    render() {
        return (
            <Random pruebas={this.state.pruebas}></Random>
        )
    }
    state = {
        pruebas: []
    };

    componentDidMount() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then((data) => {
                this.setState({ pruebas: data.meals })
            })
            .catch(console.log)
    }
}

export default randomAPI