function buildWall(input) {

    let inputdata = input.map(n => Number(n));
    let haveWork = true;
    let countTotalPessos = Number(0);
    let dayCountAnountConcrete = [];
    while(haveWork){
        let countMatch = Number(0);
        let dayConcreet = Number(0);
        let index = Number(0);
        for(let data of inputdata ){
            data = Number(data);
            if(data == Number(30)){
                continue;
            }
            inputdata[index] = ++data;
            index++;
            countTotalPessos += Number(195) * Number(1900);
            dayConcreet += Number(195);
            countMatch++;
        }
        if(countMatch != Number(0)){
            dayCountAnountConcrete.push(dayConcreet);
        }
        if(countMatch == Number(0)){
            haveWork = false;
            break;
        }
    //    for(let element of inputdata){
    //        let i = inputdata.indexOf(30);
    //        if(i != -1) {
    //            inputdata.splice(i, 1);
    //        }
    //    }
    }
    console.log(dayCountAnountConcrete.join(', '));
    console.log(`${countTotalPessos} pesos`);
}

buildWall([30, 30, 30, 21, 30]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);
