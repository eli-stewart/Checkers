var pceR1 = {
    location: [2, 8],
    kingstate: false,
};
var pceR2 = {
    location: [4, 8],
    kingstate: false,
 };
var pceR3 = {
    location: [6, 8],
    kingstate: false,
 };
var pceR4 = {
    location: [8, 8],
    kingstate: false,
 };
var pceR5 = {
    location: [1, 7],
    kingstate: false,
 };
var pceR6 = {
    location: [3, 7],
    kingstate: false,
 };
var pceR7 = {
    location: [5, 7],
    kingstate: false,
 };
var pceR8 = {
    location: [7, 7],
    kingstate: false,
 };
var pceR9 = {
    location: [2, 6],
    kingstate: false,
 };
var pceR10 = {
    location: [4, 6],
    kingstate: false,
 };
var pceR11 = {
    location: [6, 6],
    kingstate: false,
 };
var pceR12 = {
    location: [8, 6],
    kingstate: false,
 };


var pceW1 = {
    location: [1, 1],
    kingstate: false,
 };
var pceW2 = {
    location: [3, 1],
    kingstate: false,
 };
var pceW3 = {
    location: [5, 1],
    kingstate: false,
 };
var pceW4 = {
    location: [7, 1],
    kingstate: false,
 };
var pceW5 = {
    location: [2, 2],
    kingstate: false,
 };
var pceW6 = {
    location: [4, 2],
    kingstate: false,
 };
var pceW7 = {
    location: [6, 2],
    kingstate: false,
 };
var pceW8 = {
    location: [8, 2],
    kingstate: false,
 };
var pceW9 = {
    location: [1, 3],
    kingstate: false,
 };
var pceW10 = {
    location: [4, 3],
    kingstate: false,
 };
var pceW11 = {
    location: [6, 3],
    kingstate: false,
 };
var pceW12 = {
    location: [8, 3],
    kingstate: false,
 };

var selected = 0;
var pceArrayRed = [pceR1, pceR2, pceR3, pceR4, pceR5, pceR6, pceR7, pceR8, pceR9, pceR10, pceR11, pceR12];
var pceArrayWhite = [pceW1, pceW2, pceW3, pceW4, pceW5, pceW6, pceW7, pceW8, pceW9, pceW10, pceW11, pceW12];



function move(spaceId) {
    var id = spaceId + ""

    if (document.getElementById(spaceId).className == "space fullRed" || document.getElementById(spaceId).className == "space fullWhite"){
    if(arraysEqual(spaceId, selected)){
        document.getElementById(spaceId).className = "space img_b"
    }
}

    if (document.getElementById(id).className == "space fullRed") {
        for (var i = 0; i < pceArrayRed.length; i++) {
            var pceLocation = pceArrayRed[i].location;
            if (arraysEqual(spaceId, pceLocation)) {
                selected = pceLocation;
            }
        }
    }
    if (document.getElementById(id).className == "space fullWhite") {
        for (var i = 0; i < pceArrayWhite.length; i++) {
            var pceLocation = pceArrayWhite[i].location;
            if (arraysEqual(spaceId, pceLocation)) {
                selected = pceLocation;
            }
        }
    }
    if (document.getElementById(spaceId).className == "space img_b" && document.getElementById(""+selected).className == "space fullRed" ) {
        if(selected!= 0){
        for (var i = 0; i < pceArrayRed.length; i++) {
            pceLocation = pceArrayRed[i].location;
            if (arraysEqual(selected, pceLocation)) {
                pceArrayRed[i].location = spaceId;
                document.getElementById(selected).className = "space img_b"
                document.getElementById(spaceId).className = "space fullRed"
                selected = 0
            }
        }
    }
}
    if (document.getElementById(spaceId).className == "space img_b" && document.getElementById(""+selected).className == "space fullWhite") {
        if(selected!= 0){
        for (var i = 0; i < pceArrayWhite.length; i++) {
            pceLocation = pceArrayWhite[i].location;
            if (arraysEqual(selected, pceLocation)) {
                pceArrayWhite[i].location = spaceId;
                document.getElementById(selected).className = "space img_b"
                document.getElementById(spaceId).className = "space fullWhite"
                selected = 0;
            }
        }
    }
}

}


    if (document.getElementById(spaceId).className == "space fullRed" || document.getElementById(spaceId).className == "space fullWhite"){
        console.log("running2")
        console.log(spaceId)
        console.log(selected)
    if(arraysEqual(spaceId, selected)){
        console.log("running3")
        document.getElementById(spaceId).className = "space img_b"
    }
}



function arraysEqual(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (var i = 0; i <= arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false
            }
        }
    }
    else {
        return false
    }
    return true
}
