
describe('countAllFromTown function' , function() {
    it('should return 1 if regNo is from Paarl.' , function(){

      assert.equal(1, countAllPaarl("CL 124,CY 567,CL 345, CJ 456,CL 341"));
    });
    it('should say 3 if regNo is fromStellies.' , function(){
    	var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
      assert.deepEqual(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    
});

