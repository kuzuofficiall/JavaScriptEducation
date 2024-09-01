/**
 *  for in ile indisleri döner sana 
 * for of ise değerleri 
 */

let names = ["ali", "veli", "mehe", "ali", "farih", "abdulbaki"];
// names.forEach(name => console.log(name));


// for in döngüsü
//değişken tanımalma in dizi ismi
// for (let name in names) {
//     console.log(name, names[name],); // names[name] ile içindeki değeri döndürürüz baştaki name ise indisleri döndürür

// }


// for of döngüsü

for (let isim of names) {
    console.log(isim, "name", names.indexOf(isim))

}
