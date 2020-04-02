describe('isFromBellville function' , function(){
    it('should return true if the Registration numbers for bellville starts with CY 12322' , function(){
      assert.equal(true,isFromBellville('CY 12322'));
    });
    it('should return false if the Registration numbers for bellville does not start with CY' , function(){
      assert.equal(false,isFromBellville('CJ 123224'));
    });
      });









