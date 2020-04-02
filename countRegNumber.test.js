describe('countRegNumber' , function(){
    
it('should returns the 3 numbers of registration numbers in the string' , function(){
 var regNo = "CA 182736,CY 523519,CY 812328";
assert.equal(3, countRegNumber('CA 1827362,CY 5235192,CJ 812328'));
});

it('should returns 1 number of registration numbers in the string' , function(){
 var regNo = "CA 182736";
assert.equal(1, countRegNumber('CA 1827362'));
});
it('should returns the number of registration numbers in the string' , function(){
      assert.lengthOf(countRegNumber, 1, 'CA 182736,CY 523519,CJ 812328')
    });
});

