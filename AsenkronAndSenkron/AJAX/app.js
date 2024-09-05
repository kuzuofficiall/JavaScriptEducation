/*
 AJAX aynı anda çok görev yapmayı kolaylaştırır. Eğer iki işlemin eşzamanlı olarak çalıştığı benzer bir duruma rastlarsanız – biri çalışır durumda, diğeri ise boştayken, bu AJAX’ın işi olabilir.
 AJAX’ın ne tek bir teknoloji, ne de bir program dili olmadığını unutmayın. Daha önce de belirttiğimiz gibi, AJAX bir takım web geliştirme tekniğidir.
 JavaScript AJAX teknolojisi web sayfalarını yenilemeden arka planda veri gönderme ve veri alma işlemleri için kullanılır.
  bir projeyi servera bağlamak için aradaki katmanın adı ajax tır kulanılmaz onun yerine fetch apı yada axios gibi kütüphaneler kualnılır


  rest api'lar bir web servistir http protoklu üzerinde istekler atarız cevap gelir ve biz bunu kulanırız
*/


// const xhr = new XMLHttpRequest();
// console.log(xhr)



function prepareURL(url, id) {
    if (id === null) {
        return url;
    }
    return `${url}?postId=${id} `
}

function getComments(url, id) {
    let newURL = prepareURL(url, id)
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText)); // burda string değil Json formatında olsun diye json.parse kulandım 
        }
    })
    xhr.open("GET", newURL)
    xhr.send();
}


function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
        }
    })
    xhr.open("GET", url);
    xhr.send();

}

getData("https://jsonplaceholder.typicode.com/posts",)




// getComments("https://jsonplaceholder.typicode.com/comments", null)