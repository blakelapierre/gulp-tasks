module.exports = function(gulp, files) {
  files = files || './tasks';

  if (!Array.isArray(files)) files = [files];

  files.forEach(file, function(file) {
    require(file)(gulp);
  });
};