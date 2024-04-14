let suicideActionArr = [];
function suicideAction(number = 0, name1 = '') {
    suicideActionArr = [
        `${name1} умер от истощения`,
        `${name1} умер от кринжа`,
        `${name1} сьел ядовитую рыбу и умер`,
        `${name1} случайно подавился костью от рыбы и погиб от удушья`,
        `${name1} утонул в речке`,
        `${name1} неудачно упал с дерева, получив переломы, несовместимые с жизнью`,
        `${name1} съел не ту лечебную траву и только усугубил болезнь, что привело к летальному исходу`,
        `${name1} наступил на смертельно ядовитое растение`,
        `${name1} не заметил, как дичь во рту превратилась в падаль и съел её. Трапеза оказалась последней`,
        `${name1} понял, что он одинок и совершил самоубийство от горя`,
    ]
    return suicideActionArr[number];
}

suicideAction();

suicideAction.caseLength = suicideActionArr.length;

export default suicideAction;