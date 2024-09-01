/**
 * normalde fonksiyon böyle tanımlanır 
 * function yazdir(){
      console.log("abdullah")
    }

    ama ARROW FUNCTİON 
   
    const yazdir=()=>{
        console.log("abdullah")
        }
 
        ikiside ayni çalişir ama arrow function tek satırda da  yazabilirsin kodu kısaltırsın
        
        
        const yazdir = (firstname, lastname) => {
            console.log("merhaba", firstname, lastname)
        }
        yazdir("abdullah", "kuzu");
        
        const kupAL = x => x * x * x;
        console.log("sonuç", kupAL(3));
        */

/*
Destructing kulanımı

*/
// let langs = ["C#", "C++", "JAVASCRİPT", "PYTHON"]
// let lang1, lang2, lang3, lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];
// [lang1, lang2, lang3, lang4] = langs
// console.log(lang1, lang2, lang3, lang4)

// const hesapla = (a, b) => {
//     const toplam = a + b;
//     const cıkar = a - b;
//     const carp = a * b;
//     const böl = a / b;

//     const dizi = [toplam, cıkar, carp, böl]
//     return dizi;
// }

// [a, b, c, d] = hesapla(10, 2);
// console.log(a, b, c, d);


const person = {
    firstname: "abdullah",
    lastname: "kuzu",
    slary: 3000,
    age: 32,

}

// let isim, soyisim, maas, yas;
// isim = person.firstname;
// soyisim = person.lastname;
// maas = person.slary
// yas = person.age;

let { firstname: isim, lastname: soyisim, slary: maas, age: yas } = person
// console.log(firstname, lastname, slary, age) // key değerleri aynı olduğu için oturdu 
console.log(isim, soyisim, maas, yas); // böyle yaparasan  değiken değitirmen laszım

/*
Spread operatörü
Spread operatörü (...), JavaScript'te temel veri yapıları olan diziler (arrays) ve nesneler (objects) üzerinde çalışmak için kullanılan güçlü bir özelliktir. 
Bir diziyi veya nesneyi yaymak, yani içindeki öğeleri tek tek çıkarmak ve başka bir yapıya eklemek için kullanılır.

 */
let numbers = [10, 20, 30, 40]

function abdullah(a, b, c, d) {
    console.log(a, b, c, d)
}


abdullah(numbers[0], numbers[1], numbers[2], numbers[3])
abdullah(...numbers);// spread oluyor

const diller = ["ingilizce", "almanca"];
// const diller2 = ["php", "java", diller[0], diller[1]]
const diller2 = ["php", "java", ...diller]
console.log(diller2);


// const numbers = [1,2,3,4,5,6,7,8,9]

// let [a,b, ...kalanSayilar] = numbers
// console.log(a,b,kalanSayilar)

const array1 = ["Enes", "Ali", "Veli", "Mehmet"];

// let array2 = []

// array2[0] = array1[0]
// array2[1] = array1[1]
// array2[2] = array1[2]
// array2[3] = array1[3]

// array2 = array1
// [array1[0],array1[1],array1[2],array1[3]]

const array2 = [...array1]

console.log(array2);
