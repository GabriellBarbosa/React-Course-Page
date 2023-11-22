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
    for(const item of list) {
        if (item.right == item.chosen) {
            total += 1;
        }
    }
    return (total * 100) / list.length;
}`;

const list = [
    { right: 'A', chosen: 'B' },
    { right: 'D', chosen: 'D' },
    { right: 'B', chosen: 'B' },
    { right: 'C', chosen: 'A' },
    { right: 'C', chosen: 'C' }
];
  
function getTotal() {
    let total = 0;
    for(const item of list) {
        if (item.right == item.chosen) {
            total += 1;
        }
    }
    return (total * 100) / list.length;
}
  

export { badCode };