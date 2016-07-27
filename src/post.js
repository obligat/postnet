function loadAllCodes() {
    return [
        /*{1:':::||'},
         {2:'::|:|'},
         {3:'::||:'},
         {4:':|::|'},
         {5:':|:|:'},
         {6:':||::'},
         {7:'|:::|'},
         {8:'|::|:'},
         {9:'|:|::'},
         {0:'||:::'}*/
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

    for(let i=0;i<splitedCodes.length;i++){
        for(let j=0;j<allCodes.length;j++){
            if(splitedCodes[i]===allCodes[j]){
                matchedNum+=j;
            }
        }
    }

    return matchedNum;
}