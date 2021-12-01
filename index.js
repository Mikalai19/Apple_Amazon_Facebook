
const { Accessory, Order, Job } = require('./models');

// ////////////////////  ACCESSORY  ////////////////////////


Accessory.create({
    description: 'Iphone case',
    price: 70,
    color: 'silver',
    caseSize: 78,
    bandSize: 'Standard',
    productInfo: 'ACase for Iphone11',
    compatibility: 80,
    recomended: 'Iphone11',
    storePickup: 'Apple Tower Theatre',
    delivery: "No"
})
    .then(function (createAccessory) {
        console.log('accessory details', createAccessory.toJSON())
    })
    .catch(function (err) {
        console.log(err)
    });


// [findAll()]
Accessory.findAll({ where: { storePickup: 'Apple Tower Theatre' } })
    .then(function (accessoryArray) {
        console.log('ACCESSORY ARRAY');
        console.log(accessoryArray);
    })
    .catch(function (err) {
        console.log(err);
    });


//[findOne()]
Accessory.findOne({ where: { description: 'Iphone case' } })
    .then(function (accessory) {
        console.log(accessory.toJSON())
    })
    .catch(function (err) {
        console.log(err)
    });


//[findByPk()]
Job.findByPk(1)
    .then(function (accessoryname) {
        console.log(accessoryname.toJSON());
    })
    .catch(function (err) {
        console.log(err)
    });

//[update()]
Accessory.update({
    color: 'Blue',
    delivery: 'Yes',
    bandSize: 'XXL',
}, {
    where: { id: 7 }
})
    .then(function (updateAccessory) {
        console.log('rows updated');
        console.log(updateAccessory)
    })
    .catch(function (err) {
        console.log(err)
    })

//[destroy()]
Order.destroy({
    where: { description: 'Iphone case' }

})
    .then(function (response) {
        console.log('Deleted data');
        console.log(response);
    })
    .catch(function (err) {
        console.log(err)
    });



// // ////////////////////  ORDER  ////////////////////////

// Order.create({
//     orderPlaced: 'October 24th',
//     totalPrice: 50,
//     shipTo: '11 10th Ave Seattle WA 98106',
//     orderNumber: 5555555,
//     description: 'Tires',
//     returnDue: 'December 25th',
//     deliveryDate: 'October 26th',
//     totalOrders: 2,
//     trackingId: 59999,
//     rateItem: 5
// })
//     .then(function (createOrder) {
//         console.log('order detail', createOrder.toJSON())
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


// // [findAll()]
// Order.findAll({ where: { deliveryDate: 'December 25th' } })
//     .then(function (orderArray) {
//         console.log('ORDER ARRAY');
//         console.log(orderArray.toJSON());
//     })
//     .catch(function (err) {
//         console.log(err);
//     });



// //[findOne()]
// Order.findOne({ where: { orderNumber: 5555555 } })
//     .then(function (orders) {
//         console.log(orders.toJSON())
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

// //[findByPk()]
// Job.findByPk(1)
//     .then(function (ordermade) {
//         console.log(ordermade.toJSON());
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


// //[update()]
// Order.update({
//     orderNumber: 44444,
//     totalPrice: 70,
//     deliveryDate: 'October 27th',
// }, {
//     where: { id: 5 }
// })
//     .then(function (updateOrder) {
//         console.log('row is updated');
//         console.log(updateOrder)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })


// Order.destroy({
//     where: { orderNumber: 5555555 }

// })
//     .then(function (response) {
//         console.log('Deleted data');
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });





//////////////////  JOB  ////////////////////////

// Job.create({
//     jobTitle: 'Software Engineer',
//     postedBy: 'Kim Larsen',
//     jobDetails: 'full-time',
//     postedDate: 10102021,
//     referenceOption: 'Message',
//     workLocation: 'Seattle',
//     remoteRole: 'No',
//     salary: 1200000,
//     benefits: 'Medical insurance',
//     scedule: 'Night shift'
// })
//     .then(function (createJob) {
//         console.log('job detail', createJob.toJSON())
//     })
//     .catch(function (err) {
//         console.log(err)
//     });



// // [findAll()]
// Job.findAll({ where: { workLocation: 'Seattle' } })
//     .then(function (jobArray) {
//         console.log('JOB ARRAY');
//         console.log(jobArray.toJSON());
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


//[findOne()]
// Job.findOne({ where: { postedBy: 'Kim Larsen' } })
//     .then(function (jobs) {
//         console.log(jobs.toJSON());
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


// //[findByPk()]
// Job.findByPk(1)
//     .then(function (jobapply) {
//         console.log(jobapply.toJSON());
//     })
//     .catch(function (err) {
//         console.log(err)
//     });


//[update()]
// Job.update({
//     jobTitle: 'Product Manager',
//     postedBy: 'Jack Cool',
//     jobDetails: 'part-time',
//     remoteRole: 'Yes',
//     salary: 1100000,
// }, {

// })
//     .then(function (updateJob) {
//         console.log('rows updated');
//         console.log(updateJob)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })


// //[destroy()]
// Job.destroy({
//     where: { postedBy: 'Kim Larsen' }

// })
//     .then(function (response) {
//         console.log('Deleted data');
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

// Job.bulkCreate({ jobTitle: ['PM', 'Marketing', 'Sales'] })  // not working
//     .then(function (createMore) {
//         console.log('bul create', createMore);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
