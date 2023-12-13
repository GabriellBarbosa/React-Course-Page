const example1 = 
`function payment(data) {
    // implementation...
    return processedData;
}

const result = payment(data);`;

const example1Resolved = 
`function processPayment(data) {
    // implementation...
    return processedData;
}

const result = processPayment(data);`;

const example2 = 
`class CalculateIncomeTax {
    // implementation...
}`;

const example2Resolved = 
`class IncomeTaxCalculator {
    // implementation...
}`;

const example3 = 
`customer.getData();
order.retrieveData();
payment.fetchData();`;

const example3Resolved = 
`customer.getData();
order.getData();
payment.getData();`;

const example4 = 
`const d = 90; // tempo decorrido em dias`;

const example4Resolved = 
`const elapsedTimeInDays = 90;`;

const example5 = 
`class Customer implements ICustomer {
    // implementation...
}`;

const example5Resolved = 
`class CustomerImpl implements Customer {
    // implementation...
}`;

const example6 = 
`new ExportVisitor();
new CustomerFactory();
new SpellCheckerDelagate();`;


const example7 = 
`new Order();
new Customer();
new Checkout();`;

export {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example3Resolved,
    example4,
    example4Resolved,
    example5,
    example5Resolved,
    example6,
    example7,
}
