describe('isWeekday' , function(){
    it('should return false if day startsWith S' , function(){
      assert.equal(false, isWeekday('Saturday'));
    });
       it('should return true if day does not startsWith S' , function(){
      assert.equal(true, isWeekday('Monday'));
    });

});





