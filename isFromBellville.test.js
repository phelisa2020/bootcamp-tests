describe('isFromBellville' , function(){
    it('should return true for CY 12322' , function(){
      assert.equal(true,isFromBellville('CY 12322'));
    });
    it('should return false for CY 12322' , function(){
      assert.equal(true,isFromBellville('CY 123224'));
    });
      });





