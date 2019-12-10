var replace = require('replace-in-file');
var package = require("./package.json");
var buildVersion = package.version;
var buildDate = Date(Date.now()).toString();
const buildOptions = {
    files: 'src/environments/environment.prod.ts',
    from: /version: '(.*)'/g,
    to: "version: '"+ buildVersion + "'",
    allowEmptyPaths: false,
};
const dateOptions = {
    files: 'src/environments/environment.prod.ts',
    from: /buildDate: '(.*)'/g,
    to: "buildDate: '"+ buildDate + "'",
    allowEmptyPaths: false,
};
try {
    let changedFiles = replace.sync(buildOptions);
    if (changedFiles == 0) {
        throw "Please make sure that file '" + buildOptions.files + "' has \"version: ''\"";
    }
    console.log('Build version set: ' + buildVersion);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}
try {
    let changedFiles = replace.sync(dateOptions);
    if (changedFiles == 0) {
        throw "Please make sure that file '" + dateOptions.files + "' has \"buildDate: ''\"";
    }
    console.log('Build Date set: ' + buildDate);
}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}