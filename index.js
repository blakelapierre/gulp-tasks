// module.exports = function(gulp, tasks) {
//   for (var key in tasks) {
//     tasks[key](gulp);
//   }
//   return tasks;
// };

module.exports = function(gulp, require) {
  var tasks = require('./tasks');
  for (var key in tasks) {
    tasks[key](gulp);
  }
  return tasks;
};