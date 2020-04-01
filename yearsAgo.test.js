describe('yearsAgo' , function(){
    it('it should return how many years ago that was' , function(){
    	 var year = new Date().getFullYear()-year;
      assert.equal(2000, yearsAgo(20));
    });

    it('it should return how many years ago that was (if it was last year) ' , function(){
    	 var year = new Date().getFullYear()-year;
      assert.equal(2019, yearsAgo(1));
    });
});
