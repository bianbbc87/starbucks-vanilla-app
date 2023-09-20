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



    const fadeEls = document.querySelectorAll('.visual .fade-in'); /* 뒤에 명시하는 선택자들을 모두 찾아 객체에 저장  */
    fadeEls.forEach(function(fadeEl, index) { /* fadeEls의 요소 1개에 대한 fadeEl와 반복의 횟수 index */
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, /* (s) 몇 초 후에 시작될 것인가?
        반복을 하며 index의 값은 0, 1, 2.. 올라간다. 즉, 0.7, 1.4, 2.1... 동작 시작 시간이 점점 쌓인다. */
        opacity: 1 /* 원래 css에서 0이었던 값을 1로 변환 */
    }); /* 애니메이션 처리 */
    }); /* fade-in 요소들의 개수만큼 forEach 메서드 실행 */

    /* 위와 같이 자동화 구조가 필요하다 !!! */

    new Swiper('.notice-line .swiper', {
        direction: 'vertical', /* 수직으로 슬라이드 */
        autoplay: true, /* 자동 재생 */
        loop: true /* 반복 재생 */
    });
    /* 클래스 생성자 */
    /* new Swiper(css 선택자, 옵션(객체 데이터 형식)); */

    new Swiper('.promotion .swiper', {
        /* direction: 'horizontal'이지만 기본 형식이라서 생략 */
        slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
        spaceBetween: 10, // 슬라이드 사이 여백 
        centeredSlides: true, // 1번 슬라이드가 가운데 보이기
        loop: true,
        autoplay: {
            delay: 5000
            /* 0.5초 간격으로 이미지가 슬라이드
            기본값은 3000(3초) */
        },
        /* 자동 재생에 객체 데이터를 할당해주면 옵션을 넣을 수 있다. */

        pagination: {
            el: '.promotion .swiper-pagination', // 페이지 요소 선택자
            /* 선택자에 맞는 요소를 찾아서 페이지 요소를 찾아준다. */
            clickable: true // 사용자의 페이지 번호 요소 제어
            /* 클릭으로 제어 가능 */
        },
        navigation: {
            prevEl: '.promotion .swiper-prev',
            nextEl: '.promotion .swiper-next'
        }
        /* 해당 선택자 요소를 찾아서 이전 스타일과 다음 스타일이 나타나도록 해준다. */
    });