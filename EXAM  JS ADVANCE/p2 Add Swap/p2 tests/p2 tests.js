let createList = require("../p2 Add Swap").createList; // import sum of another file, withdraw  data  of  inner - internal - outside  world-file
let expect = require("chai").expect;

describe('list' , function () {
    let list = {};

    beforeEach(function () { // when testing IIFE we not required to have beforeEach
        list = createList();
    });

    it("should have a function", function () {
        expect(typeof createList).to.equal('function');
    });

    it("should have a method add()", function () {
        expect(list.hasOwnProperty('add')).to.equal(true);
    });

    it("should have a method remove()", function () {
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
    });

    it("should have a method get()", function () {
        expect(list.hasOwnProperty('shiftRight')).to.equal(true);
    });

    it("should have a method get()", function () {
        expect(list.hasOwnProperty('swap')).to.equal(true);
    });

    it("should have a method get()", function () {
        expect(list.hasOwnProperty('toString')).to.equal(true);
    });

    it("should have a empty array", function () {
        expect(list.toString()).to.equal('','to string is not working');
        expect(list.size).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.toString()).to.equal('5, pepi, musaka, 3.14');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        list.shiftLeft();
        expect(list.toString()).to.equal('pepi, musaka, 3.14, 5');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        list.shiftRight();
        expect(list.toString()).to.equal('3.14, 5, pepi, musaka');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.swap(-1, 15)).to.equal(false);
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.swap(-1, 1)).to.equal(false);
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.swap(1, 13)).to.equal(false);
    });

    it("should have a empty array", function () {
        expect(list.swap(1, 0)).to.equal(false);
    });

    it("should have a empty array", function () {
        list.add(5);
        expect(list.toString()).to.equal('5');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        list.swap(1, 2);
        expect(list.toString()).to.equal('5, musaka, pepi, 3.14');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.shiftLeft();//pepi, 5
        list.add('musaka');
        list.add(4);
        list.add(3.4);
        list.shiftRight()//3.4,pepi,5,musaka,4
        list.swap(1, 2);//3.4, 5, pepi,musaka, 4
        list.swap(0, 2);//pepi, 5, 3.14, musaka, 4
        expect(list.toString()).to.equal('pepi, 5, 3.4, musaka, 4');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.swap('pepi', 2)).to.equal(false);
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.swap(1, 'e')).to.equal(false);
    });

});

// describe('list' , function () {
//     let list = {};
//
//     beforeEach(function () { // when testing IIFE we not required to have beforeEach
//         list = createList();
//     });
//
//     it("should have a function", function () {
//         expect(typeof createList).to.equal('function');
//     });
//
//     it("should have a method add()", function () {
//         expect(list.hasOwnProperty('add')).to.equal(true);
//     });
//
//     it("should have a method remove()", function () {
//         expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(list.hasOwnProperty('shiftRight')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(list.hasOwnProperty('swap')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(list.hasOwnProperty('toString')).to.equal(true);
//     });
//
//     // it("should have a empty array", function () {
//     //     expect(list.toString()).to.equal('','to string is not working');
//     //     expect(list.size).to.equal(undefined);
//     // });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         expect(list.toString()).to.equal('5, pepi, musaka, 3.14');
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         list.shiftLeft();
//         expect(list.toString()).to.equal('pepi, musaka, 3.14, 5');
//     });
//
//     it("should have a empty array", function () {
//         list.shiftLeft();
//         expect(list.toString()).to.equal('pepi, musaka, 3.14, 5');
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         list.shiftRight();
//         expect(list.toString()).to.equal('3.14, 5, pepi, musaka');
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         expect(list.swap(-1, 15)).to.equal(false);
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         expect(list.swap(-1, 1)).to.equal(false);
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         expect(list.swap(1, 13)).to.equal(false);
//     });
//
//     it("should have a empty array", function () {
//         expect(list.swap(1, 0)).to.equal(false);
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         expect(list.toString()).to.equal('5');
//     });
//
//     it("should have a empty array", function () {
//         list.add(5);
//         list.add('pepi');
//         list.add('musaka');
//         list.add(3.14);
//         list.swap(1, 2);
//         expect(list.toString()).to.equal('5, musaka, pepi, 3.14');
//     });
//                                                                          //   last try
// });
    //==============================================================

    // it("should have a empty array", function () {
    //     expect(list.toString()).to.equal('','to string is not working');
    //     expect(list.size).to.equal(undefined);
    // });
    //



    //
    // it("should have a empty array", function () {
    //     list.delete(-2);
    //     expect(list.delete()).to.equal(undefined);
    // });

    // it("should have a empty array", function () {
    //     list.delete(0);
    //     expect(list.delete()).to.equal(undefined);
    // });
    //
    // it("should have a empty array", function () {
    //     list.add(5);
    //     list.add('two');
    //     expect(list.delete(2)).to.equal(undefined);
    // });
    //
    // it("should have a empty array", function () {
    //     list.add(1);
    //     list.add(2);
    //     list.add(3);
    //     list.add(4);
    //     list.add(5);
    //     list.delete(0);
    //     list.delete(3);
    //     expect(list.toString()).to.equal('2, 3, 4');
    // });
    //


//});


// describe('createList' , function () {
//     // let list = {};
//     //
//     // beforeEach(function () { // when testing IIFE we not required to have beforeEach
//     //     list = createList();
//     // });
//
//     it("should have a function", function () {
//         expect(typeof createList).to.equal('function');
//     });
//
//     it("should have a method add()", function () {
//         expect(createList.hasOwnProperty('add')).to.equal(true);
//     });
//
//     it("should have a method remove()", function () {
//         expect(createList.hasOwnProperty('shiftLeft')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(createList.hasOwnProperty('shiftRight')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(createList.hasOwnProperty('swap')).to.equal(true);
//     });
//
//     it("should have a method get()", function () {
//         expect(createList.hasOwnProperty('toString')).to.equal(true);
//     });
//
// });