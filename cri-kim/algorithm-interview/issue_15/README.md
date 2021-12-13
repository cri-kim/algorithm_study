## 해시맵 디자인
1. 풀이 시간 : 5분 내외
2. 동작 : 
  - 해시 맵이 갖는 최대의 길이의 배열 생성
  - 음수가 나오지 않으므로 모두 -1로 값을 갖는다.
  - 배열의 위치값 = 키값, 배열의 값 = value
3. 소스코드 : 
```
    private int[] arr;
    public MyHashMap() {
        arr = new int[10000000];
        for(int i=0;i<arr.length;i++){
            arr[i] = -1;
        }
    }

    public void put(int key, int value) {
        arr[key] = value;
    }

    public int get(int key) {
        return arr[key];
    }

    public void remove(int key) {
        arr[key] = -1;
    }
```
4. 테스트코드
https://github.com/cri-kim/BlogPractice/blob/main/computer-science/java-algorithm-solution/src/test/java/hashmap/MyHashMapTest.java
## 보석과 돌
1. 풀이 시간 : 5분 내외
2. 동작
  - 모든 문자들로 contains 요소를 확인하는 탐색
3. 소스코드
```
    public int numJewelsInStones(String jewels, String stones) {
        char[] chars = stones.toCharArray();
        int cnt = 0;
        for(int i=0;i<stones.length();i++){
            if(jewels.contains(String.valueOf(stones.charAt(i)))){
                cnt++;
            }
        }
        return cnt;
    }
```
4. 테스트 코드
https://github.com/cri-kim/BlogPractice/blob/main/computer-science/java-algorithm-solution/src/test/java/hashmap/LeetCode771Test.java
## 중복 문자 없는 가장 긴 부분 문자열
1. 풀이 시간 : 10분 내외
2. 동작 :
  - 반복 문자가 있는지 확인하는 메소드 생성
  - 문자열의 길이를 돌며 반복문자가 있다면 가장 길이가 큰 값과 비교하고 다음 값을 사용하여 루프를 진행한다.
  - 가장 문자열의 길이가 큰 값을 저장한다.
3. 소스코드 :
```
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        String max = "";
        int start = 0;
        for(int end=1;end < n+1;end++){
            String s1 = s.substring(start,end);
            if(hasRepeatingCharacters(s1)){
                start++;
                end--;
                continue;
            }
            if(max.length() < s1.length()){
                max = s1;
            }
        }
        return max.length();
    }
    public boolean hasRepeatingCharacters(String s){
        char[] chars = s.toCharArray();
        Set<Character> set = new HashSet<>();
        for(char ch:chars){
            if(set.contains(ch)){
                return true;
            }
            set.add(ch);
        }
        return false;
    }
```
4. 테스트 코드
(https://github.com/cri-kim/BlogPractice/blob/main/computer-science/java-algorithm-solution/src/test/java/hashmap/LeetCode3Test.java)
## 상위 K 빈도 요소
1. 풀이 시간 : 10분
2. 동작 :
  - 해시맵에 각 값이 사용된 횟수를 저장한다.
  - 값 기준으로 내림차순 정렬을 한다.
  - 내림차순 정렬된 리스트에서 필요한 값(k) 만큼을 반환한다.
3. 소스코드 :
```
   public int[] topKFrequent(int[] nums, int k) {
        int[] rs = new int[k];
        Map<Integer, Integer> fruquentElements = new HashMap<>();
        for(int num : nums){
            if(fruquentElements.containsKey(num)){
                int cnt = fruquentElements.get(num)+1;
                fruquentElements.put(num, cnt);
                continue;
            }
            fruquentElements.put(num, 1);
        }
        List<Integer> list = fruquentElements.entrySet().stream()
                .sorted(Map.Entry.<Integer, Integer> comparingByValue().reversed())
                .map(x->x.getKey())
                .collect(Collectors.toList());

        for(int i=0;i<k;i++){
            rs[i] = list.get(i);
        }

        return rs;
    }
```
4. 테스트 코드
https://github.com/cri-kim/BlogPractice/blob/main/computer-science/java-algorithm-solution/src/test/java/hashmap/LeetCode347Test.java