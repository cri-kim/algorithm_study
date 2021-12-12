/**
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = new Set();
  const visiting = new Set();

  const preRequestCourseArr = [...new Array(numCourses)].map(() => []);
  prerequisites.forEach(([course, preRequest]) => {
    preRequestCourseArr[preRequest].push(course);
  });

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(visited, visiting, preRequestCourseArr, course)) {
      return false;
    }
  }
  return true;
};

const dfs = (visited, visiting, preRequestCourseArr, course) => {
  if (visited.has(course)) return true;
  if (visiting.has(course)) return false;

  visiting.add(course);

  const dependingCourses = preRequestCourseArr[course];
  for (const dependingCourse of dependingCourses) {
    if (!dfs(visited, visiting, preRequestCourseArr, dependingCourse)) {
      return false;
    }
  }

  visiting.delete(course);
  visited.add(course);
  return true;
};

const numCourses = 2,
  prerequisites = [[1, 0]];
const result = canFinish(numCourses, prerequisites);
console.log(result);
