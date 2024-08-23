/*
                 ?else if yapısı

if (koşul){
    kodlar 

}else if (koşul){
  kodlar

}else if(koşul){
kodlar

}else{
kodlar 

};

birden fazla ihtimalin olduğu yerde kulanılır 
!ama bir kişi çalişir asla birde fazla çalişmaz
hiçbiri çalişmazsa else çalişir 

*/

/*
    
1.yol  2.yol   3.yol   olsun her seçtiği yolda ihtimal olsun 
*/

let seçilenYol = prompt("lütfen gitmek istediğiniz yolu seçiniz")

if (seçilenYol == 1) {
    alert("seçtiğiniz yol" + seçilenYol + "inci yoldur ")
} else if (seçilenYol == 2) {
    alert("seçtinğiniz yol " + seçilenYol + " inci yoldur ")

} else if (seçilenYol == 3) {
    alert("seçilen yol " + seçilenYol + " üncü yoldur ")
} else {
    alert("gitiğin yol yol değil dobarla kendine gel ")
}