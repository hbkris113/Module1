///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue
}   
console.log(calcFinalPrice(100, 10, .06))
//CODE HERE



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
let customer = {
    Name:{
        firstName:'Kobe',
        lastName: 'Bryant',
    },
    contactInfo: {
        age: '24', 
        address: '1234 Agnes St', 
        phone: '888-867-5309',
        emailAddress: 'blackmamba24@example.com',
},
    paymentMethod: {
        creditCard: 'Visa, Mastercard, American Express',
        cardNumber: '1234 5678 9012 3456', 
        expirationDate: '12/24',
},
    DeliveryOrders: { 
        RecentItems: ['pizza', 'pasta', 'salad'],
        deliveryLocations: '1234 Agnes St, 251 N. Bristol Ave, 1428 Elm Street', 
        deliveryInstructions: 'Leave on porch',
},}
console.log(customer.Name.firstName)
//CODE HERE 


/*
    TEXT ANSWER HERE
The customer object will have the following properties: Name, contactInfo, paymentMethod, 
and DeliveryOrders. I chose these properties because it assist with remaining competitive with other 
food chains that may help customers feel a more inclusive experience if we stored their usual likes 
and wants while making service quickly accessible. Also, it would create a faster shopping experience for the customer. 
    
*/

/*
    Now, create a customer object following your own
    guidelines.
*/
//This is a customer object I created for a shoe store when choosing what shoes to buy.
//CODE HERE

let shopper = {
    name: "Michael Jordan",
    contactNumber: "(281) 330-8004",
    email: "MJ23@example.com",
    shoeDesign: {
        designName: "Air Jordan 1 Retro",
        size: 17.5
    },
    address: {
        street: "3315 Agnes St",
        city: "Houston",
        state: "TX",
        zipCode: "77079"
    },
    paymentMethod: {
        cardNumber: "4111111111111111",
        expiryDate: "9/25",
        cvv: "777"
    }
};
console.log(shopper.paymentMethod.cardNumber)