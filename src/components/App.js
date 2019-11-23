import React, { Component } from 'react';
import Recipe from './Recipe';
import Navigation from './Navigation';

class App extends Component {

    constructor(props){
        super(props);

        this.selectNewRecipe = this.selectNewRecipe.bind(this);
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
            ],
            selectedRecipe : null
        }
    }

    selectNewRecipe(recipeId) {
        if(recipeId) {
            this.setState({
                ...this.state,
                selectedRecipe: recipeId
            });
        }
    }

    
    render(){
        let recipeToSelect;
        if(this.state.selectedRecipe) {
            const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);
            if(filteredRecipes.length > 0) {
                recipeToSelect = filteredRecipes[0];
            }
        }

        return(
            <div className="App">
                <aside className="sidebar">
                    <h1 className="sidebar__title">Yasmeen Cooks</h1>
                    <Navigation 
                        recipes={this.state.recipes}
                        activeRecipe={this.state.selectedRecipe}
                        recipeToSelect={this.selectNewRecipe}
                    />
                </aside>
                {
                    recipeToSelect ? 
                      <Recipe
                      ingredients={recipeToSelect.ingredients}
                      steps={recipeToSelect.steps}
                      title={recipeToSelect.title}
                      />
                      :
                      null
                  }
            </div>
        )
    }

    componentDidMount() {
        const recipeToShow = this.state.recipes[0].id || null;
        this.setState({
            ...this.state,
            selectedRecipe: recipeToShow
        });
    }
}




export default App;