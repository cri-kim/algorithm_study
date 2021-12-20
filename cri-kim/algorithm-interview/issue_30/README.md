## 풀이 & 테스트 코드
- https://github.com/cri-kim/BlogPractice/tree/main/computer-science/java-algorithm-solution/src/main/java/shortestPath


## 네트워크 딜레이 타임
1. 풀이시간 : X
2. 동작
- 방향 그래프를 List<List<Pair>>로 만들어서 그래프를 생성한다.
- n개의 값 만큼의 배열을 만든다. 해당 배열은 지정 위치로 가는 값이 저장된다.
- bfs탐색을 진행한다.
  - 위치 값을 저장하는 큐를 생성하고, k 위치부터 탐색을 시작한다. 
## K 경유지 내 가장 저렴한 항공권
1. 풀이시간 : X
2. 동작
-flight를 순회하며 해당 위치에서의 비용을 누적하여 저장한다.
- 비용은 이전 비용과의 비교를 통해 가장 적은 것을 사용한다.