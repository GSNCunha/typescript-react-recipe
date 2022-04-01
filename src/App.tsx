import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [recipesFound,setRecipesFound] = useState([]);
  const [recipeSearch,setRecipeSearch] = useState('');

  const searchForRecipes = async (query: string): Promise<any> => {
    const result = await fetch(`http://localhost:3001/?search=${query}`);
    return (await result.json()).results;
  }

const search = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target;
  //const input = form.querySelector('#searchText')
}

  useEffect(() => {
    (async () =>{
      const query = encodeURIComponent(recipeSearch);
      const response = await searchForRecipes(query);
      setRecipesFound(response);
    })();
  });


  return (
    <div className="App">
      <h1>Recipe search app</h1>
      <form className="searchForm" onSubmit={event => search(event)}>
        <input type="text" id="searchText" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default App;
