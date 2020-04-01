describe('fromWhere function' , function(){
    it('should returns the town the car is from (Bellville).' , function(){
    	var returns = 'Bellville';
      assert.equal(returns,fromWhere('CY'));
    });
    it('should returns the town the car is from (Paarl).' , function(){
    	var returns ='Paarl';
      assert.equal(returns,fromWhere("CJ"));
    });
    it('should returns the town the car is from (Cape Town).' , function(){
    	var returns ='Cape Town'
      assert.equal(returns,fromWhere('CA'));
    });
    it('otherwise return Some other place!.' , function(){
    	var returns ='Some other place!'
      assert.equal(returns,fromWhere('CD'));
    });
});

