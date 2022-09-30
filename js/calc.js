let a = prompt('калькулятор', 'введите число');
let math = prompt('калькулятор', 'введите + - * /');
let b = prompt('калькулятор', 'введите второе число');
let str = a+math+b;
alert(eval(str))

let firstVar = prompt('User name: ', 'введите имя');
let secondVar = prompt('User last name:', 'введите фамилию');
let userDataInfo = `<div>
                <h2>Имя: ${firstVar}</h2>
                <h2>Фамилия: ${secondVar}</h2>
            </div>`
document.write(userDataInfo);

let lang = prompt('input lang: uk or ru');
console.log(lang == 'uk' || lang == "Uk" || lang == 'uK');

