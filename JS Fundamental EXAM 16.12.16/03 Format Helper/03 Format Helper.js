function reformatingText(data) {

    for(let line of data){
        let regexAfterSign = /([\.\,\!\?\:\;]([\s+]{2,}))/;
        //let regexBeforSign = /(([\s+]{1,})([\.\,\!\?\:\;]))/;
        let regexRemoveWatch = /(([a-zA-Z...])([\s+]{1,})(\!))/g;
        //let removeDotsAfterDigits= /(([0-9]+)([\s+]{1,}))/g;//
        //let removeDotsBeforDigit = /(([\s+]{1,})([0-9]+))/g;//
        let afterReplacement = '';
        let matchAfter = '';
        matchAfter = regexAfterSign.exec(line);
        while (matchAfter){
            line = line.replace(matchAfter[2], afterReplacement);
            matchAfter = regexAfterSign.exec(line);
        }
        //matchAfter = regexBeforSign.exec(line);
        // while (matchAfter){
        //     line = line.replace(matchAfter[2], afterReplacement);
        //     matchAfter = regexBeforSign.exec(line);
        // }
        while (matchAfter = regexRemoveWatch.exec(line)){
            line = line.replace(matchAfter[3], afterReplacement);
        }
        // while (matchAfter = removeDotsBeforDigit.exec(line)){
        //     line = line.replace(matchAfter[2], afterReplacement);
        // }
        // while (matchAfter = removeDotsAfterDigits.exec(line)){
        //     line = line.replace(matchAfter[3], afterReplacement);
        // }
        console.log(line);
    }
}

reformatingText([
    'Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .'
]);

reformatingText([
    'Make,sure to give:proper spacing where is needed... !'
]);
