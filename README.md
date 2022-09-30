# [mongodb-restore](https://github.com/nullxx/mongodb-restore)

Restore data from [`mongodb-backup`](https://github.com/nullxx/mongodb-backup)

## Installation

Install through NPM

```bash
npm install @nullx/mongodb-restore
```
or
```bash
git clone git://github.com/nullxx/mongodb-restore.git
```


## API

inside nodejs project
```js
var restore = require('@nullx/mongodb-restore');

restore({
  uri: 'uri', // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase>
  root: __dirname + '/dbName'
});
```

### restore(options)

#### options

 - `uri` - **String** [URI](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/urls/) for MongoDb connection *(default "required")*
 - `root`- **String** Path where get the backup *(default "required")*
 - `[parser]` - **String | Function** Data parser (bson, json) or custom *(default "bson")*
 - `[callback]` - **Function** Callback when done *(default "disabled")*
 - `[stream]`- **Object** Get `.tar` file from Node stream *(default "disabled")*
 - `[tar]` - **String** Extract files from a .tar file *(default "disabled")*
 - `[logger]` - **String** Path where save a .log file *(default "disabled")*
 - `[metadata]` - **Boolean** Set metadata of collections as Index, ecc *(default "false")*
 - `[drop]` - **Boolean** Drop every collection from the target database before restoring the collection *(default "false")*
 - `[dropCollections]` - **Boolean|Array** Drop every collection from the target database before restoring if Boolean (similar to `drop` option), or selected collections if Array *(default "false")*
 - `[options]` - **Object** MongoDb [options](http://mongodb.github.io/node-mongodb-native/2.0/tutorials/connecting/#toc_7) *(default)*

## Examples

Take a look at my [examples](examples)

### [License Apache2](LICENSE)
