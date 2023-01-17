const carts = [
    { name : 'a' , total : 50 },
    { name : 'b' , total : 100 },
    { name : 'c' , total : 150 },
]

console.log(carts.reduce((n , { total }) => n + total , 0))