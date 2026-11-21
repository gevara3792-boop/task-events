/*
   1. Создайте функцию createButton()...
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr)...
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;

        // Добавляем обработчик наведения мыши
        li.addEventListener('mouseover', function () {
            this.title = this.textContent;
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink()...
*/
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let isFirstClick = true;

    a.addEventListener('click', function (e) {
        if (isFirstClick) {
            e.preventDefault();
            // Добавляем href к тексту
            a.textContent += ` ${a.href}`;
            isFirstClick = false;
        }
    });

    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList()...
*/
export function createList() {
    const ul = document.createElement('ul');
    const initialLi = document.createElement('li');
    initialLi.textContent = 'Пункт';
    ul.appendChild(initialLi);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    // Делегирование событий для li
    ul.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.textContent += '!';
        }
    });

    // Обработчик для добавления нового пункта
    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
