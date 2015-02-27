module.exports = function(gulp, require, tasksModule) {
  var tasks = require(tasksModule || './tasks');
  for (var key in tasks) {
    tasks[key](gulp);
  }
  return tasks;
};
