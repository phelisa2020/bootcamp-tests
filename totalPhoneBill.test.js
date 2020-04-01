describe('totalPhoneBill' , function(){
    it('should return tota bill for data provided' , function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return total bill for data provided (if its only sms)' , function(){
      assert.equal('R1.95', totalPhoneBill('sms, sms, sms'));
    });
    });









