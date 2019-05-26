module.exports = function main(num) {
    var arr = [['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],
               ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],
               ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
    var numarr = [];
    while(num > 0){
        numarr.push(num%10);
        num = parseInt(num / 10);
    }
    numarr.reverse();
    console.log("numarr = " + numarr);
    var resultarr = [[],[],[]];
    var result = [];
    var index = 0;
    while(index < 3){
        for(var i = 0; i < numarr.length; i++){
            resultarr[index].push(arr[index][numarr[i]]);
        }
        result.push(resultarr[index].join(" "));
        index++;
    }
    var text = result[0] + "\n" + result[1] + "\n" + result[2];
    console.log(result);
    return text;
};