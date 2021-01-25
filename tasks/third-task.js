const employees = '[\n' +
    '  {"id":1,"name":"Mildred Carson","drinks":["Macchiato"]},\n' +
    '  {"id":2,"name":"Clifford Brown","drinks":["Latte"]},\n' +
    '  {"id":3,"name":"Kellie Fletcher","drinks":["Flat White","Espresso"]},\n' +
    '  {"id":4,"name":"Don Parsons","drinks":["Espresso"]},\n' +
    '  {"id":5,"name":"Renee Reynolds","drinks":["Cappuccino","Macchiato"]},\n' +
    '  {"id":6,"name":"Rudolph Bishop","drinks":["Latte","Macchiato","Flat White"]},\n' +
    '  {"id":7,"name":"Geraldine Carpenter","drinks":["Espresso"]},\n' +
    '  {"id":8,"name":"Hilda Jimenez","drinks":["Latte","Macchiato","Espresso"]},\n' +
    '  {"id":9,"name":"Pauline Roberson","drinks":["Espresso"]},\n' +
    '  {"id":10,"name":"Vanessa Barrett","drinks":["Flat White","Cappuccino","Latte"]}\n' +
    ']'

const recepies = '{\n' +
    '  "Cappuccino": {\n' +
    '    "coffee": 0.01,\n' +
    '    "water": 0.035,\n' +
    '    "milk": 0.09\n' +
    '  },\n' +
    '  "Espresso": {\n' +
    '    "coffee": 0.01,\n' +
    '    "water": 0.035\n' +
    '  },\n' +
    '  "Latte": {\n' +
    '    "coffee": 0.01,\n' +
    '    "water": 0.035,\n' +
    '    "milk": 0.135\n' +
    '  },\n' +
    '  "Flat White": {\n' +
    '    "coffee": 0.02,\n' +
    '    "water": 0.04,\n' +
    '    "milk": 0.11\n' +
    '  },\n' +
    '  "Macchiato": {\n' +
    '    "coffee": 0.01,\n' +
    '    "water": 0.035,\n' +
    '    "milk": 0.015\n' +
    '  }\n' +
    '}'

const prices = '{\n' +
    '  "coffee": 3.6,\n' +
    '  "water": 1,\n' +
    '  "milk": 1.5\n' +
    '}\n'

//parse json
let recepiesParsed = JSON.parse(recepies);
let pricesParsed = JSON.parse(prices);
let employeesParsed = JSON.parse(employees);

function thirdTask(M)
{
    let drinkCost = {}

    for (let key in recepiesParsed)
    {
        let cost = 0;

        for (let key2 in recepiesParsed[key])
            cost += recepiesParsed[key][key2] * pricesParsed[key2];

        drinkCost[key] = cost;
    }

    for (let key in employeesParsed)
    {
        let cost = 0;
        for(let key2 in employeesParsed[key].drinks)
        {
            let drinkName = employeesParsed[key].drinks[key2];

            cost += drinkCost[drinkName];
        }
        employeesParsed[key].prototype = {cost}
    }

    for (let i = 0; i < Object.keys(employeesParsed).length - 1; i++)
    {
        for (let j = 0; j < Object.keys(employeesParsed).length - 1; j++)
        {
            if(employeesParsed[j].prototype.cost > employeesParsed[j + 1].prototype.cost)
            {
                let swap = employeesParsed[j]
                employeesParsed[j] = employeesParsed[j + 1]
                employeesParsed[j + 1] = swap
            }
        }
    }

    let result = [];
    for (let key in employeesParsed)
    {
        M -= employeesParsed[key].prototype.cost;
        if(M >= 0)
        {
            result.push({
                id: employeesParsed[key].id,
                name: employeesParsed[key].name,
                drink: employeesParsed[key].drinks
            })
        }
    }

    return result;
}

module.exports = thirdTask;


