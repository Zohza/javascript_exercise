// let movie = {
//     title: "A man called God",
//     director: "Funke Akindele",
//     releaseYear: "2022",
//     rating: 5,

//     getSummary: function (title, director, releaseYear, rating) {
//         return `${this.title}, directed by ${this.director}, ratedd ${this.rating}`
//     }
// }
// console.log(movie.getSummary());
// movie.isWatched = true;
// console.log(movie)

//challenge
let movies = [
    {
        title: "superman",
        director: "John Bieber",
        releaseYear: "2023",
        rating: 4,
    },
    {
        title: "playful",
        director: "John Bieber",
        releaseYear: "2023",
        rating: 10,
    },
    {
        title: "xoxo kitty",
        director: "John Bieber",
        releaseYear: "2023",
        rating: 9,
    }
];
//displaying ratings greater than 8
let topRatedMovie =[]
for (let movie of movies){
    if (movie.rating>= 8){
        topRatedMovie.push(movie);
    }
}
console.log(topRatedMovie);





//2
let Total =[];
getTotal = (price,quantity) => {
    let total = price*quantity;
    Total.push(total);
    return total;
}
getCartTotal = ()=> (Total.reduce((a,b)=> a + b,0));
let cartItem= {
    name:"Bucket",
    price:500,
    quantity:5,
}


console.log(getTotal(cartItem.price,cartItem.quantity));
console.log(Total)
console.log(getCartTotal())

let cart=[ {
    name:"Bucket",
    price:500,
    quantity:2,
},
{
    name:"spoon",
    price:450,
    quantity:3,
},
{
    name:"sandal",
    price:5000,
    quantity:4,
}
]
for (let item of cart){
    let result = getTotal(item.price, item.quantity);
    console.log(`${item.name}: ₦${result}`);

}


console.log(getCartTotal());

//exercise 3==
let member={
    name:"Boluwatife",
    membershipType:"basic",
    borrowedBooks:["All you need","sweet 16","purple hibiscus","amanda"],

    borrowBook: function(books){
        this.borrowedBooks.push(books);
        return this.borrowedBooks;
}
};

getBorrowedCount= function(borrowedBooks){
    return borrowedBooks.length;

}
function getMembershipInfo(membershipType){
    if (membershipType === "basic"){
        return "You have access to 3 Books a month, upgrade to premiun for unlimited access";
    }else if (membershipType === "basic"){
        return "Enjoy unlimited access to the library, would you like us to recommend books of your interest"
}}
console.log(getBorrowedCount(member.borrowedBooks));
console.log(borrowBook("yellow Heaven"));
console.log(getMembershipInfo(member.membershipType))