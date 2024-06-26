const example1 =
`/* ... */
function deletePageAndAllReferences(page) {
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
}
/* ... */`;

const example1Resolved = `/* ... */
function deletePageAndAllReferences(page) {
    try {
        tryToDeletePageAndAllRefs(page);
    } catch(err) {
        console.log(err.message);
    }
}

function tryToDeletePageAndAllRefs(page) {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
    console.log('página excluída');
}
/* ... */`;

const example2 = `/* ... */
function applyMonthlyDiscount(order) {
    const coupon = getMonthlyDiscountCoupon();
    coupon.applyDiscount(order);
}

function getMonthlyDiscountCoupon() {
    if (monthlyDiscountAlreadyUsed()) 
        return null;
    return new DiscountCoupon();
}
/* ... */`;

const example2WithVerification = `/* ... */
function applyMonthlyDiscount(order) {
    const coupon = getMonthlyDiscountCoupon();
    if (coupon != null) {
        coupon.applyDiscount(order);
    }
}

function getMonthlyDiscountCoupon() {
    if (monthlyDiscountAlreadyUsed()) 
        return null;
    return new DiscountCoupon();
}
/* ... */`;

const example2WithException = `/* ... */
function applyMonthlyDiscount(order) {
    const coupon = getMonthlyDiscountCoupon();
    coupon.applyDiscount(order);
}

function getMonthlyDiscountCoupon() {
    if (monthlyDiscountAlreadyUsed()) 
        throw new Error('Monthly Coupon already used!');
    
    return new DiscountCoupon();
}
/* ... */`;

const example2Resolved = `/* ... */
function applyMonthlyDiscount(order) {
    const coupon = getMonthlyDiscountCoupon();
    coupon.applyDiscount(order);
}

function getMonthlyDiscountCoupon() {
    if (monthlyDiscountAlreadyUsed()) {
        return new MinimumDiscountCoupon();
    }
    return new DiscountCoupon();
}
/* ... */`;

const example3 = `/* ... */
function applyMonthlyDiscount(order) {
    const coupon = getMonthlyDiscountCoupon();
    if (coupon != null) {
        coupon.applyDiscount(order);
    } else {
        // Lógica para aplicar o cupom de desconto mínimo...
    }
}

function getMonthlyDiscountCoupon() {
    if (monthlyDiscountAlreadyUsed()) {
        return null;
    }
    return new DiscountCoupon();
}
/* ... */`

export {
    example1,
    example1Resolved,
    example2,
    example2WithVerification,
    example2WithException,
    example2Resolved,
    example3
}