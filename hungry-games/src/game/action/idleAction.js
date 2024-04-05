function idleAction(number = 0, name1) {
    switch (number) {
        case 0:
            return `${name1} тупит и ничего не делает`
        case 1:
            return `${name1} бродит в окрестностяхт`
        case 2:
            return `${name1} собирает грибы`
        case 3:
            return `${name1} изучает местность`
        case 999:
            return `${name1} одиноко смотрит и не может найти себе пару`
        default:
    }
}

export default idleAction;