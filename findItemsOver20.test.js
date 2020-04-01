describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20.' , function(){
    var attributes = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
      assert.deepEqual(attributes, findItemsOver20(attributes, 25));
    });
     it('should return all the products that have a quantity higher than 20.' , function(){
    var attributes = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
      assert.deepEqual(attributes, findItemsOver20(attributes, 21));
    });
});

  
