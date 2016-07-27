
describe("judge if correct,"function () {
    it("alert prompt infomation",function(){
        let input='|||::: ::||: ||::: |:|:: |:::||';
        let result=isValue(input);
        expect(result).toEqual(true);
    })
})

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
        let barcode='|||::: ::||: ||::: |:|:: |:::| :|:|:|';
        let result=codeTurnNum(barcode);
        let expected='Validation Check:       ' + |||::: ::||: ||::: |:|:: |:::| :|:|:| + '   ==   '+630975+ '\n' + 'cd is ' + 7;
        expect(result).toEqual(expected);
    })
})