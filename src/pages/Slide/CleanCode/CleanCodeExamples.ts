const badCode =
`function getTotal() {
    let total = 0;
    for (const item of list) {
        if (item.right == item.chosen) {
            total += 1;
        }
    }
    return (total * 100) / list.length;
}`;

const cleanCode = 
`function getPercentageOfCorrectAnswers() {
    return (getTotalOfCorrectAnswers() * 100) / answerSheet.length;
}

function getTotalOfCorrectAnswers() {
    let result = 0;
    for (const answer of answerSheet) {
        if (answer.isCorrect()) {
            result += 1;
        }
    }
    return result;
}`

export { badCode, cleanCode };