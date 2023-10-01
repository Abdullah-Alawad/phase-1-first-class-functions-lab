// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//1
const returnFirstTwoDrivers = function(drivers){
    const newDriver = [];
    newDriver.push(drivers[0]);
    newDriver.push(drivers[1]);
    return newDriver;
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);
}

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(fare){
        return fare * x;
    }
}

function fareDoubler(x){
    return x * 2;
}

function fareTripler(x){
    return x * 3;
}

function selectDifferentDrivers(drivers, fun1){
    return fun1(drivers);
}