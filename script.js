//Задание 1: Создание и работа с объектами

let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};
console.log("Имя:" + user.name, "\nВозраст:" + user.age, "\nEmail:" + user.email);

//Задание 2: Обновление свойств объекта

let user = {
name: "John Doe",
age: 25,
email: "john.doe@example.com",
};
user.age = 30;
user.isAdmin = true;
console.log(user);

//Задание 3: Удаление свойства из объекта

let user = {
name: "John Doe",
age: 30,
email: "john.doe@example.com",
isAdmin: true,
};
delete user.email;
console.log(user);

//Задание 4: Преобразование объекта

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
    };
    function transformUser(user) {
            return {name: user.name.toUpperCase(),
             email: user.email} 
    }
    let transformedUser = transformUser(user);
    console.log(transformedUser);

//Задание 5: Копирование объектов

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
    };
let userCopy = { ...user };
userCopy.name = "Jane Doe";
    
    console.log(user); 
    console.log(userCopy); 

//Задание 6: Преобразование объекта по условию

function filterProperties(obj, keys) {
    let obj_new = Object.fromEntries(
        Object.entries(user).filter(([key]) => keys.includes(key))
    );
return obj_new; 
}
let keys = ["name", "email"]
let user = {
name: "John Doe",
age: 30,
email: "john.doe@example.com",
isAdmin: true,
};
let filteredUser = filterProperties(user, ["name", "email"]);
console.log(filteredUser); 

//Задание 7: Изменение структуры данных объекта

function convertUser(user) {

    let profile = {name: user.name, age: user.age, 
    }
    let transformUser = {profile: profile, 
        email: user.email, isAdmin: user.isAdmin}
return transformUser; 
}
let user = {
name: "John Doe",
age: 30,
email: "john.doe@example.com",
isAdmin: true,
};
let convertedUser = convertUser(user);
console.log(convertedUser);

//Задание 8: Объединение объектов

let user = {
name: "John Doe",
email: "john.doe@example.com",
};
let details = {
age: 30,
isAdmin: true,
};
let mergedUser = Object.assign(user, details);
console.log(mergedUser);

//Задание 9: Динамическое создание свойств

let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {[key1]:"Laptop", [key2]:1500, [key3]:"Electronics"}; // Создайте объект и добавьте свойства динамически
console.log(product);
