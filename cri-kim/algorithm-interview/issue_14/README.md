## 원형 덱 디자인
- 진행시간 : 10분 내외로 기억

### 동작
1. 덱(deque)는 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료 구조 형태이다.
2. List 를 이용하여 쉽게 구현하였다.
3. index 0의 위치를 앞, index size-1의 값을 뒤로 지정하여 자료구조를 만들었다.
### 소스코드
```

    List<Integer> deque;
    int size;
    
    public MyCircularDeque(int k) {
        deque = new LinkedList<Integer>();
        size = k;
    }
    
    public boolean insertFront(int value) {
        if(isFull()) return false;
        
        deque.add(0,value);
        return true;
    }
    
    public boolean insertLast(int value) {
        if(isFull()) return false;
        deque.add(value);
        return true;
    }
    
    public boolean deleteFront() {
        if(isEmpty()) return false;
        deque.remove(0);
        return true;
    }
    
    public boolean deleteLast() {
        if(isEmpty()) return false;
        deque.remove(deque.size()-1);
        return true;
    }
    
    public int getFront() {
        if(isEmpty()) return -1;
        return deque.get(0);
    }
    
    public int getRear() {
        if(isEmpty()) return -1;
        return deque.get(deque.size()-1);
    }
    
    public boolean isEmpty() {
        return deque.size()==0;
    }
    
    public boolean isFull() {
        return deque.size() == size;
    }
```
## k개 정렬 리스트 병합
- 진행시간 : 60분내외
### 동작
1. [issue 12](https://github.com/cri-kim/build-knowledge-team/issues/12)에서 진행한 연결리스트의 복합 문제이다.
2. 자바에서 제공하는 priorityQueue 클래스를 사용하여 쉽게 진행하였다.
3. ListNode 들의 값을 하나씩 읽어 우선순위 큐에 넣는다.
4. 우선순위 큐에서는 삽입이 들어오면 sort 가 이루어진다. 기본적으로 오름차순으로 구현되어있다.
5. 우선순위 큐에서 읽은 내용을 ListNode 로 만들어 반환한다.
6. 문제에서 제시한 [], [[]] 의 경우는 null을 반환한다. 
6-1.ListNode의 value 값이 int로 되어있어서 새 인스턴스로 반환하면, 0이 출력된다. 
### 소스코드
```
    PriorityQueue<Integer> queue = new PriorityQueue<>();

    public ListNode mergeKLists(ListNode[] lists) {
        if(lists.length == 0)
            return null;

        for(int i=0;i<lists.length;i++){
            ListNode temp = lists[i];
            addListNodeToQueue(temp);
        }
        return asListNode();
    }

    public ListNode asListNode(){
        ListNode newListNode = new ListNode();

        while(!queue.isEmpty()){
            int value = queue.poll();
            insertListNode(newListNode, value);
        }
        return newListNode.next;
    }
    private void insertListNode(ListNode root, int i){
        ListNode newNode = new ListNode(i);
        if(root == null){
            root = newNode;
        }
        else{
            ListNode temp = root;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    public void addListNodeToQueue(ListNode node){
        while(node != null){
            queue.add(node.val);
            node = node.next;
        }
    }
```

