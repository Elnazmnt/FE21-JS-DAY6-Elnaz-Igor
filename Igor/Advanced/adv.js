let booksData = JSON.parse(books);

console.log(booksData)


let result = document.getElementById('results');

let bgColor

for (let i of booksData) {

    if (i.read == true) {

        bgColor = 'bg-success';

    } else {

        bgColor = 'bg-warning';
    }

    result.innerHTML += `<div class="col">
<div class="card h-100 ${bgColor}">
    <img src="${i.cover}" class="card-img-top" alt="${i}" height="468px">
    <div class="card-body">
        <h5 class="card-title">"${i.title}" by ${i.author}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
</div>
</div>`


}








// if (booksData[i].read == true) {

//     result.innerHTML += `<p style="background-color: green;"><img src="${booksData[i].cover}" alt="${i}"><br>"${booksData[i].title}", by ${booksData[i].author}</p>`
// }

// else {
//     result.innerHTML += `<p style="background-color: yellow;"><img src="${booksData[i].cover}" alt="${i}"><br>"${booksData[i].title}", by ${booksData[i].author}</p>`
// }