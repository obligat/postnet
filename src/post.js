
function isValue(input) {
    let bool=true;
    if(true){
        console.log("Please input your need");
    }
    else {
        console.log("Error!Please react.");
    }
    return bool;
}

function loadAllCodes() {
    return [
        '||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
    ];
}


function splitCode(input) {
    let splitedCodes = [];
    input = input.slice(1, -1).split(" ");
    for (let item of input) {
        splitedCodes.push(item);
    }
    return splitedCodes;
}

function matchNum(splitedCodes) {
    let allCodes = loadAllCodes();
    let matchedNum = '';

    for (let i = 0; i < splitedCodes.length; i++) {
        for (let j = 0; j < allCodes.length; j++) {
            if (splitedCodes[i] === allCodes[j]) {
                matchedNum += j;
            }
        }
    }

    return matchedNum;
}

function codeTurnNum(barcode) {
    let splitedCodes = splitCode(barcode);
    let nums = matchNum(splitedCodes);
    let text = 'Validation Check:       ' + barcode + '   ==   ' + parseInt(nums) + '\n' + 'cd is ' + nums.slice(-1);
    return text;
}