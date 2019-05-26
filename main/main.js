module.exports = function main(num) {
    var arr = [['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
               ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
               ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
    var numarr = [];
    while(num > 0){
        numarr.unshift(num%10);
        num /= 10;
    }
    var resultarr = [];
    var result = [];
    var index = 0;
    while(index < 3){
        for(var i = 0; i < numarr.length; i++){
            resultarr.push(arr[index][numarr[i]]);
        }
        result.push(resultarr.join(' '));
        resultarr = [];
        index++;
    }

    //console.log("result");
    return result[0] + "\n" + result[1] + "\n" + result[2];
};