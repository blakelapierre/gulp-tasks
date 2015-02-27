module.exports = function(gulp, files) {
  files = files || './tasks';

  if (!Array.isArray(files)) files = [files];

  files.forEach(files, function(file) {
    require(file)(gulp);
  });
};