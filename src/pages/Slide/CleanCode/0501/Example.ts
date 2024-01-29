const example1 = 
`class OrderProcessor {
    processToXml(cartItems) {...}
    process(cartItems) {...}
    _calculateTaxPerKilogram(cartItems) {...}
    _calculateTotalPrice(order) {...}
    _getDiscount(basePrice) {...}
    _calculateDiscount(basePrice) {...}
    _calculateBasePrice(cartItems) {...}
    _getTotalKilograms(cartItems) {...}
}`;

const example1Resolved = 
`class BasePriceCalculator {
    calculate(cartItems) {...}
}

class DiscountCalculator {
    calculate(basePrice) {...}
}

class FreightCalculator {
    calculate(cartItems) {...}
}

class TotalPriceCalculator {
    calculate(order) {...}
}

class OrderFormatter {
    formatToXml(order) {...}
}`;

export {
    example1,
    example1Resolved
}