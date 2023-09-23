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
const toTopEl = document.querySelector('#to-top');

    /* window는 '브라우저의 창'(보고있는 화면 자체) 
    화면 자체에 'scroll' 속성을 사용해서 화면이 scroll돠면 함수를 실행한다. */
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
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        })
    }
    else {
        // 배지 보이기
        badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        }) 
        // 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300)); // 0.3ms 단위로 부하를 줘서 함수가 우르르 실행되는 것을 방지한다.
 
    /* 함수 제어 방법
    프로그램이 커질수록 함수가 계속 실행되며 과부하가 걸릴 수 있기 때문에 lodash cdn의 코드를
    .html에 script로 붙여넣어 제어 함수를 설정해준다. 
    _.throttle(함수, 시간) : throttle 메소드로 scroll 함수 실행 시간을 제어한다.  */

    toTopEl.addEventListener('click', function() { /* <- 이벤트의 핸들러(함수) */
    gsap.to(window, .7, {
        scrollTo: 0 /* 위치를 0으로(맨 위로) 옮겨주겠다. */
    });
    });



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
        spaceBetween: 10, // 슬라이드 사이 여백 (px)
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

    new Swiper('.awards .swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        navigation: {
            prevEl: '.awards .swiper-prev',
            nextEl: '.awards .swiper-next'
        }
    })


    const promotionEl = document.querySelector('.promotion');
    /* promotion 클래스를 가진 객체 선언 */
    const promotionToggleBtn = document.querySelector('.toggle-promotion');
    let isHidePromotion = false;
    promotionToggleBtn.addEventListener('click', function() {
        isHidePromotion = !isHidePromotion 
        /* promotionToggleBtn을 click 시 값이 반대가 되도록 한다. */
        if(isHidePromotion){ /* TRUE */
// 숨김 처리 !
        promotionEl.classList.add('hide');
        } else { /* FALSE */
// 보임 처리 !
        promotionEl.classList.remove('hide');
        }
    });


    /* Floating 둥둥 떠다니는 애들 */

    // 범위 랜덤 함수(소수점 2자리까지)
    function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

    function floatingObject(selector, delay, size) {
        /* 직접 검색한 요소 대신 선택자를 이용해서 아래 애니메이션을 실행한다. */
       
        // gsap.to(요소, 시간, 옵션);
        gsap.to(
            selector, 
            random(1.5, 2.5), 
            {
            y: size, // y 축으로 얼마만큼 움직일 것인가? 밑으로 size 만큼.
            repeat: -1, // -1으 무한 반복
            yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생한다. 
            /* 아래로 내려오면 다시 위로 올라간다. */
            ease: Power1.easeInOut, /* gsap Easing */
            delay: random(0, delay) 
            /* 바로 실행될 수 있도록 시작은 0
            delay는 각 floating1, 2, 3에서 전달한 인수 
            초 후에 애니메이션을 실행한다. */
        });
    }

    floatingObject('.floating1', 1, 15); 
    floatingObject('.floating2', .5, 15); 
    floatingObject('.floating3', 1.5, 20); 
    /* floating이라는 클래스를 가진 공통 선택자 */


    const spyEls = document.querySelectorAll('section.scroll-spy');
    spyEls.forEach(function (spyEl) {
        /* spyEls 변수안의 각각의 요소들 spyEl을 이용하여 함수를 실행한다. */
        new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소들을 저장
            triggerHook: .8
            /* 뷰포트의 시작(위)은 0, 끝(아래)는 1을 기준으로,
            감시하려는 요소가 0.8 뷰포트 지점에 걸리면 trigger 된다. (실행된다. ) */
        })
        /* Scene : ScrollMagic 라이브러리를 통해서 각각의 요소들을 감시한다. */
        .setClassToggle(spyEl, 'show')// (토글할 요소, 토글할 클래스 이름)
        /* setClassToggle : html class를 지정하고 속성을 추가 혹은 제거한다. (Toggle) */
        .addTo(new ScrollMagic.Controller());
        /* addTo() : ScrollMagic을 위해 필요한 컨트롤러 
        new ScrollMegic.Controller() : 내부적으로 컨트롤할 수 있는 기능을 제공 */ 
    });

    const thisYear = document.querySelector('.this-year');
    thisYear.textContent = new Date().getFullYear();
    /* textContent : 글자 안에 있는 값을 알아내거나 지정할 수 있다. 
    현재 날짜 정보 가져오기
    1. new Date() 생성자 함수 실행
    2. Date() 안의 getFullYear()을 통해 현재 년도 정보를 thisYear의 클래스가 가진 저장한다.  */