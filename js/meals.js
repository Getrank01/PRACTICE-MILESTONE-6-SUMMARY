const getfood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaymeals(data.meals))

}

const displaymeals = meals => {
    const olddiv = document.getElementById('mealscat')
    olddiv.innerHTML = ``;
    meals.forEach(meal => {

        const nwdiv = document.createElement('div')
        nwdiv.classList.add('col')
        nwdiv.innerHTML = `
        <div onclick="clickdisplay(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
      </div>
    </div>
        `
        olddiv.appendChild(nwdiv);


    });
}

const searchfood = () => {
    const inputfield = document.getElementById('input-text')
    const getvalue = inputfield.value;
    getfood(getvalue);
    inputfield.value = '';
}

const clickdisplay = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaybyclick(data.meals[0]))

}


const displaybyclick = meal => {
    const onediv = document.getElementById('onedisplay');
    onediv.innerHTML = ``;
    const onenwdiv = document.createElement('div');
    onenwdiv.classList.add('card');
    onenwdiv.innerHTML = `
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
     
     </div>
    
    `
    onediv.appendChild(onenwdiv);






}






getfood('');


// const onediv = document.getElementById('onedisplay');
// onediv.innerHTML = `
// <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
// <div class="card-body">
// <h5 class="card-title">${meal.strMeal}</h5>
// <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>

// `