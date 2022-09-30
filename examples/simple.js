"use strict";
/**
 * @file simple example
 * @module mongodb-restore
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
var restore = require(".."); // use require('mongodb-restore') instead

/*
 * use
 */
restore({
  uri: "mongodb://root:password@localhost/restore?authSource=admin", // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
  root: __dirname, // read backup(s) file(s) from this dir
  tar: 'download.tar',
  drop: true,
  callback: (err) => {
    if (err) return console.error(err);
    console.log("done");
  },
});
