function colectItems(input) {

    let allItemValue = Number(0);

    for (let i = 0; i < input.length; i++) {

        let currentElement = input[i].split(' ');
        let currentElementValue = currentElement[1];

        if(currentElement[0] != 'coin'){
            continue;
        }else{
            if(isNaN(currentElementValue)){
                continue;
            }else if((currentElementValue % 1 != 0) && currentElementValue < 0){
                continue;
            }else{
                allItemValue += Number(currentElementValue);
            }
        }
    }

     console.log(`gold : ${Math.floor(allItemValue/100 % 10)}`);
     console.log(`silver : ${Math.floor(allItemValue/10 % 10)}`);
     console.log(`bronze : ${Math.floor(allItemValue % 10)}`);
}

colectItems(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20',
    'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);

colectItems(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty',
    'coin fifty', 'coin hundred', 'cigars 1']);

colectItems(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50',
    'coin hundred', 'cigars 1']);


