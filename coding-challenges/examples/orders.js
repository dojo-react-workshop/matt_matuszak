const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;

  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime )
}

// orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));

const receipt = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
    // reject();
});

receipt
    .then(() => {
        console.log('this promise has resolved');
    })
    .catch(() => {
        console.log('this promise has rejected');
    });

console.log(receipt);




// semi cleaner working option
// const printSupplies = (delivery) => { console.log(`${delivery.item} delivered! Time to ${delivery.action()}`) }
// const queuedItemsInGarage = [];
// const workingItems = [];
//
// orderSupplies('paint', (delivery) => {
//     printSupplies(delivery);
//     workingItems.push(delivery);
//     if (queuedItemsInGarage.length > 0) {
//         printSupplies(queuedItemsInGarage.pop());
//     }
// });
//
// orderSupplies('brush', (delivery) => {
//     if (workingItems.length) {
//         printSupplies(delivery);
//     } else {
//         queuedItemsInGarage.push(delivery);
//     }
//
// });


// one implementation taht works
// let orders = {};
// let printSupplies = (delivery) => { console.log(`${delivery.item} delivered! Time to ${delivery.action()}`) }
//
// // let whenDelivered = (delivery) => {
//     orders[delivery.item] = delivery;
//
//     console.log(JSON.stringify(delivery));
//
//     if (delivery.item === 'paint') {
//         printSupplies(delivery);
//     }
//
//     if(Object.keys(orders).length === 2) {
//         // printSupplies(orders['paint']);
//         printSupplies(orders['brush']);
//     }
// }
//
// orderSupplies('paint', whenDelivered );
// orderSupplies('brush', whenDelivered );



//
// orderSupplies('paint', (delivery) => {
//     console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
//     orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// });

// setTimeout(() => orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)), 0);
// setTimeout(() => orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)), 1000);
