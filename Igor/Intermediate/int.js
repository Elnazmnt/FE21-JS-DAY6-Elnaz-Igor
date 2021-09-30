let results = document.getElementById('results')


let data = JSON.parse(employees)

console.table(data)
console.log(data[1].firstName)



for (let i in data) {

    results.innerHTML += `${data[i].uniqueId}<br>${data[i].firstName}<br>${data[i].lastName}<br>${data[i].emaidAddress}<br>${data[i].jobTitle}<br>${data[i].salary}<br><br>`
}