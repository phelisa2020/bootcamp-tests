function regCheck(regNo ,loc){
  var regPlate = regNo.endsWith(loc);
  return regPlate;
}