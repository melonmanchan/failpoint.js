#!/usr/bin/env node
var cp = require('child_process');

// Yanked from http://stackoverflow.com/questions/13981938/print-a-list-of-all-installed-node-js-modules
function listPackages(callback) {
    cp.exec('npm ls --parseable', function (err, stdout, stderr) {
        callback(err, stdout.split('\n'));
    });
}

listPackages(function (err, out) {
    //console.log(out);
    var namesOnly = out.reduce(function (outArr, val) {
        var arr = val.split('node_modules/');

        if (arr.length > 1) {
            outArr.push(arr.pop());
        }

        return outArr;
    }, []);

    console.log(namesOnly);
})
