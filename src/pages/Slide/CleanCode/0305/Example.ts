const example1 =
`function rentCar(aCustomer, preferences) {
    try {
        if (aCustomer.hasDebts()) {
            throw new Error('The customer has debts');
        } else {
            const availableCar = getAvailableCar(preferences);
            if (availableCar) {
                reserveVehicleForCustomer(availableCar, aCustomer);
            } else {
                throw new Error('There is no cars availble');
            }
        }
    } catch (err) {
        console.log(err.message);
    }
}`;

const example1Resolved = 
`function rentCar(aCustomer, preferences) {
    try {
        toRentCar(aCustomer, preferences);
    } catch (err) {
        console.log(err.message);
    }
}`;

const example2 =
`function deletePageAndAllReferences() {
    if (deletePage(page) == true) {
        if (registry.deleteReference(page.name) == true) {
            if (configKeys.deleteKey(page.name.makeKey()) == true) {
                console.log('página excluída');
            } else {
                console.log('configKey não foi excluída');
            }
        } else {
            console.log('deleteReference não foi excluído do registro')
        }
    } else {
        console.log('a exclusão falhou');
    }
}`;

const example2Resolved = 
`function deletePageAndAllReferences() {
    try {
        deletePage(page);
        registry.deleteReference(page.name);
        configKeys.deleteKey(page.name.makeKey());
    } catch (err) {
        console.log(err.message);
    }
}`;


export {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
}