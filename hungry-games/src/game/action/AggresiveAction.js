let AggresiveActionArr = [];

function AggresiveAction(number = 0, name1 = '', name2 = '') {
    AggresiveActionArr = [
        `${name1} нападает на ${name2} и убивает его`,
        `${name1} подложил ${name2} дичь со смертельной отравой`,
        `${name1} хладнокровно убивает ${name2}`,
        `${name1} нанёс ${name2} травмы, несовместимое с жизнью`,
        `${name1} умышленно толкнул ${name2}, из-за чего тот упал с дерева и погиб от кровотечений`,
        `${name1} заманивает ${name2} на высокую скалу и сталкивает его вниз`,
    ]
    return AggresiveActionArr[number];
}

AggresiveAction();

AggresiveAction.caseLength = AggresiveActionArr.length;

export default AggresiveAction;