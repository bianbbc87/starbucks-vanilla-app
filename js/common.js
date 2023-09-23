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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
/* textContent : 글자 안에 있는 값을 알아내거나 지정할 수 있다. 
현재 날짜 정보 가져오기
1. new Date() 생성자 함수 실행
2. Date() 안의 getFullYear()을 통해 현재 년도 정보를 thisYear의 클래스가 가진 저장한다.  */