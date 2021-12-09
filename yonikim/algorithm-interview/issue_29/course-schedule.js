/**
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const edges = Array(numCourses)
    .fill(0)
    .map((_) => Array(numCourses).fill(0));
  const incoming = Array(numCourses).fill(0);
  let post = 0;
  let prev = 0;
  let queue = [];
  let num = 0;
  let count = 0;

  for (var i = 0; i < prerequisites.length; i++) {
    prev = prerequisites[i][1];
    post = prerequisites[i][0];
    if (edges[prev][post] === 0) {
      incoming[post]++;
      edges[prev][post] = 1;
    }
  }

  for (var j = 0; j < numCourses; j++) {
    if (incoming[j] === 0) queue.push(j);
  }

  while (queue.length) {
    count++;
    num = queue.pop();
    for (var k = 0; k < numCourses; k++) {
      if (edges[num][k] === 1 && --incoming[k] === 0) queue.push(k);
    }
  }

  return count === numCourses;
};

var canFinish = function (numCourses, prerequisites) {
  const visited = new Set();
  const visiting = new Set();

  // Initialize an array of all the courses (i.e. index 0 for course 0, index
  // 1 for course 1). For each course, populate an array of all the courses
  // that depend on it
  const prereqCourseArr = [...new Array(numCourses)].map(() => []);
  prerequisites.forEach(([course, prereq]) => {
    prereqCourseArr[prereq].push(course);
  });

  // Do DFS on each course
  for (let course = 0; course < numCourses; course++) {
    // There is a cycle, this course cannot be finished
    if (!dfs(course)) {
      return false;
    }
  }
  return true;

  function dfs(course) {
    // We have seen and verified this course can be finished
    if (visited.has(course)) {
      return true;
    }

    // This is one of the courses we are seeing during the current search
    // (i.e. there is a cycle)
    if (visiting.has(course)) {
      return false;
    }

    // Add the course to courses we are seeing during the current search
    visiting.add(course);

    // Iterate through all the other courses that depend on the current
    // course. For each one, do DFS
    const coursesDependingOnThis = prereqCourseArr[course];
    for (let i = 0; i < coursesDependingOnThis.length; i++) {
      const courseDependingOnThis = coursesDependingOnThis[i];
      if (!dfs(courseDependingOnThis)) {
        return false;
      }
    }

    visiting.delete(course);
    visited.add(course);
    return true;
  }
};

const numCourses = 2,
  prerequisites = [[1, 0]];
const result = canFinish(numCourses, prerequisites);
console.log(result);
