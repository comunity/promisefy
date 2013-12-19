// Copyright (c) ComUnity 2013
// hansm@comunity.co.za (Hans Malherbe)

import promisefy = require('./nm/promisefy/index')

var o = {
    fileExists: promisefy.fileExists,
    fold: promisefy.fold,
    mkdirp: promisefy.mkdirp,
    pipe: promisefy.pipe,
    readFile: promisefy.readFile,
    writeFile: promisefy.writeFile
}

export = o