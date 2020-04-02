describe('countAllFromTown function' , function(){
    it('should return number registration numbers in the string that is for that town.' , function(){

      assert.equal(1, countAllPaarl("CL 124,CY 567,CL 345, CJ 456,CL 341"));
    });
    it('should return false if the registration is not from that town.' , function(){
      assert.equal(false,isFromBellville("CL 124,CY 567,CL 345, CJ 456,CL 341"));
    });
    
});



