const URL = "https://fakestoreapi.com/products";

let data = await fetch(URL);
data = await data.json();
console.log(data);
CreatList(data);

function CreatList(data){
cardPlace.innerHTML = data.map(item => `
        <div class="p-2 ">
            <div class="card text-center shadow">
            <img src="${item.image}" class="rounded mx-auto d-block p-4" style="width: 10rem; height: 10rem" alt="...">
            <div class="card-body">
                <h5 class="card-title count-title">${item.title}</h5>
                <p class="card-text count-row">${item.description}</p>
                <p class="card-text float-end"><b>$ ${item.price}</b></p>
            
            </div>
        </div>
</div>`).join('');
}

let sortUpBtn = document.querySelector('#sort-up');
let sortDownBtn = document.querySelector('#sort-down');
let sort = null; //true - UP, false - DOWN

sortUpBtn.addEventListener('click', function () {
    sort = true;
    Sort(data);
    CreatList(Sort(data));
});

sortDownBtn.addEventListener('click', function () {
    sort = false;
    Sort(data);
    CreatList(Sort(data));
});


function Sort(Array) {
    let sorted;
            if (sort) {
                sorted =  Array.sort((a, b) => a.price - b.price);
            } else {
               sorted =  Array.sort((a, b) => b.price - a.price); //сортировка по убыванию
            }
    return sorted;
}

