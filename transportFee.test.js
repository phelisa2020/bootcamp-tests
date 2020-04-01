describe('transportFee function' , function(){
    it('should returns the price based on the shift you are working (morning).' , function(){
    	var returns = "R20";
      assert.equal(returns,transportFee("morning"));
    });
    it('should returns the price based on the shift you are working (afternoon).', function(){
    	var returns = "R10";
      assert.equal(returns, transportFee("afternoon"));
    });
    it('should returns the price based on the shift you are working (nightshift).', function(){
    	var returns = "free"
      assert.equal(returns, transportFee("nightshift"));
    });
});

