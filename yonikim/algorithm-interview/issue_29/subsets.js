/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = getSubsets(nums);
  return result;
};
const getSubsets = function (arr) {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];

  const subSet = function DFS(depth) {
    // 부분 집합 구하는 재귀 함수, DFS 알고리즘
    if (depth === arr.length) {
      // 트리의 끝에 다다른 것 ==> 재귀 탈출 조건
      const subSet = arr.filter((el, index) => flag[index]); // arr의 인덱스에 맞춰서 그 인덱스 값이 flag에서 true인지? => true인것들로만 필터
      subSets.push(subSet); // 부분집합(한번 실행할 때 배열 1개)을 담는 배열에 push
      return;
    }

    flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽
    subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

    flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
    subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
  };

  subSet(0); // depth 0 부터 시작
  return subSets;
};

const nums = [1, 2, 3];
const result = subsets(nums);
console.log(result);
