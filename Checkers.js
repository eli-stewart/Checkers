/*
function onOff(a) {
    console.log('running')
    if (document.getElementById(a).className == "space img_b") {
        document.getElementById(a).className = "space full";
    }
    else {
        document.getElementById(a).className = "space img_b";
    }
}
*/
var pce1 = {
    location: [2, 8]
, };
var selected = 0
var pceArrayRed = [pce1]

function move(spaceId) {
    if (document.getElementById(spaceId).className == "space full") {
        for (i = 0; i < pceArrayRed.length; i++) {
            var pceLocation = pceArrayRed[i].location;
            if (arraysEqual(spaceId, pceLocation)) {
                selected = pceLocation
            }
        }
    }
    if (document.getElementById(spaceId).className == "space img_b") {
        for (i = 0; i < pceArrayRed.length; i++) {
            if (arraysEqual(spaceId, pceArrayRed[i])) {
                selected = pceArrayRed[i]
            }
        }
    }
}

function locationDisplay() {
    var location = pce1.location;
    console.log(location.toString());
    document.getElementById(location.toString()).className = "space full";
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
        for (i = 0; i <= arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false
            }
        }
    }
    return true
}
