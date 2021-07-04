'use strict';

Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};

const packingPriceDaily = 5;
const timeInOneDay = 86400000;
const calculateParkingFee = (timeIn) => {
    if (!(timeIn instanceof Date)) {
        throw new Error('Invalid Date');
    }

    if (!timeIn.isValid()) {
        throw new Error('Invalid Date');
    }

    const startDate = new Date(timeIn);

    if (startDate.getTime() >= Date.now()) {
        throw new Error('Invalid Date');
    }

    let totalDays = (Date.now() - startDate.getTime()) / timeInOneDay;

    totalDays = Math.ceil(totalDays);

    console.log(`Total parking fee is: ${totalDays * packingPriceDaily}$`)

    return totalDays * packingPriceDaily;
}

// case: success
const start = new Date();
start.setDate(start.getDate() - 3);
calculateParkingFee(start);

