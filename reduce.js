const nums = [12, 25, 37, 29];
// nums.map(num => num*2);
// nums.filter(num => num > 20);
// nums.find(num => num > 23);

/// {} dile return likhe retur korte hbe///
//const total = nums.reduce((sum, num) => {
//     console.log(sum, num);
//     return sum + num
//      } 
//   , 0); 

const total = nums.reduce((sum, num) => sum + num , 0);
console.log(total);

const friends = [
    {name: 'Rashed', money: 12},
    {name: 'Kashed', money: 25},
    {name: 'Pashed', money: 37},
    {name: 'Nashed', money: 29},
    {name: 'Munia', money: 100}
];
const totalMoney = friends.reduce((sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money
} 
, 0);
console.log(totalMoney);