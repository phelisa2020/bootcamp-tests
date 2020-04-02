describe('isWeekday' , function(){
    it('should return false if week day startsWith S(Saturday)' , function(){
      assert.equal(false, isWeekday('Saturday'));
    });
       it('should return true if week day does not startsWith S(Monday)' , function(){
      assert.equal(true, isWeekday('Monday'));
    });

});





