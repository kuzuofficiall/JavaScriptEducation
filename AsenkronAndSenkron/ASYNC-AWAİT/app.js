/**
 * ?                             ASYNC AWAİT
 * 
 * Belli bir süre sonra then zinciri oluyordu okunmaz hale geldiği için  then hell oluyordu bunun yerine artık async await yapısı geldi alternatif olarak
 * 
 * 

async function heloo() { // async ile işaretlersen sana bir promise döndürür 
return "hello world";

}
console.log(heloo())

document.querySelector("#button").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => response.json())
    .then((post) => {
        console.log(post)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response) => response.json()) // burda yorumları döndürdü alta ise yakalayıp ekrana yazdırdı 
        .then((comments) => console.log(comments))
    })
})


async await ile yapılışı
document.querySelector("#button").addEventListener("click", async () => {
    
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/2") // await tek kulanamazsın kulandığın fonksiyonun başına async keywordu ile işaretlemen lazım
    const post = await responsePost.json(); // responsePost içindeki json metodu kulanarak istediğim veriyi ver  await sadece promislerde kulanılır asenkron problemi olan yerlerde kulanılır
    
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json();
    console.log(comments)
    
})

document.querySelector("button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post, comments)
})
*/

/*
                                         ? asenkron bölümü özet 
senkron : sırasıyla çalışan işlem parçacıkları (javaScript senkron çalışır)
asenkron: eş zamanlı birden fazla iş yapmak için kulanılır

asenkron çalişmasına sebep olan durumlar 
1- timing (zaman)
2- event (olay)
3- htpp isteleri 
  - xmlHttpReaquest
   - fetc api
   - axios
   

asenkron yönetmek için :

1- callback 
2- promise 
3- ASYNC AWAiT



*/
