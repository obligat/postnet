
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
})