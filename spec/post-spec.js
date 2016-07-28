
describe("calculate verify code",function () {
    it("should get string with a verified code",function () {
        let input='23414';
        let result=verify(input);
        expect(result).toEqual('234146');
    });
});

describe("match code",function () {
    it("should match number to barcode",function () {
        let verifiedNum='63097';
        let result=matchCode(verifiedNum);
        let expected=[':||::','::||:','||:::','|:|::','|:::|'];
        expect(result).toEqual(expected);
    })
});

describe("numTurnCode",function () {
    it("should put out ",function () {
        let input='63097';
        let result=numIntoBar(input);
        let expeced = 'Validation Check:       ' + 63097 + '   ==   |:||::::||:||:::|:|::|:::|:|:|:|' + '\n' + 'cd is ' + 5;
        expect(result).toEqual(expeced);
    })
})





describe("judge if correct",function (){
    it("alert prompt infomation",function(){
        let input='||::: ::||: ||::: |:|:: |:::|';
        let result=isValueAll(input);
        expect(result).toEqual(true);
    });
});

describe("split code ",function () {    
    it("should split code by ' '",function () {
        let barcode='|||::: ::||: ||::: |:|:: |:::||';
        let result=splitCode(barcode);
        let expected=['||:::','::||:','||:::','|:|::','|:::|'];
        expect(result).toEqual(expected);
    })
})

describe("matchNum",function () {
    it("should match ||::: ..to 0..",function () {
        let splitedCodes=[':||::','::||:','||:::','|:|::','|:::|'];
        let result=matchNum(splitedCodes);      
        let expected='63097';
        expect(result).toEqual(expected);
    })
});

describe("code to number",function () {
    it("should input barcode output number",function () {
        let barcode='||:|:: ::||: ||::: |:|:: |:::| :|:|:|';
        let result=codeTurnNum(barcode);
        let expected='Validation Check:       ' + '||:|:: ::||: ||::: |:|:: |:::| :|:|:|   ==   '+93097+ '\n' + 'cd is ' + 5;
        expect(result).toEqual(expected);
    });


});

