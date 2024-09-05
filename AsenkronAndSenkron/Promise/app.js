/*
Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir. Promise yapısı olumlu (fullfiled)sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.

asenkron yapıları senkrona çevirmek için kulanırız callbacklerin alternatifi
*/

// let check = true;

// const promise1 = new Promise((resoleve, rejecet) => {

//     if (check) {
//         resoleve("promise başarılı");

//     } else {
//         rejecet("promise başarısız")
//     }
// })
// console.log(promise1);

// let check = true;

// function createPromise() {

//     return new Promise((resolve, reject) => {
//         if (check) {
//             resolve("Promise de herahangi bir sıkıntı yok ")
//         } else {
//             reject("skıntı büyük")
//         }
//     })
// }



// createPromise()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => { // her zaman çalışır
//         console.log("her zaman çalışır")
//     })

/*
PROMİSE + XMLHTTPREQUEST
*/
// function readStudent(url) {
//     return new Promise((resoleve, rejecet) => {
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resoleve(JSON.parse(xhr.responseText));
//                 }
//             })

//         } catch (error) {
//             rejecet(error);
//         }
//         xhr.open("GET", url)
//         xhr.send();
//     })
// }
// readStudent("student.json")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// function getUsers(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", () => {
//             try {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         xhr.open("GET", url)
//         xhr.send();
//     })

// }
// getUsers("https://jsonplaceholder.typicode.com/users")
//     .then((data) => {
//         // console.log(data)
//         data.forEach((user) => { // veri üzerinde dönebiliriz
//             console.log(user.name)
//         });
//     })
//     .catch((err) => console.log(err))
//     .finally(() => {
//         // mail atma kodalrını yazarsın
//     })

const p1 = Promise.resolve("birinci promise başarılı")
const p2 = Promise.resolve("ikinci promise başarılı")
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promise başarılı")
})

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })