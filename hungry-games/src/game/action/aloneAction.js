let aloneActionArr = [];
function aloneAction(number = 0, name1 = '') {
    aloneActionArr = [
        `${name1} грустно смотрит в небо, думая, что он не совсем адекватный`,
        `${name1} одиноко сидит у костра`,
        `${name1} съедает двойную порцию рыбки, не найдя с кем её разделить`,
    ]
    return aloneActionArr[number];
}

aloneAction();


aloneAction.caseLength = aloneActionArr.length;

export default aloneAction;