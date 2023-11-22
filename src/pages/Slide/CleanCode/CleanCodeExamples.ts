const badCode =
`const list = [
    { right: 'A', chosen: 'B' },
    { right: 'D', chosen: 'D' },
    { right: 'B', chosen: 'B' },
    { right: 'C', chosen: 'A' },
    { right: 'C', chosen: 'C' }
];
  
function getTotal() {
    let total = 0;
    for (const item of list) {
        if (item.right == item.chosen) {
            total += 1;
        }
    }
    return (total * 100) / list.length;
}`;

const cleanCode = 
`const answerSheet = [
    { right: 'A', chosen: 'B' },
    { right: 'D', chosen: 'D' },
    { right: 'B', chosen: 'B' },
    { right: 'C', chosen: 'A' },
    { right: 'C', chosen: 'C' }
];
  
function getPercentageOfCorrectAnswers() {
    return (getTotalOfCorrectAnswers() * 100) / answerSheet.length;
}

function getTotalOfCorrectAnswers() {
    let result = 0;
    for (const answer of answerSheet) {
        if (answer.chosen == answer.right) {
            result += 1;
        }
    }
    return result;
}`

export { badCode, cleanCode };