// https://github.com/TirthoSen76/Assignment

// 01. Kitometer to meter 
function kilometerToMeter(value) {
    return value * 1000;
}
console.log(kilometerToMeter(1.7));


// 02. budgetCalculator (watch = 50, phone = 100, laptop = 500)
function budgetCalculator(item1, item2, item3) {
    let totalBudget = ((item1 * 50) + (item2 * 100) + (item3 * 500));
    return totalBudget;
}
console.log(budgetCalculator(2,4,6));


// 03. hotelCost (1 - 10 => 100, 11 - 20 => 80, 21 - above => 50) 
function hotelCost(days) {
    if(days < 0) {
        var cost = `Invalid days. Please inter a valid days.`;
    }
    if(days <= 10) {
        var cost = days * 100;
    }
    else if(days <= 20) {
        var firstCost = 10 * 100;
        var remainDays = days - 10;
        var remainDaysCost = remainDays * 80;
        var cost = firstCost + remainDaysCost;
    }
    else if(days >= 21) {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remainDays = days - 20;
        var remainDaysCost = remainDays * 50;
        var cost = firstCost + secondCost + remainDaysCost; 
    }
    return cost;
}
console.log(hotelCost(34));


// 04. megaFriend find the largest name from an array. 
function megaFriend(names) {
    let length = names.length;
    let longestName;
    let lgth = 0;
    
    for(let i = 0; i < length; i++) {
        if(names[i].length > lgth) {
            lgth = names[i].length;
            longestName = names[i];
        }
    }
    return longestName;
}

const names = ['Amit', 'Sumit', 'Rohit', 'Sudipto', 'Aharnish'];
console.log(megaFriend(names));
