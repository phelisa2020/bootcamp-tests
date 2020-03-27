function allFromTown (regNo,loc){
  var regNumber = regNo.split(",");
  var anyTown = [];
 
  for(var i=0; i< regNumber.length;i++){
      var current = regNumber[i].trim()
      //console.log(current);
    
  if(current.startsWith(loc)){
    anyTown.push(current);
  	}
    
   }
  console.log(anyTown)
  //console.log("\n")
    return anyTown;
  }
  