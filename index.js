#!/usr/bin/env node
var cp = require('child_process');

// Yanked from http://stackoverflow.com/questions/13981938/print-a-list-of-all-installed-node-js-modules
function listPackages(callback) {
    cp.exec('npm ls --json', function (err, stdout, stderr) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(stdout));
    });
}

listPackages(function (err, out) {
    console.log(out);
})
