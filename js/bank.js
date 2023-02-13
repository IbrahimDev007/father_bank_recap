document.getElementById("btn-deposit").addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-Field").value;
    let deposit =parseFloat(depositAmount);

    if (isNaN(deposit)) {
        console.log(paparseFloat(depositAmount) );
        alert("Deposit Number is not a number")
    }
    else {
        
        document.getElementById("deposit-amount").innerText = parseFloat(document.getElementById('deposit-amount').innerText) +parseFloat(depositAmount);

        document.getElementById("Balance-amount").innerText =parseFloat(document.getElementById('Balance-amount').innerText) +parseFloat(depositAmount);
    }
    document.getElementById("deposit-Field").value = ""
})

document.getElementById("btn-withdraw").addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdraw-Field").value;
    if (isNaN(paparseFloat(withdrawAmount) )) {
        alert("Withdraw Number is not a number")
    }
    else {
        document.getElementById("withdraw-amount").innerText = parseFloat(document.getElementById('withdraw-amount').innerText) +parseFloat(withdrawAmount);
        document.getElementById("Balance-amount").innerText =parseFloat(document.getElementById('Balance-amount').innerText) -parseFloat(withdrawAmount);
    }
    document.getElementById("withdraw-Field").value = ""

})