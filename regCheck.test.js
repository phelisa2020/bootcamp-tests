describe('regCheck function' , function(){
    it('should return true if a registration number is for GP, L, EC, MP registration plates.', function(){
      assert.equal(true,regCheck('DV 23 NB GP', 'GP'));
    });
    it('should return false if the registration is for ND', function(){
      assert.equal(false,regCheck('CY189-012', 'ND'));
    });
      });
