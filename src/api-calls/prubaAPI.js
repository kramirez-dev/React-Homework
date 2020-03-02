import React, {Component} from 'react';
import Prueba from '../components/prueba';


class prubaAPI extends Component {
    render() {
        return (
            <Prueba pruebas={this.state.pruebas}></Prueba>
        )
    }
    state = {
        pruebas: []
    };

    componentDidMount() {
        fetch(' https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then((data) => {
                this.setState({ pruebas: data.categories })
            })
            .catch(console.log)
    }
}

export default prubaAPI