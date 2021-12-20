## 회문 연결 리스트(Palindrome Linked List)
- 진행 시간 : 4분
### 동작
1. 회문 판별 메소드 생성(true/false 반환)
2. 루프를 통해 연결리스트를 끝까지 읽고 값을 string으로 저장하고 회문 판별 메소드로 확인
### 소스코드
```
    public boolean isPalindrome(ListNode head) {
        String input = "";
        ListNode node = head;
        while(node.next != null){
            input += String.valueOf(node.val);
            node = node.next;
        }
        input += String.valueOf(node.val);
        return isPalindrome(input);
    }
    public boolean isPalindrome(String s) {
        StringBuffer sb = new StringBuffer(s).reverse();

        return s.equals(sb.toString());
    }
```
## 두 정렬 리스트의 병합(Merge Two Sorted Lists)
- 진행시간 : 60분

### 동작
1. 순회하며 값을 담을 list node 생성한다.
2. l1, l2 listnode를 순회하며 각 값을 비교한다.
3. 값이 null인 경우 최대 크기인 100 이상(101)을 반환한다.
4. 두 리스트 노드의 값을 비교하여 새로운 노드에 넣는다.
5. 순회하며 노드를 담을 노드의 다음 노드에 새로운 노드를 넣는다.
6. 두 리스트 노드가 null을 반환하면 순회를 멈춘다.
7. 값을 담은 노드를 반환한다.

### 소스코드
```
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode root = new ListNode();
        ListNode head = root;
        while(!(l1 == null && l2 == null)){
            int v1 = l1 != null ? l1.val : 101;
            int v2 = l2 != null ? l2.val : 101;
            ListNode newNode = new ListNode();
            if(v1 >= v2){
                newNode.val = v2;
                l2 = l2.next;
            }else{
                newNode.val = v1;
                l1 = l1.next;
            }
            root.next = newNode;
            root = root.next;
        }
        return head.next;
    }
```
### 테스트 코드
```
    @Test
    void mergeTwoListsTest(){
        LeetCode21 method = new LeetCode21();

        ListNode l1 = new ListNode();
        ListNode l2 = new ListNode();
        setListNode(l1, new int[]{1,2,4});
        setListNode(l2, new int[]{1,3,4});
        //printListNode(method.mergeTwoLists(l1.next,l2.next));
        assertThat(method.mergeTwoLists(l1.next,l2.next).val).isEqualTo(1);

    }

    //예시 만드는데 약 20분
    private void printListNode(ListNode root){
        ListNode temp = root.next;
        while(temp !=null){
            System.out.println(temp.val);
            temp = temp.next;
        }
    }
    private void setListNode(ListNode root, int[] arr){
        for(int i=0 ; i < arr.length ; i++){
            insertListNode(root, arr[i]);
        }
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
```
## 역순 연결 리스트(Reverse Linked List)
- 진행시간 : 17분
### 동작
1. 역순으로 리스트노드를 담을 리스트 노드를 생성한다.
2. 조회할 노드를 순회하며 순차적으로 리스트 노드에 값을 넣는다.
### 소스코드
```
    public ListNode reverseList(ListNode head) {
        ListNode reveredNode = null;
        while(head != null){
            ListNode newNode = new ListNode(head.val, reveredNode);
            reveredNode = newNode;
            head = head.next;
        }
        return reveredNode;
    }
```
### 테스트 코드
```
    @Test
    void reverseListTest(){
        LeetCode206 method = new LeetCode206();

        ListNode head = new ListNode();
        setListNode(head, new int[]{1,2,3,4,5});
        ListNode root = method.reverseList(head);
        int[] expected = new int[]{5,4,3,2,1};

        for(int i=0;i<expected.length;i++){
            assertEquals(root.val, expected[i]);
            root = root.next;
        }
    }
```
## 두 수의 덧셈(Add Two Numbers)
- 진행시간 : 46분
### 동작
1. 리스트 insert 메소드를 만든다.
2. 두 리스트의 값을 순회하며 더한 값을 만든다.
2-1. 두 리스트의 각 요소를 더하고, 10이 넘으면 해당 값을 다음 더하기 수식으로 넘긴다.
2-2. 더한 값을 string 으로 만들며 이어붙인다.(이어붙이면서 역순으로 저장됨)
3. 새로운 리스트 노드에 값을 저장한다.
### 소스코드
```
    private static final int ASCII_NUMBER_START = 48;
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int rem = 0;
        StringBuilder rs = new StringBuilder();

        while(l1 != null || l2 != null){
            int sum = (l1==null?0:l1.val) + (l2==null?0:l2.val);
            sum += rem;
            rem = sum/10;
            rs.append(sum%10);
            l1 = l1==null?null:l1.next;
            l2 = l2==null?null:l2.next;
        }
        if(rem > 0){
            rs.append(rem);
        }
        ListNode reveredNode = new ListNode();
        for(int i=0;i<rs.length();i++){
            insertListNode(reveredNode, (int)rs.charAt(i) - ASCII_NUMBER_START);
        }
        return reveredNode.next;
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
```
### 테스트 코드
```
    @Test
    void mergeTwoListsTest(){
        LeetCode21 method = new LeetCode21();

        ListNode l1 = new ListNode();
        ListNode l2 = new ListNode();
        setListNode(l1, new int[]{1,2,4});
        setListNode(l2, new int[]{1,3,4});
        //printListNode(method.mergeTwoLists(l1.next,l2.next));
        assertThat(method.mergeTwoLists(l1.next,l2.next).val).isEqualTo(1);

    }
```
## 페어의 노드 스왑(Swap Nodes in Pairs)
- 진행시간 : 5분
### 동작
1. 리스트를 순회하면서 swap 한다.
2. 기존에 다음 리스트를 읽는 것이 아닌 노드의 next.next 를 읽는다.(+2 씩)
3. 널값일 경우에는 기존 값 그대로 반환한다.
4. 스왑할 수 없으면 순회를 멈추고 값을 반환한다.
### 소스코드
```
    public ListNode swapPairs(ListNode head) {
        if(head == null){
            return head;
        }
        ListNode rs = head;
        while(head != null){
            if(head.next != null){
                int temp = head.val;
                head.val = head.next.val;
                head.next.val = temp;
                head=head.next.next;
            }else{
                break;
            }
        }
        return rs;
    }
```
### 테스트 코드
```
    @Test
    void swapPairsTest(){
        LeetCode24 method = new LeetCode24();

        ListNode head = new ListNode();
        setListNode(head, new int[]{});
        ListNode root = method.swapPairs(head.next);
        int[] expected = new int[]{};
        for(int i=0;i<expected.length;i++){
            assertEquals(root.val, expected[i]);
            root = root.next;
        }
    }
```
## 홀짝 연결 리스트(Odd Even Linked List)
- 진행시간 : 20분
### 동작
1. `위치` 값을 기준으로 홀수/짝수를 분리한다.
2. 홀수 위치의 ListNode, 짝수 위치의 ListNode를 분리한다.
3. 홀수 값의 next 에 짝수 값의 ListNode 를 넣고 결과를 반환한다.
### 소스코드
```

    public ListNode oddEvenList(ListNode head) {
        if(head == null){
            return head;
        }
        ListNode rs = new ListNode();
        ListNode odd = new ListNode();
        ListNode even = new ListNode();
        int loc = 1;
        while(head!= null){
            int temp = head.val;
            if(loc % 2 == 1){
                insertListNode(odd,temp);
            }else{
                insertListNode(even,temp);
            }
            head = head.next;
            loc++;
        }
        rs = odd.next;
        while(odd.next != null){
            odd= odd.next;
        }
        odd.next =even.next;

        return rs;
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
```
```
## 역순 연결 리스트 II(Reverse Linked List II)
- 진행시간 : 25분
### 동작
1. 앞에서 진행한 문제의 총 집합이다.
2. 처음부터 left 위치까지의 listNode를 분리한다.
3. left ~ right 위치까지 listNode를 분리한다.
4. right ~ 끝까지 listNode를 분리한다.
5. 만들어진 3개의 listNode를 병합한다.
6. 단, left, right 의 값이 동일하면 바로 반환한다.
### 소스코드
```
    public ListNode reverseBetween(ListNode head, int left, int right) {
        if(left == right){
            return head;
        }

        int size = getListNodeSize(head);
        ListNode prev = splitListNode(head,1,left-1);
        ListNode mid = reverseList(splitListNode(head, left,right));
        ListNode aft = splitListNode(head, right+1, size);

        ListNode rs = mergeTwoLists(prev,mergeTwoLists(mid,aft));

        return rs;
    }

    public ListNode splitListNode(ListNode head, int start, int end) {
        ListNode newNode = new ListNode();
        ListNode rs = newNode;
        int cur = 1;
        while(head != null || cur < end){
            if(cur >= start && cur<=end){
                insertListNode(newNode, head.val);
            }
            head = head.next;
            cur++;
        }
        return rs.next;
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

    public int getListNodeSize(ListNode root) {
        int count = 0;
        while(root != null){
            root = root.next;
            count++;
        }
        return count;
    }
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode root = new ListNode();
        ListNode head = root;
        while(l1 != null){
            ListNode newNode = new ListNode(l1.val);
            l1 = l1.next;
            root.next = newNode;
            root = root.next;
        }
        while(l2 != null){
            ListNode newNode = new ListNode(l2.val);
            l2 = l2.next;
            root.next = newNode;
            root = root.next;
        }
        return head.next;
    }
    public ListNode reverseList(ListNode head) {
        ListNode reveredNode = null;
        while(head != null){
            ListNode newNode = new ListNode(head.val, reveredNode);
            reveredNode = newNode;
            head = head.next;
        }
        return reveredNode;
    }
```
### 테스트 코드
```
    @Test
    void reverseBetweenTest(){
        LeetCode92 method = new LeetCode92();
        ListNode head = new ListNode();
        setListNode(head, new int[]{1,2,3,4,5});
        ListNode root = method.reverseBetween(head.next, 2,4);
        int[] expected = new int[]{1,4,3,2,5};
        for(int i=0;i<expected.length;i++){
            assertEquals(expected[i], root.val);
            root = root.next;
        }
    }

    @Test
    void splitListNodeTest(){
        LeetCode92 method = new LeetCode92();
        ListNode head = new ListNode();
        setListNode(head, new int[]{1,2,3,4,5});
        int[] expected = new int[]{2,3};
        ListNode root =
                method.splitListNode(head.next,2,3);
        for(int i=0;i<expected.length;i++){
            assertEquals(expected[i], root.val);
            root = root.next;
        }
    }

    @Test
    void getListNodeSizeTest(){
        LeetCode92 method = new LeetCode92();
        ListNode head = new ListNode();
        setListNode(head, new int[]{1,2,3,4,5});
        int size =
                method.getListNodeSize(head.next);
        assertEquals(size, 5);
    }
```