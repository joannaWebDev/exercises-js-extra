/*
    Build a function that given the needed information calculates the monthly net Salary by:
    - Employees with age below or equal 30 pay the percentage of BELOW30_TAXES to the government
    - Employees with age above 30 pay the percentage of ABOVE30_TAXES to the government
    - Employees can choose to get 2 extra payments or not, if they choose 14 payments the gross salary will be divided by 14, otherwise by 12
    - Employees with a degree of disability, have a reduction of 3% in their goverment taxes
    Build an array with all the employees
    Use forEach to console.log the name and the netSalary of all employees

*/

const JUNIOR_GROSS_SALARY = 24000;
const SENIOR_GROSS_SALARY = 36000;
const BELOW30_TAXES = 14;
const ABOVE30_TAXES = 18;
const DISABILITY_TAXES_REDUCTION = 3;


const junior1 = {
    name: "Lukasz",
    grossSalary: JUNIOR_GROSS_SALARY,
    numberOfPayments: 14,
    age: 27,
    disabilityDegree: 0
};

const junior2 = {
    name: "Manuel",
    grossSalary: JUNIOR_GROSS_SALARY,
    numberOfPayments: 14,
    age: 36,
    disabilityDegree: 1
};

const senior1 = {
    name: "Gustavo",
    grossSalary: SENIOR_GROSS_SALARY,
    numberOfPayments: 12,
    age: 34,
    disabilityDegree: 3
};

// YOUR CODE HERE

/* EXPECTED RESULT
> The net salary of Lukasz is 1474.28€/month
> The net salary of Manuel is 1457,14€/month
> The net salary of Gustavo is 2550,00€/month
*/
