let form = document.querySelector('form')

form.addEventListener('submit', calcul);


function calcul(event) {
    event.preventDefault(); // retirer son comportement par default
    let nb1 = event.target.nb1.value;
    let operator = event.target.operator.value;
    let nb2 = event.target.nb2.value;

    // console.log(nb1 + operator + nb2); // concaténation 

    // console.log(typeof parseFloat (nb1));
    // console.log(typeof operator);
    // console.log(typeof parseFloat (nb2));

    switch (operator) {

        case '+':
            result = parseFloat (nb1) + parseFloat(nb2)
            break;
        case '-':
            result = parseFloat (nb1) - parseFloat(nb2)
            break;
        case '*':
            result = parseFloat (nb1) * parseFloat(nb2)
            break;
        case '/':
            result = parseFloat (nb1) / parseFloat(nb2)
            break;
    }

    console.log(nb1 + operator + nb2 + '=' + result);
    // console.log(nb1 + operator + nb2 + '=' + result + eval(parseFloat=nb1));

}