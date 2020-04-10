describe('the greet function' , function(){
    it('should greet Janine with Hello, Janine' , function(){
      assert.equal('Hello, Janine' ,greet('Janine'));
    });
     it('should greet Phelisa with Hello, Phelisa' , function(){
      assert.equal('Hello, Phelisa' ,greet('Phelisa'));
    });
});


