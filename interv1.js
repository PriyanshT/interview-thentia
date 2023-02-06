function wash(callback) {
    setTimeout(function () {
        console.log("wash");

        callback();
    }, 3000);
}

function dry(callback) {
    setTimeout(function () {
        console.log("dry");

        callback();
    }, 2000);
}

function fold(callback) {
    setTimeout(function () {
        console.log("fold");

        callback();
    }, 1000);
}

// create doLaundry fun
// sequenally run each func
// flag to check the counter
const doLaundry = (temp, flag = 0) => {
    if (temp.length === flag) {
        return;
    } else {
        temp[flag](function () {
            doLaundry(temp, flag + 1);
        });
    }
};

doLaundry([wash, dry, fold, wash, dry]);
