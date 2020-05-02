function getInputFloatValue (typedNumber) {
    const input = document.getElementById(typedNumber);
    if (!input) {
        return 0.0;
    }
    return parseFloat (input.value);
}

function futureValue (principal, monthly, annualInterest, annualInflation, years, compoundsPerYear = 12) {
    const numberOfCompounds = compoundsPerYear * years; 
    const interestPerCompound = ((annualInterest - annualInflation) / 100.0) / compoundsPerYear;  
    const interestPerCompound100 = 1 + interestPerCompound;
    const totalInterest = Math.pow(interestPerCompound100, numberOfCompounds);
    const compoundPrincipal = principal * totalInterest;
    const compoundContributions = monthly * ((totalInterest - 1) / interestPerCompound);
    const result = compoundPrincipal + compoundContributions;
    return result;
}
function calculatePension (){
    var initialAmount = getInputFloatValue ("intitalAmount");
    var monthAmount = getInputFloatValue ("monthAmount");
    var interestRate = getInputFloatValue ("interresstRate");
    var inflationRate = getInputFloatValue ("inflationRate");
    var numberOfYears = getInputFloatValue ("yearsToPension");
    var pension = futureValue (initialAmount, monthAmount, interestRate, inflationRate, numberOfYears);
    showResult(Math.round(pension));
}

function showResult(output) {
    const result = document.getElementById("result");
    result.innerText = output;
}