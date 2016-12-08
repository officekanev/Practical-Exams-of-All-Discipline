class MailBox {

    constructor() {
        this.messages = [];//Each mail message holds subject and text (subject + text)  MAP
    }

    addMessage(subject, text){
        let newMail = { subject:subject, text:text.toString() };
        this.messages.push(newMail);
        return this;
    }

    deleteAllMessages() { // clears the mail box (deletes all messages).
      this.messages = [];
    }

    findBySubject(substr){// returns all mail messages from the mail box that hold the specified substr string in their subject.
       
        let findMatches = [];
        for(let currentMessage of this.messages){
            if(currentMessage.text.indexOf(substr) !== -1){
                findMatches.push(currentMessage);
            }
        }

        return findMatches;
    }

    toString() {
        let out = '';

       if(this.messages.length === 0) {
           out = '* (empty mailbox)';
       }else {

           for(let currentMessage of this.messages){
              out += `* [${currentMessage.subject.toString()}] ${currentMessage.text}\n`;
           }
       }

       return out;
    }

    get messageCount() {
        return this.messages.length; // returns the total number of messages in the mail box.
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
 console.log('Messages:\n' + mb);
 console.log("Messages holding 'rakiya': " + JSON.stringify(mb.findBySubject('rakiya')));
 console.log("Messages holding 'ee': " +JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());

