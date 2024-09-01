/**
 * floor --->bir sayıdan sonra gelen virgülden sonraki basamakları atarak sayıyı aşağıya yuvarlamak için kullanılır. Bu metot, özellikle tam sayı değeri elde etmek istediğinizde işe yarar.
 * Ceil --->bir sayıyı yukarıya doğru en yakın tam sayıya yuvarlamak için kullanılır. Bu, sayının ondalık kısmı ne olursa olsun bir sonraki en büyük tam sayıya yuvarlandığı anlamına gelir.
 * Round --->bir sayıyı en yakın tam sayıya yuvarlamak için kullanılır. Bu metod, sayının ondalık kısmına göre aşağıya veya yukarıya yuvarlama yapar.
 * 
 * Max ---->  bir dizi sayıdan en büyük  sayıyı bulmak için kulanılır
 * Min--->  bir dizi sayıdan en küçük  sayıyı bulmak için kulanılır
 * Random -->, 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalıklı sayı üretir. Bu, çeşitli uygulamalarda rastgelelik sağlamak için kullanılır, 
 * Abs --->metodu, bir sayının mutlak değerini döndürür. Mutlak değer, sayının işaretine bakılmaksızın büyüklüğünü ifade eder. Yani negatif bir sayının mutlak değeri pozitif bir sayı olur, pozitif bir sayının mutlak değeri ise kendisi olur.
 * Sqrt ---> bir sayının karekökünü hesaplamak için kullanılır.
 * Pow --->bir sayının üssünü hesaplamak için kullanılır. Bu, bir sayının kendisiyle belirli bir sayıda çarpılmasını ifade eder.
 *  PI sayısı --->JavaScript'te π (pi) sayısını temsil eden sabit Math.PI ile erişilebilir. Pi, bir çemberin çevresinin çapına oranı olarak tanımlanan matematiksel bir sabittir ve yaklaşık olarak 3.14159 değerindedir.
 */

let a = 3.45;
let b = -12;
console.log(Math.floor(a));
console.log(Math.ceil(a)); // 3.15 bile olsa 4 yuvarlar 
console.log(Math.round(a));
console.log(Math.max(3, 7, 1, 9, 5));
console.log(Math.min(-1, -5, -3));
console.log(Math.min(10, 20, 30));
console.log(Math.abs(b))
console.log(Math.sqrt(169));

console.log(Math.pow(2, 3)); // üste gelecek sayı ikinci sırada yazılır yani 3 değeri burda üste gelir
console.log(Math.pow(5, 2));
console.log(Math.PI);
console.log(Math.PI * 2);

console.log(Math.floor(Math.random() * 100));  