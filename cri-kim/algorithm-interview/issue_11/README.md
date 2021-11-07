# 배열
## 두수의 합(Two Sum)
- 진행 시간 : 5분
### 동작
- 이중 for 문을 사용하여 두수의 합이 target과 동일한 케이스를 찾았다.
### 소스코드
```
public class LeetCode1 {
    public int[] twoSum(int[] nums, int target) {
        int[] rs = new int[2];
        for(int i=0;i<nums.length-1;i++){
            for(int j=i+1; j<nums.length;j++){
                if(nums[i]+nums[j] == target){
                    rs[0]=i;
                    rs[1]=j;
                    break;
                }
            }
        }
        return rs;
    }
}
```
### 테스트 코드
```
public class LeetCode1Test {
    @Test
    void twoSum(){
        LeetCode1 method= new LeetCode1();
        assertThat(method
                .twoSum(new int[]{2,7,11,15}, 9))
        .contains(0);
    }
}
```
## 빗물 트래핑(Trapping Rain Water)
- 진행 시간(1회차) : 실패
- 진행 시간(2회차) : 힌트 읽고 16분
### 힌트
- 현재 기준으로 양 옆의 가장 큰 값을 찾으시오.
### 동작
- 현재를 기준(target)으로 양측의 가장 큰 값을 찾는다.
- 양측의 가장 큰 값과 현재 값을 비교하여 고일 수 있는 문의 길이를 찾는다.
- 구해진 값을 저장하고 다음 기준으로 넘어간다.

### 동작2 & 회고
- 현재 모든 값을 탐색하는 brute force(완점탐색)을 진행하였다. 하지만 related topic에 Dynamic Programming이 있는 것을 보아 더 나은 방법이 있을 것이라 생각한다.
- 2차원으로는 점화식을 찾지 못했다. 
- 3차원으로 타겟값, 좌측 큰값, 우측 큰값을 저장하여 비교하였다. 이를 통해 속도를 더 줄일 수 있었다.
- 좌측 큰 값은 for문을 돌며 앞에 있는 가장 큰 값과 비교하여 저장하였다.
- 우측 큰 값은 계속 루프를 통해 현재 위치부터 마지막 위치까지의 값을 비교하여 가장 큰 값을 넣었다.
- 우측 큰 값을 찾는 빠른 방법을 찾으면 O(n)의 속도를 가질 수 있을 것이다.
### 소스코드1
```
public int trap(int[] height) {
    int rs = 0;
    int n = height.length;
    if(n < 3){
        return 0;
    }

    for(int i=0;i<n;i++){
        int hLeft = heighestLeft(height,i);
        int hRight = heighestRight(height,i);
        if(hLeft == 0 || hRight == 0){
            continue;
        }
        int h = Math.min(hLeft,hRight)-height[i];
        if(h >0)
        {
            rs += h;
        }
    }
    return rs;
}
public int heighestLeft(int[] height, int cur){
    int h = 0;
    for(int i=0;i<cur+1;i++){
       if( height[i] > h){
           h = height[i];
       }
    }
    return h == height[cur]?0:h;
}
public int heighestRight(int[] height, int cur){
    int h = 0;
    for(int i=cur+1;i<height.length;i++){
        if( height[i] > h){
            h = height[i];
        }
    }
    return h == height[cur]?0:h;
}
```
### 소스코드2
```
    public int trap2(int[] height) {
        int rs = 0;
        int n = height.length;
        int[][] dp = new int[n][2];

        if(n < 3){
            return 0;
        }
        dp[0][0] = height[0];//left
        dp[0][1] = height[0];//right
        for(int i=1;i<n;i++){
            dp[i][0] = Math.max(dp[i-1][0], height[i]);
            dp[i][1] = Math.max(heighestRight(height, i),height[i]);

            int min = Math.min(dp[i][0], dp[i][1])-height[i];
            System.out.println(dp[i][0]+","+dp[i][1]+","+min);
            rs += min > 0? min:0;
        }
        return rs;
    }
```
## 세 수의 합(3Sum)
> 정수 배열 nums 이 주어진다.
> 반환 값은 nums 배열 안의 3개의 정수이다.
> 반환될 세 정수의 위칫값(nums 배열 내의 위치)는 서로 다르다.
> 세 수를 더하면 0이 반환된다.
> 삼중항으로 풀지 마세요.
- 진행 시간 : 60분 초과 

### 동작
- 주어진 nums 배열이 빈 값이면 빈 배열`[]`을 반환한다.
- 주어진 nums 배열이 3개 이하면 빈 배열`[]`을 반환한다.
- 이전 twoSum의 알고리즘을 활용하였다.
- 배열을 선 정렬 하여, 이미 탐색한 값, 앞으로 탐색이 필요 없는 값을 없앴다.
- 시간 초과 뿐만 아니라 too long 오류가 떳기 때문에 코드를 최소한으로 줄였다.
- 해당 문제는 삼항식이 나오면 too long 오류를 출력한다.
### 소스코드
```

    public Set<List<Integer>> set = new HashSet<>();
    public List<List<Integer>> threeSum(int[] nums) {
        if(nums.length < 3){
            return new ArrayList<>();
        }

        Arrays.sort(nums);
        for(int i=0;i<nums.length-2 && nums[i] <= 0;i++){
            if(i > 0 && nums[i] == nums[i-1]) continue;
            twoSum(nums, i);
        }


        return new ArrayList<>(set);
    }

    public void twoSum(int[] nums, int i){
        for(int j=nums.length-1;j > i+1 ;j--){
            if(j < nums.length-1 && nums[j] == nums[j+1]) continue;
            int z = j-1;
            while(z > i && nums[i] + nums[j] + nums[z] > 0){
                z--;
            }
            if(z > i &&nums[i] + nums[j] + nums[z] == 0){
                set.add(Arrays.asList(nums[i],nums[j],nums[z]));
            }
        }
    }
```
### 테스트 코드
```
    @Test
    void threeSumTest(){
        LeetCode15 method = new LeetCode15();
        assertThat(method.threeSum(new int[]{})).isEmpty();
        assertThat(method.threeSum(new int[]{-1,0,1,2,-1,-4}).get(0)).contains(-1,-1,2);
    }
```
## 배열 파티션 1(Array Partition I)
- 진행시간 : 5분
### 동작
- 배열을 오름차순으로 정렬한다.
- 최소한의 루프를 돌기 위해 2의 배수로 값을 증가시키며 값을 비교 후, 저장한다.
- nums의 갯수는 2n개로 지정되어있기 때문에 2의 배수로 값을 증가시켜도 된다.
### 소스코드
```
    public int arrayPairSum(int[] nums) {
        int rs = 0;
        Arrays.sort(nums);
        for(int i=0;i<nums.length;i = i+2){
            rs += Math.min(nums[i],nums[i+1]);
        }
        return rs;
    }
```
### 테스트코드
```
    @Test
    void arrayPairSumTest(){
        LeetCode561 method = new LeetCode561();
        assertEquals(4, method.arrayPairSum(new int[]{1,4,3,2}));
    }
```

## 자신을 제외한 배열의 곱(Product of Array Except Self)
- 진행 시간 : 10분
### 동작
- 배열의 값 전체를 곱한 값을 반환한다.
- 배열을 순회하며 `곱한 값 / 해당 값`을 계산하여 배열에 넣는다.
- 예외 처리
	- 배열의 값은 `-30 ~ 30`이 들어갈 수 있다.
	- 그러므로, 0에 대한 처리가 필요하다.
	- 0의 갯수를 세고, 1일 경우에는 0인 경우와 아닌 경우를 나눈다.
	- 0의 갯수가 1보다 크면 모두 0이다.
	- 0이 없다면 그대로 진행한다.
### 소스코드
```
public int[] productExceptSelf(int[] nums) {
    int zeroCnt = 0;
    int multi = 1;
    for(int i=0;i<nums.length;i++){
        if(nums[i] == 0){
            zeroCnt++;
            continue;
        }
        multi *= nums[i];
    }
    if(zeroCnt > 1){
        multi = 0;
    }

    for(int i=0;i<nums.length;i++){
        if(zeroCnt == 1){
            if(nums[i] == 0){
                nums[i] = multi;
                continue;
            }
            nums[i] = 0;
            continue;
        }
        if(zeroCnt > 1){
            nums[i] = 0;
            continue;
        }
        nums[i] = multi / nums[i];
    }
    return nums;
}
```
### 테스트 코드
```
@Test
void productExceptSelfTest(){
    LeetCode238 method = new LeetCode238();
    int[] output = new int[]{24,12,8,6};
    assertEquals(output[0],
            method.productExceptSelf(new int[]{1,2,3,4})[0]);
}
```

## 주식을 사고팔기 가장 좋은 시점(maxProfitTime)
- 진행 시간 : 7분(1회차, 시간초과), 이후 다른 내용 참고

### 동작
- for문을 통해 모든 값을 비교하고 시점을 찾아 넣었다.(시간초과)
- DP(Dynamic Programming)으로 문제 풀이 방법의 힌트를 얻고 진행하였다.
- 길이가 0 일 경우에는 0을 반환한다.
- 점화식을 만들 수 있는 배열을 생성한다`(dp[prices.length])`
- 이전 값으로부터 가장 작은 값을 저장하고, dp에 현재 위치의 가격과의 비교값을 저장한다.
- max 값을 저장하고 반환한다.
### 소스코드1(시간초과)
```
public int maxProfitTime(int[] prices) {
    int profit = 0;
    for(int i=0;i<prices.length-1;i++){
        int priceOfStock = prices[i];
        int priceOfSell = Arrays.stream(Arrays.copyOfRange(prices,i+1, prices.length)).max().getAsInt();
        if(priceOfSell - priceOfStock > profit){
            profit = priceOfSell - priceOfStock;
        }
    }
    return profit;
}
```
### 소스코드2(다른 내용 참고)
```
public int maxProfitTime(int[] prices ) {
    int n= prices.length;
    if(n == 0 ){
        return 0;
    }
    int[] dp = new int[n];
    int max = 0;
    int min = prices[0];
    for(int i=1;i<n;i++){
        min = Math.min(min, prices[i]);
        dp[i] =prices[i] - min;
        if(dp[i] > max) {
            max = dp[i];
        }
    }
    return max;
}
```
### 테스트 코드
```
@Test
void maxProfitTest(){
    LeetCode121 method = new LeetCode121();
    assertEquals(5, method.maxProfitTime(new int[]{7,1,5,3,6,4}));
}
```