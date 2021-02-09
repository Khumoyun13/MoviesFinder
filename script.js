let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')
let selectElement = document.querySelector('select')
let ulElement = document.querySelector('ul')

setYears()

formElement.addEventListener('submit', function (event) {
    event.preventDefault()
    ulElement.textContent = ''
    let inputElementValue = inputElement.value
    let selectElementValue = selectElement.value

    let filteredMovies = getMoviesBy(inputElementValue, selectElementValue);

    renderData(filteredMovies)
})

function renderData(array) {
    if (array.length) {
        for (item of array) {
            let newLiElement = document.createElement('li')
            newLiElement.textContent = item.title
            ulElement.appendChild(newLiElement)
        } 
    }
}


function getMoviesBy(name, year) {
    let filtered = kinolar.filter(function (item) {
        return item.title.toLowerCase().includes(name) && year == item.year
    })

    return filtered
}








// function getMoviesBy(name, year) {
//     let filter = []
//     for (let movie of kinolar) {
//         let moviesearch = movie.title.toLowerCase().includes(name)
//         if (moviesearch && year == movie.year){
//             filter.push(movie)
//         }
//     }
// }

















function setYears() {
    let years = []
    for (let item of kinolar) {
        let indexOfYears = years.indexOf(item.year)
        if (indexOfYears == -1) {
            years.push(item.year)
        }
    }

    years = years.sort((a, b) => a - b)

    for (let year of years) {
        let newOptionElement = document.createElement('option')
        newOptionElement.setAttribute("value", year)
        newOptionElement.textContent = year
        selectElement.appendChild(newOptionElement)
    }
}















// form.onsubmit = function handleKeyUp(event) {
//     event.preventDefault()

//     let soz = input.value
//     let yil = option.value
//     if (soz.length > 3) {
//         console.log(movieSearch(soz, yil));
//     }
// }

// function movieSearch(name, year) {
//     name = name.toLowerCase()
//     let sorted = []

//     for (item of kinolar) {
//         let movieName = item.title.toLowerCase()
//          if (movieName.includes(name) && year == item.year) {
//                sorted.push(item)
//         }
//     }

//      return sorted
// }


// let input = document.querySelector('input')

// input.addEventListener('keyup', handleKeyUp)

// function handleKeyUp(event){
//     let soz = event.target.value
//     if(soz.length > 3){
//         console.log(movieSearch(soz));
//     }
// }
// ----------------------------------------------------------------------------------
// let selectElement = document.querySelector('select')


// document.querySelector('form').addEventListener('submit', function(event){
//     event.preventDefault()

//     let inputElementValue = inputElement.value
//     let selectElementValue = selectElement.value

//     getMoviesByName(inputElementValue, selectElementValue)

//     renderData(getMoviesByName)
// })

// function renderData(array){

// }





// function getMoviesByName(name, year) {
//     let filtered = kinolar.filter(function(item){
//         return item.title.toLowerCase().includes(name) && year == item.year
//     })
//     return filtered
// }






// function setYears(){
//     let years = []

//     for(let item of kinolar){
//         let indexOfYears = years.indexOf(item.year)
//         if(indexOfYears == -1){
//             years.push(item.year)
//         }
//     }

//     years = years.sort((a,b) => a-b)

//     for(let year of years){
//         let newOptionElement = document.createElement('option')
//         newOptionElement.setAttribute('value', year)
//         newOptionElement.textContent = year
//         selectElement.appendChild(newOptionElement)
//     }

    
// }

// setYears()