const searchEl = document.querySelector('.search');
/* document라는 객체는 HTML 자체이다. 
class가 search인 요소를 찾아서 searchEl 변수에 할당한다. */
const searchInputEl = searchEl.querySelector('input');
/* searchEl 안에서 input 요소를 찾아 searchInputEl 변수에 할당한다.  */

searchEl.addEventListener('click', function () {
/* searchEl에 이벤트 할당
이벤트 종류 : 'click' 클릭 시 function 실행 */
searchInputEl.focus();
/* InputEl에 focus를 강제 적용해주는 명령이다. 
javascript에서 input 요소를 대상으로 주로 사용한다.  */
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused'); 
    /* searchEl 객체에 class 'focused'를 추가한다.  */
    searchInputEl.setAttribute('placeholder', '통합검색');
    /* html 속성을 Attribute라고 부른다.
    setAttribute : 속성을 추가해준다.
    첫번째 인수로 속성의 종류, 두번째 인수로 속성에 들어갈 값을 입력한다.
     */
});

searchInputEl.addEventListener('blur', function () { /* blur : focus의 반대 */
    searchEl.classList.remove('focused'); 
    /* searchEl 객체에 class 'focused'를 제거한다. */
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges'); //header의 badges를 객체로 선택한다.

window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500) { //window의 scrollY 속성이 실시간으로 갱신된다.
        // 배지 숨기기
        badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간(s), 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
            /* opacity 속성처럼 값을 숫자로 입력하는 속성들은,
             전원 효과(transition 속성이나 GSAP 라이브러리 등)을 통해 요소의 
             전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어줄 수 있지만, 
             display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 
             존재하지 않기 때문에, 자연스러운 전환 효과를 적용할 수 없다. */
        }) 
    }
    else {
        // 배지 보이기
        badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        }) 
    }
}, 300)); // 0.3ms 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지한다.

    /* window는 '브라우저의 창'(보고있는 화면 자체) 
    화면 자체에 'scroll' 속성을 사용해서 화면이 scroll돠면 함수를 실행한다. */
 
    /* 함수 제어 방법
    프로그램이 커질수록 함수가 계속 실행되며 과부하가 걸릴 수 있기 때문에 lodash cdn의 코드를
    .html에 script로 붙여넣어 제어 함수를 설정해준다. 
    _.throttle(함수, 시간) : throttle 메소드로 scroll 함수 실행 시간을 제어한다.  */