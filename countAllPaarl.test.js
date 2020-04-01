describe('countAllPaarl function' , function(){
    it('should return the number of regNos in string for paarl' , function(){
      assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    });
    it('should return the number of regNos in string for paarl' , function(){
      assert.equal(2, countAllPaarl("CJ 345 123, CL 123-546, CK 345, CJ 123"));
    });
});


