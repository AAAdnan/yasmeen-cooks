import React, { Component } from 'react';
import Recipe from './Recipe';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            recipes: [
                {
                    title: 'Bagel',
                    ingredients: [
                        '1 Bagel',
                        'Cream cheese'
                    ], 
                    steps: [
                        'Slice bagel in half'
                    ], 
                    id: 'bagel'
                },
                {
                    title: 'Pizza',
                    ingredients: [
                        '1 Pizza Crust',
                        ''
                    ], 
                    steps: [
                        'Put sauce on crust',
                        'Springle mozarella cheese on sauce'
                    ], 
                    id: 'pizza'
                },
            ]
        }
    }

    
    render(){
        return(
            <div className="App">
                <aside className="sidebar">
                    <h1 className="sidebar__title">Yasmeen Cooks</h1>
                    <Recipe 
                        ingredients={this.state.ingredients}
                        steps={this.state.steps}
                        title={this.state.title} />
                </aside>
            </div>
        )
    }
}

export default App;