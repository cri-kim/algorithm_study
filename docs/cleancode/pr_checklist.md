# PR(Pull Request)
> PR은 원격 저장소에 코드기여를 하는 기본이 되는 동작입니다.

> 스터디 참가자는 build-knowledge-team repository에 **fork** 해주세요.  
![image](https://user-images.githubusercontent.com/47730634/132830554-56de8150-107e-4af0-bd5b-6d7facf91a0c.png)
# 공통
- Merge 시에는 모두 Pull Request 를 통해 code review를 받고 진행한다.
- 코드 리뷰의 효율을 위해 내용은 인당 300-500줄 미만으로 작성한다.
# 자바
- 자바 코드 컨벤션을 지키면서 프로그래밍했는가?
  * https://google.github.io/styleguide/javaguide.html, https://myeonguni.tistory.com/1596 참고한다.
  * IntelliJ 또는 Eclipse 통합 개발 도구에서 formatting을 한다.
- 한 메서드에 오직 한 단계의 들여쓰기(indent)만 허용했는가?
- else 예약어를 쓰지 않았는가?
- 모든 원시값과 문자열을 포장했는가?
- 콜렉션에 대해 일급 콜렉션을 적용했는가?
- 3개 이상의 인스턴스 변수를 가진 클래스를 구현하지 않았는가?
  * 쉽지 않은 연습일 수 있다. 가능하면 인스턴스 변수의 수를 줄이기 위해 노력한다.
- getter/setter 없이 구현했는가?
  * 핵심 로직을 구현하는 도메인 객체에 getter/setter를 쓰지 않고 구현했는가?
  * 단, DTO는 허용한다.
- 메소드의 인자 수를 제한했는가? 
  * 4개 이상의 인자는 허용하지 않는다.
  * 3개도 가능하면 줄이기 위해 노력해 본다.
- 코드 한 줄에 점(.)을 하나만 허용했는가?
  * 디미터(Demeter)의 법칙(“친구하고만 대화하라”)을 지켰는가?
  * 예를 들어 location.current.representation.substring(0, 1)와 같이 여러 개의 점(.)이 등장하면 리팩토링할 부분을 찾아본다.
- 메소드가 한가지 일만 담당하도록 구현했는가?
- 클래스를 작게 유지하기 위해 노력했는가?
## 참고
[우아한테크코스](https://github.com/woowacourse/woowacourse-docs/blob/master/cleancode/pr_checklist.md)
[뱅크샐러드](https://blog.banksalad.com/)
