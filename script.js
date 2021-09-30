//let message = document.getElementsByName("newjson");

var sandwichesAfterParse = JSON.parse(sandwiches);
var friesAfterParse = JSON.parse(fries);

console.table(sandwichesAfterParse);
console.table(friesAfterParse);



document.getElementsByClassName("newjson")[0].innerHTML += `
    <h1>
    My favorite sandwich is a ${sandwichesAfterParse.sandwich} 
    which has approximately ${sandwichesAfterParse.calories} calories, along with it I enjoy eating 
    ${friesAfterParse.fries_size}which have about ${friesAfterParse.calories} calories.</h1>`;
    

    var newemployee = JSON.parse(employee);

    console.table(newemployee);

    document.getElementsByClassName("employee")[0].innerHTML=`
    <table class="table-danger">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email address</th>
        <th scope="col">Job Titl</th>
        <th scope="col">Salary</th>
      </tr>
    </thead>


</table> `;

    for(let x of newemployee){
    document.getElementsByClassName("employee")[0].innerHTML+=`
 
  
    <table class="table-danger">

   
    <tbody>
      <tr>
        <th scope="row">${x.UniqueID}</th>
        <td>${x.FirstName}</td>
        <td>${x.LastName}</td>
        <td>${x.EmailAddress}</td>
        <td>${x.JobTitle}</td>
        <td>${x.Salary}</td>
      </tr>
  
    </tbody>
  </table>

`;}