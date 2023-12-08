const example1 = 
`clients.map(i => {
    if (i.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {

        let sum = 0;
        i.enterprises.map((j) => {
            sum = sum + parseInt(j.realties);
        });

        array.push({
            _id: i._id,
            name: i.name,
            total_enterprises: \`\${i.enterprises.length}\`,
            total_realties: \`\${sum}\`
        });
    }
})`;

const example1Resolved = 
`clients.map(client => {
    if (client.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {

        let sum = 0;
        client.enterprises.map((j) => {
            sum = sum + parseInt(j.realties);
        });

        array.push({
            _id: client._id,
            name: client.name,
            total_enterprises: \`\${client.enterprises.length}\`,
            total_realties: \`\${sum}\`
        });
    }
})`;

const example2 = 
`client.enterprises.map((j) => {
    sum = sum + parseInt(j.realties);
})`;

const example2Resolved = 
`client.enterprises.map((enterprise) => {
    sum = sum + parseInt(enterprise.realties);
})`


const example3 = 
`let sum = 0;
client.enterprises.map((enterprise) => {
  sum = sum + parseInt(enterprise.realties);
})`;

const example3Resolved = 
`let sumOfRealties = 0;
client.enterprises.map((enterprise) => {
  sumOfRealties = sumOfRealties + parseInt(enterprise.realties);
})`


export {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example3Resolved,
}