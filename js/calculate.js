

document.getElementById('playerCostBtn').addEventListener('click',function (){

  
    const playerCost =  gettingCost('playerCost');
    isANumber(playerCost);
   
    const total = totalPlayerCost(playerCost);
    updateTotalPlayerCost('totalPlayerCost',total);
    
 })
 document.getElementById('totalBtn').addEventListener('click',function(){

    const manager = gettingCost('manager');
    const coach = gettingCost('coach');
    isANumber(manager);
    isANumber(coach);
    const playerCost =  gettingCost('playerCost');
    const total = totalPlayerCost(playerCost);
   const overAllTotalCost  =  overAllTotal(total,manager,coach);
    updateTotalPlayerCost('totalShow',overAllTotalCost)
 })
 function
