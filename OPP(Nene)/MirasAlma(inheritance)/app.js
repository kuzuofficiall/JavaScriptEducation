/*
 ! inheritance (miras alma)  nedir 
 bir nesnenin veya sınıfın özelliklerinin ve metotlarının başka bir nesne veya sınıf tarafından kullanılabilmesini sağlar. ES6 ile birlikte, class ve extends anahtar kelimeleri kullanılarak miras alma yapılabilir.
 bir sınıfı miras aldığımızda özeliklerini ve metotoalrınıda almiş olursunuz

 
 class Person {
    FirstName = "enes"
    write() {
        console.log("Person Write :", this.FirstName)
    }
}
// const personNesne = new Person();
// personNesne.write();

class Student extends Person { // student sınıfı Persondan miras alır  person veren student alan konumda 
write() {
    console.log("student write ", this.FirstName)
    super.write();
}
}
const student1 = new Student();
student1.write();

*/




/*
            This and super and super()  NEDİR?
 her sınıf kendisini Object sınıfından kalıtıyor (miras alıyor)

*/
// console.log(this); // burda window objesini gösterir 

// class Person {
//     firstname = "abdullah"
//     write() {
//         console.log(this.firstname);

//     }
// }

// // const person = new Person("abdullah")
// // person.write();

// class Student extends Person {
//     write() {
//         super.write(); // üst sınıfdaki metot getir demek  miras almış olduğum sınıfı gösterir 
//     }
// }
// const studentNesne = new Student();
// studentNesne.write();



class Person {
    constructor(isim, soyisim, yas, maas) { // yapıcı metot 
        this.isim = isim; // değer atamsı yaptım parametre olarak gelen isime atadım
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }
    writeİnfo() {
        console.log(this.isim, this.soyisim, this.maas, this.yas)
    }

}


class Student extends Person {
    constructor(isim, soyisim, yas, maas) {
        super(isim, soyisim, yas, maas)
    }
    writeİnfo() {
        super.writeİnfo();
    }

}
const studentNesne = new Student("abdulah", "kuzu", 23, 2345);
studentNesne.writeİnfo();
