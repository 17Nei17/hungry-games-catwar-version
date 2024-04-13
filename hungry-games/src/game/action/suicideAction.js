function suicideAction(number = 0, name1) {
    switch (number) {
        case 0:
            return `${name1} умер от истощения`
        case 1:
            return `${name1} умер от кринжа`
        case 2:
            return `${name1} сьел ядовитую рыбу и умер`
        default:
    }
}

suicideAction.caseLength = 2;

export default suicideAction;