describe('mostProfitableDepartment' , function(){
    it('should return output department which is the most profitable(it is outdoor)' , function(){
    	var depart= ''; 
      assert.deepEqual(depart, mostProfitableDepartment('outdoor'));
    });
       it('should return false for other department' , function(){
      assert.equal(false, mostProfitableDepartment('electronics'));
    });
       
});

