function friendlyAction(number = 0, name1, name2) {
    switch (number) {
        case 0:
            return `Обнявшись, ${name1} и ${name2} поют песни`
        case 1:
            return `${name1} и ${name2} спят вместе около костра`
        case 2:
            return `${name1} словил рыбу и поделился ей с ${name2}`
        default:
    }
}

friendlyAction.caseLength = 2;

export default friendlyAction;

