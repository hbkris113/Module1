///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/ 

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let totalAcres = 0;
('let i = 0; i < fujiAcres.length; i++') {totalAcres =+ fujiAcres[i] + galaAcres[i] + pinkAcres [i];} 

console.log('Total number of acres picked for the entire week: ${totalAcres}');
// CODE HERE





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
const daysInWeek = 7 
const averageDailyAcres = totalAcres/daysInWeek; 
averageDailyAcres = totalAcres / 7;
console.log('Average acres picked per day: $ {averageDailyAcres}')
// CODE HERE





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

acresLeft = 174;
days = 0;
const dailyAverage = 7;

while (acresLeft > 0) {acresLeft -= dailyAverage; days++; 
console.log('Day ${days}: ${acresLeft} acres left');}

console.log('It took ${days} days to pick all the acres');

// CODE HERE



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
const acresPerVariety = 6.5
const fujiTotalPicked = fujiApplesPicked.map(apples => apples * acresPerVariety);
const galaTotalPicked = galaApplesPicked.map(apples => apples * acresPerVariety);
const pinkTotalPicked = pinkApplesPicked.map(apples => apples * acresPerVariety);

console.log("Daily Fuji Apples Picked (in tons):", fujiTotalPicked) 
console.log("Daily Gala Apples Picked (in tons):", galaTotalPicked)
console.log("Daily Pink Apples Picked (in tons):", pinkTotalPicked) 
// CODE HERE

// let fujiTons =
// let galaTons =
// let pinkTons =






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons perSSsss
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
acresPerVariety = 6.5
fujiTotalTons = fujiApplesPicked.reduce((total, apples) => total + apples, 0) * acresPerVariety;
galaTotalTons = galaApplesPicked.reduce((total, apples) => total + apples, 0) * acresPerVariety;
pinkTotalTons = pinkApplesPicked.reduce((total, apples) => total + apples, 0) * acresPerVariety;

const poundsPerTon = 2000;
const fujiPounds = fujiTotalTons * poundsPerTon;
const galaPounds = galaTotalTons * poundsPerTon;
const pinkPounds = pinkTotalTons * poundsPerTon;

console.log("Total Fuji Apples Picked (in pounds): ",fujiPounds)
console.log("Total Gala Apples Picked (in pounds): ", galaPounds)
console.log("Total Pink Apples Picked (in pounds): ", pinkPounds)
// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
const fujiRevenue = fujiPounds * fujiPricePerPound;
const galaRevenue = galaPounds * galaPricePerPound;
const pinkRevenue = pinkPounds * pinkPricePerPound;

console.log("Revenue from Fuji Apples:", fujiRevenue);
console.log("Revenue from gala Apples:", galaRevenue);
console.log("Revenue from pink Apples:", pinkRevenue);
// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
const fujiCost = fujiPounds * fujiPricePerPound;
const galaCost = galaPounds * galaPricePerPound;
const pinkCost = pinkPounds * pinkPricePerPound;

fujiRevenue = fujiPounds * fujiPricePerPound;
galaRevenue = galaPounds * galaPricePerPound;
pinkRevenue = pinkPounds * pinkPricePerPound;

const totalPrice = (fujiRevenue + galaRevenue + pinkRevenue);

console.log("Total Profit:", totalProfit);
// CODE HERE
