function fillMap(map, letters, value) {
    for (const letter of letters) {
        map[letter] = value;
    }
}

let letterMap = {};
fillMap(letterMap, ['а', 'ф'], -3);
fillMap(letterMap, ['к', 'м', 'н', 'п', 'у', 'ю'], -2);
fillMap(letterMap, ['г', 'е', 'и', 'л'], -1);
fillMap(letterMap, ['б', 'р', 'ь', 'щ', 'я'], 0);
fillMap(letterMap, ['д', 'ц', 'ш', 'э'], 1);
fillMap(letterMap, ['т', 'х', 'ъ', 'ы', 'й'], 2);
fillMap(letterMap, ['ё', 'ж', 'з'], 3);
fillMap(letterMap, ['в', 'ч'], 4);
fillMap(letterMap, ['с'], 5);
fillMap(letterMap, ['о'], 6);

window.onload = function () {

    let input = document.getElementById('word-input');
    let output = document.getElementById('output');
    document.getElementById('submit-button').onclick = function() {
        output.innerText = '';
        let letters = input.value.toLowerCase().split('');
        let values = [];
        let total = 0;
        let result = '';
        for (const letter of letters) {
            let value = letterMap[letter] || 0;
            values.push(value);
            total += value;
            result += (value + ' ');
        }
        result += '\n ';
        result += letters.join('  ');
        output.innerText = result;
    }
}