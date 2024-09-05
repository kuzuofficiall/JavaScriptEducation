/*
  CALLBACK NEDİR ?

 timing -event - http istekleri
 callback - promise - async

 Callback ---> bir fonkisyonu başka bir fonkisyona parametre olarak verip kullanmaya denir. Bu şekilde kullanılarak senkron bir şekilde çalışmasını sağlayabiliriz.
*/


function getName(callback) {
    // servisten ismimi getirdi
    setTimeout(() => {
        let name = "abdullah";
        callback(name);// bunu burda kulanmazsan aşağdaki fonsiyonu yazdırmaz
    }, 1000)
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "kuzu";
        // console.log(name, surname)
        callback(surname)
    }, 500);
}

function getage(name, surname, callback) {
    setTimeout(() => {
        let age = 23;
        callback(age)
    }, 300);
}

// getName(getSurname);
getName((name) => { // böylede ekrana yazdırır ve callback hell olayı ortaya çıkar
    getSurname(name, (surname) => {
        getage(name, surname, (age) => {
            console.log(name, surname, age)
        })
    })
})


// getName()
// getSurname();
