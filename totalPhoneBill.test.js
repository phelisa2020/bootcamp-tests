describe('totalPhoneBill' , function(){
    it('should return tota bill(R7.45) for data provided if its 2 calls and 3 sms' , function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return total bill(of R1.95) for data provided (if its only sms)' , function(){
      assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });
    });









