# 스택과 큐
## 정리
- 스택(Stack)
  - 호출 함수들이나 웹페이지들의 목록 등과 같은 저장소의 특징은 가장 최근에 들어온 것이 가장 먼저 빠져나간다.(pop)
  - 삽입/삭제의 행위가 맨 위라는 특정 위치에서만 이루어진다.
  - 추상화된 데이터구조를 스택(Stack)이라고 한다.
  - 스택은 임의의 객체를 후입선출(LIFO, Last In First Out) 순서로 삽입/삭제한다.
- 큐(Qeueu)
  - 큐(Queue)는 대기열을 추상화한 데이터 구조이다. 
  - 큐에서 들어오고 빠져 나가는 삽입과 삭제는 선입선출(FIFO, First In First Out)의 순서를 따른다. 
  - 삽입은 큐의 rear, 삭제는 큐의 front라 불리는 위치에서 이루어진다.

## 유효한괄호(valid-parentheses)
- 시간 : 15분(IDE 없이)
### 과정
1. 문자를 하나씩 읽으며 스택의 top 값과 비교한다.
2. close 가 가능한 문자들일 경우 제거한다.
3. 불가능한경우 stack에 쌓는다.
4. 최종적으로 스택이 empty 상태이면 true, 아니면 false를 반환한다.

### 소스코드
```
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i=0;i<s.length();i++){
            if(stack.isEmpty()){
                stack.push(s.charAt(i));
                continue;
            }
            Character c1 = stack.peek();
            if(isMatch(c1, s.charAt(i))){
                stack.pop();
                continue;
            }
            stack.push(s.charAt(i));            
        }
        if(stack.isEmpty()){
            return true;
        }
        return false;
    }
    
    public boolean isMatch(char c1, char c2){
        if(c1 == '('){
            if(c2 == ')'){
                return true;
            }
        }
        if(c1 == '{'){
            if(c2 == '}'){
                return true;
            }
        }
        if(c1 == '['){
            if(c2 == ']'){
                return true;
            }
        }
        return false;        
    }
}
```
## 중복문자 제거(316. Remove Duplicate Letters)
- 시간 : 2시간 초과 (어떻게든 풀긴함 ㅜㅜ)
### 과정
1. 주어진 String의 char 를 하나씩 순회한다.
2. 정답을 담을 stack을 만든다.
3. 스택이 비어있을 경우, 탐색한 값을 등록한다. 그리고 데이터를 중복없이 들어가있는지 확인 하기 위해 Set을 생성하고 같이 넣어준다.
4. Set은 스택에 들어간 데이터를 확인하는 용도로 만들었다.
5. 선택한 문자가 스택에 들어간 값(이전에 등록된 값)보다 알파벳 순서상 앞인지 확인한다.
6. 순서상 앞일 경우, 뒤의 문자열에 해당 알파벳이 있는지 확인한다.
7. 6번을 loof 로 돌며 후 문자열에 값이 있을 경우, stack에서 제거한다.
8. 만약 현재 문자(5번의 문자)가 이미 stack에 있는 경우에는 앞서 스택을 구성한 것 이므로, 건너뛴다.
9. 문제대로 만들어진 stack을 문자열로 가공하여 반환한다.
 
### 소스코드
```
public String removeDuplicateLetters(String s) {
        Set<Character> set = new HashSet<>();
        Stack<Character> stack = new Stack<>();
        int n  = s.length();
        for(int i=0;i<n;i++){
            if(stack.isEmpty()){
                stack.push(s.charAt(i));
                set.add(s.charAt(i));
                continue;
            }

            while(!stack.isEmpty()) {
                char temp = stack.peek();
                if (temp > s.charAt(i)) {
                    if(set.contains(s.charAt(i))){
                        break;
                    }
                    if (hasLetterBack(s, i, temp)) {
                        char pop = stack.pop();
                        set.remove(pop);
                        continue;
                    }
                }
                break;
            }
           if(set.contains(s.charAt(i))){
                continue;
            }
            stack.push(s.charAt(i));
            set.add(s.charAt(i));
        }
        Character[] arr = new Character[stack.size()];
        arr = stack.toArray(arr);
        StringBuilder sb = new StringBuilder();
        for(Character c : arr){
            sb.append(c);
        }

        return sb.toString();
    }

    public boolean hasLetterBack(String s, int idx, char temp){
        return s.substring(idx).contains(String.valueOf(temp));
    }
```
### 테스트
```
    @Test
    public void removeDuplicateLettersTest() {
        LeetCode316 method = new LeetCode316();
        String expected="acdb";
        String actual = method.removeDuplicateLetters("cbacdcbc");
        assertEquals(expected, actual);
        assertEquals("abc", method.removeDuplicateLetters("abacb"));
    }
```
## 일일온도 (739. Daily Temperatures)
- 시간 : 9분
### 과정
1. 주어진 온도를 모두 순회한다.
2. 주어진 온도의 위치값을 가지고 이후의 온도들을 순회하며 더 따뜻한 날이 있는지 순회하고 반환한다.

### 소스코드
```
    public int[] dailyTemperatures(int[] temperatures) {
        int n=temperatures.length;
        int[] rs = new int[n];
        for(int i=0;i<n;i++){
            rs[i] = getWaitWarmerDay(temperatures,temperatures[i],i);
        }
        return rs;
    }
    public int getWaitWarmerDay(int[] temperatures, int temper, int s){
        int day = 0;
        for(int i=s;i<temperatures.length;i++,day++){
            if(temperatures[i] > temper){
                return day;
            }
        }
        return 0;
    }
```

## 큐를 이용한 스택 구현
- 시간 : 5분
### 과정
1. 자바에서 제공하는 Queue 를 사용하여 스택을 구현
2. Stack은 In/Out이 동일하므로, 새로 인입되는 값을 lastElement로 저장
3. pop의 경우, Queue 하나를 임의로 만들어 값을 옮겨 닮는다.

## 스택을 이용한 큐 구현
- 시간 : 5분
### 과정
1. 자바에서 제공하는 Stack 를 사용하여 스택을 구현
2. Queue은 FIRST OUT/LAST IN 구조, 처음 들어간 값을 firstElement로 저장
3. pop의 경우, Stack 하나를 임의로 만들어 값을 옮겨 닮는다.

## 원현 큐 디자인
- 시간 : 10분
### 과정
- 큐를 생성하는 과정에서 front/rear를 연결짓는다.

