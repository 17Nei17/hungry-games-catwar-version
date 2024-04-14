let friendlyActionArr = [];
function friendlyAction(number = 0, name1 = '', name2 = '') {
    friendlyActionArr = [
        `Обнявшись, ${name1} и ${name2} поют песни`,
        `${name1} и ${name2} спят вместе около костра`,
        `${name1} словил рыбу и поделился ей с ${name2}`,
        `${name1} взахлёб рассказывает историю ${name2}`,
        `${name1} сидит рядышком с ${name2}`,
        `${name1} отдал в долг ${name2} 1000 рублей`,
        `${name1} играет в прятки с ${name2}`,
        `${name1} напевает песню ${name2}`,
        `${name1}, озираясь, шепчет что-то на ушко ${name2}`,
        `${name1} встретился взглядом с ${name2} и отвёл глаза`,
        `${name1} легонько кусает ${name2}`,
        `${name1} рассказывает ${name2} о назначении разных трав`,
        `${name1} гладит ${name2} по голове`,
    ]
    return friendlyActionArr[number];
}

friendlyAction();

friendlyAction.caseLength = friendlyActionArr.length;

export default friendlyAction;

