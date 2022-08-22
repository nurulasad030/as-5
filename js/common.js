// common function for select box

function test(nameId,count){
    if(count<5){
    
        const playerName =  gettingName(nameId);
        puttingNameIntoBox(playerName);
       
       }
       else{
        alert("You have selected 5 players!")
       }

}

function gettingName(nameId){


    const gettingNameId = document.getElementById(nameId);
   

    const nameIdValue = gettingNameId.innerText;
 
  
    return nameIdValue;
}
count = 0;
function puttingNameIntoBox(name){
   const test =  count++;
   

    
    if(count>5){
    //    alert("You have selected 5 players!");
        return;
    }
    
   
   
   
    const selectBox = document.getElementById('selectBoxDiv');
    const li = document.createElement('li');
    li.innerText = name;
    selectBox.appendChild(li);
    console.log(test);
    return count;
    
   
}


// common function for calculate

function gettingCost(CostId){
    const playerCostId = document.getElementById(CostId);
    const playerCostString = playerCostId.value;
    const playerCostValue = parseFloat(playerCostString);
    return playerCostValue;
 
}

function totalPlayerCost(value){
    const total = count * value;
    return total;
}

function overAllTotal(palyerTotal,managerCost,coachCost){
    const totalCost = palyerTotal + managerCost + coachCost;
    console.log(totalCost);
    return totalCost;
}

function updateTotalPlayerCost(id,updateValue){
    const totalPlayerExpenceId = document.getElementById(id);
    
  totalPlayerExpenceId.innerText = updateValue;
  

}

//  function for checking number or not
function isANumber(aValue){
    if(isNaN(aValue)){

        alert('Your input is not a number.Pls enter a number');
        depositField.value ='';
        return;
    
      }

}

function doDisable(selectId,count){
    const selectBtn = document.getElementById(selectId);
    console.log(count);
    if(count<=5){
        selectBtn.setAttribute('disabled', true);
    }
    else{
        selectBtn.removeAttribute('disabled');
    }
    
}

