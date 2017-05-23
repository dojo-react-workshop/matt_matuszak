const orderSupplies = (item) => {
    // The orderSupplies function first finds the item you requested
    const warehouse = [{
            item: 'paint',
            action() {
                return 'start mixing!'
            }
        },
        {
            item: 'brush',
            action() {
                return 'start painting!'
            }
        }
    ];

    const deliveryTime = Math.random() * 3000 + 1000;


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const foundItem = warehouse.find((obj) => obj.item === item);

            if (foundItem) {
                resolve(foundItem);
            }

        }, deliveryTime);
    })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

const paintPrommise = orderSupplies('paint');
const brushPromise = orderSupplies('brush');

Promise.all([paintPrommise, brushPromise]).then((values) => {
    console.log(JSON.stringify(values));
});


// chain method
// paintPrommise
//     .then(function(paintItem) {
//         printItem(paintItem);
//         return brushPromise;
//     })
//     .then(function(brushItem) {
//         printItem(brushItem);
//     });
