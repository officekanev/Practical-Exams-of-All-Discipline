function mineExtracture(input) {

    let amountExtract = Number(input[0]);
    let TotalMineExtraction = Number(0);
    let TotaldayCount = Number(0);
    while (amountExtract >= Number(100)){
        TotaldayCount++;
        TotalMineExtraction += amountExtract - Number(26);
        amountExtract -= Number(10);
    }
    if(TotaldayCount != Number(0)){
        TotalMineExtraction -= Number(26);
    }

    console.log(TotaldayCount);
    console.log(TotalMineExtraction);
}

mineExtracture(['99']);
mineExtracture(['111']);
mineExtracture(['450']);
mineExtracture(['200']);
