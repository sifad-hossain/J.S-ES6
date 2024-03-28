//data access 
//const data = [{ id: 1, name: 'babul', address: 'pat kheet'}
//console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Dell laptop', price: 65000},
        { id: 2, name: 'mackbook', price: 184934},
    ]
}

console.log(products.data[1].price);

const users = {
    id: 5001,
    name: 'lamiyasifat',
    address: {
        street: {
            first: '45/1 kaligonj road',
            second: 'same',
            third: 'no dorai',
        },
    },
    city: 'Dhaka'
}

console.log(users.address.street?.first);

const user2 = {
    id: 5002,
    name: 'shosur bari',
    address: {
        city: 'borishal',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.first);
