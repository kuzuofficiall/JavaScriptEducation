/**
 *  Tüm elemanları seçmek
 */

const form = document.querySelector("#todoAddForm"); // Formu seçer
const addInput = document.querySelector("#todoName"); // Input alanını seçer
const todolist = document.querySelector(".list-group"); // Todo listesini seçer
const firstCardBody = document.querySelectorAll(".card-body")[0]; // İlk kart gövdesini seçer
const secondCardBody = document.querySelectorAll(".card-body")[1]; // İkinci kart gövdesini seçer
const clearButton = document.querySelector("#clearButton"); // Temizleme düğmesini seçer
const filterInput = document.querySelector("#todoSearch"); // Arama inputunu seçer

let todos = [];

runEvents(); // Olay dinleyicilerini başlatır

function runEvents() {
    form.addEventListener("submit", addTodo); // Form gönderildiğinde "addTodo" fonksiyonunu çalıştırır
    document.addEventListener("DOMContentLoaded", pageload);
    secondCardBody.addEventListener("click", removeTodoUI);
    clearButton.addEventListener("click", allTodoEverywhere);
    filterInput.addEventListener("keyup", filter); // 'keyup' olayını dinler
}

function pageload() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoUI(todo);
    });
}
function filter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".list-group-item");
    if (todoListesi.length > 0) {
        todoListesi.forEach(function (todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display :block");
            } else {
                todo.setAttribute("style", "display :none !important");
            }
        })
    } else {
        showAlert("warning", "filitreme yapmak için en az bir todo olmalıdır")
    }

}
function allTodoEverywhere() {
    const todolistesi = document.querySelectorAll(".list-group-item");
    if (todolistesi.length > 0) {
        todolistesi.forEach(function (todo) {
            todo.remove();
        });
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Başarıyla localStorage'dan silindi");
    } else {
        showAlert("warning", "Silmek için en az bir todo olmalıdır");
    }
}



function removeTodoUI(e) {
    if (e.target.classList.contains("fa-remove")) { // className yerine classList.contains kullanılabilir
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoStroge(todo.textContent.trim());
        showAlert("success", "Başarıyla silindi");
    }
}

function removeTodoStroge(removeTodo) {
    checkTodosFromStorage();
    todos = todos.filter(todo => todo !== removeTodo); // Filter kullanarak todos'u güncelleriz
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
    console.log("submit eventi çalıştı"); // Submit olayının gerçekleştiğini konsola yazar
    const inputText = addInput.value.trim(); // Input alanındaki metni alır ve başındaki/sonundaki boşlukları temizler

    if (inputText === "") { // Eğer input boşsa uyarı verir
        alert("Lütfen bir değer giriniz.");
    } else {
        addTodoUI(inputText); // Boş değilse, metni arayüze ekler
        addTodoToStorage(inputText); // Değeri storage'a ekler
        showAlert("success", "Todo eklendi"); // Başarılı mesajı göster
    }

    e.preventDefault(); // Formun varsayılan davranışını engeller (sayfa yenilenmez)
}

function addTodoUI(newTodo) {
    const li = document.createElement("li"); // Yeni bir "li" (liste elemanı) oluşturur
    li.className = "list-group-item d-flex justify-content-between"; // "li" elemanına CSS sınıfları ekler
    li.textContent = newTodo; // "li" elemanına metni ekler

    const a = document.createElement("a"); // Yeni bir "a" (bağlantı) elemanı oluşturur
    a.href = "#"; // Bağlantıya geçici bir "#" değeri verir
    a.className = "delete-item"; // Bağlantıya "delete-item" sınıfını ekler

    const i = document.createElement("i"); // Yeni bir "i" (ikon) elemanı oluşturur
    i.className = "fa fa-remove"; // İkona "fa-remove" sınıfını ekler

    a.appendChild(i); // İkonu bağlantının içine ekler
    li.appendChild(a); // Bağlantıyı (ve ikonu) liste elemanına ekler
    todolist.appendChild(li); // Liste elemanını todo listesine ekler

    addInput.value = ""; // Input alanını temizler
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage(); // localStorage'dan todo listesini kontrol eder
    todos.push(newTodo); // Yeni todo'yu listeye ekler
    localStorage.setItem("todos", JSON.stringify(todos)); // localStorage'a todos listesini kaydeder
}

function checkTodosFromStorage() {
    let storedTodos = localStorage.getItem("todos"); // localStorage'dan todo listesini alır
    todos = storedTodos ? JSON.parse(storedTodos) : []; // localStorage'dan gelen veriyi parse ederek todos'a atar veya boş dizi oluşturur
}

function showAlert(type, message) {
    const div = document.createElement("div"); // Yeni bir "div" elemanı oluşturur
    div.className = `alert alert-${type}`; // "div" elemanına alert class'ı ve tipini ekler
    div.textContent = message; // Mesajı "div" içine ekler
    firstCardBody.appendChild(div); // "div" elemanını ilk kart gövdesine ekler

    setTimeout(function () {
        div.remove(); // 1 saniye sonra "div" elemanını kaldırır
    }, 1000);
}
