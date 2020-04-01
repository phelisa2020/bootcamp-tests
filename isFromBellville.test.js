describe('isFromBellville function' , function(){
    it('should return true for CY 12322' , function(){
      assert.equal(true,isFromBellville('CY 12322'));
    });
    it('should return false for CJ 12322' , function(){
      assert.equal(false,isFromBellville('CJ 123224'));
    });
      });










