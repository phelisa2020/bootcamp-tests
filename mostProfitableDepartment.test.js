describe('mostProfitableDepartment' , function(){
    it('should return output department that have high sales (36116)' , function(){
    	var depart= ''; 
      assert.deepEqual(depart, mostProfitableDepartment(depart, 36116));
    });
       it('should return false for other department' , function(){
      assert.equal(false, mostProfitableDepartment(false, 2505));
    });
       
});


 

