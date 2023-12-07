const example1 = 
`clients.map(i => {
    if (i.name.toUpperCase().indexOf(name.toUpperCase()) > -1)...`;

const example1Resolved = 
`clients.map(client => {
    if (client.name.toUpperCase().indexOf(name.toUpperCase()) > -1)...`;


export {
    example1,
    example1Resolved,
}