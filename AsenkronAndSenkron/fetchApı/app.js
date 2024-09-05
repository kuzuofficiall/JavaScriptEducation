/*
 ?   ----------- FETCH API -----------------

 ! CALLBACK --> PROMİSE 
 ! AJAX(XMLHTTPREQUEST) --> FETCH APİ   servera istek atma 
 fetch api birşeyler okduğunda bir promise dönüyor ama response tipinsde bir promise dönüyor ama promisin altındaki jsona erişmemiz lazım orda veriler var veriyi dönmek için response içindeki jsona erişip yapmamı lazım o yüzden 2 tane then kulanıyoruz birinci response ikinci ise json döndürür
*/

// function getStudent(url) {
//     fetch(url)
//         .then((response) => console.log(response.json()))
//         .then((data) => console.log(data))
//         .catch((Error) => console.log(Error))

// }

// getStudent("student.json"); 


// function getData(url) {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((Error) => console.log(Error))

// }
// getData("https://jsonplaceholder.typicode.com/users");

// gönderme karşıya gönderme 
function saveStudent() {
    fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
            " content-Type": "student.json"
        },
        body: JSON.stringfy(data)

    })
}