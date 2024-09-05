/*
 * Senkron dediğimiz kavram şudur: Kodlar yukarıdan aşağıya doğru sırayla işlenir
 *  ve bir satırdaki işlem bitmeden diğer satıra geçilmez.
 *  Asenkron yapıda ise uzun zaman alan veya farklı görevdeki işlemler aynı anda gerçekleştirilir.
 * Peki Javascript Asenkron mu Yoksa Senkron mu Çalışır ?
 * Javascript single-thread ve asenkron yapıda çalışan bir programlama dilir.
 * elindeki işi tamamlamadan başka bir işe geçmeyen bir mekanizmaya sahiptir.
 * ne zanman asenkron çalışır ?
 * timing
 * event(olay)
 * Http isteklerinde 
 * web apı hepsi asenkron çalışır
 * 
 * ---------  CALLBACK -PROMİSE - ASYNC & AWAİT ------- > ile asenkron yapıları senkrona çevirip yönetiyoruz
 */

// console.log("1")
// console.log("2")
// console.log("enes")

// function selam() {
//     console.log("selamm")
// }
// selam();

//Asenkron 
// setTimeout(()=>{

// },timeout)

// console.log("enes")

// setTimeout(() => {
//     console.log("1000 milisaniye süresi doldu ve çalıştı")
// }, 1000)

// setTimeout(() => {
//     console.log("500 milisanye bekledi ve yazdı ")
// }, 500)

// setTimeout(() => {
//     console.log("750 milisaniye bekledi ve yazdı")
// }, 750);

// console.log("abdullah")

/*
Asenkron problemi

*/
// Http istekleri
const users = [
    {
        userId: 5,
        post: "enes post 1"
    },
    {
        userId: 5,
        post: "enes post 2"
    },
    {
        userId: 5,
        post: "enes post 3"
    },
    {
        userId: 6,
        post: "abdullah post 1"
    },
    {
        userId: 7,
        post: "abdullah post 2"
    },
    {
        userId: 8,
        post: "abdullah post 3"
    }
];

function getUserId(callback) {
    setTimeout(() => {
        // Servise gittim cevabı aldım
        let userId = 7; // userId'yi buradan aldığınızı varsayıyoruz
        callback(userId);
    }, 1000);
}

function getPostId(userId) {
    // Gerçek bir REST API'ye istek atılacakmış gibi simüle edelim
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 500);
}

getUserId(getPostId);



// let userId = getuserId(); // çalişmaz çünkü ikisi aynı anda çalıitığı için undifend verdi işte bu yüzden asenkron problemi olur
// getPostId(userId) 
