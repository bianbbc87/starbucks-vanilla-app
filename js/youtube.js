 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
   new YT.Player('player', { //Player 메서드 실행
    /* 여기서의 플레이어는 id="playe", id라고 앞에 '#'을 붙일 필요는 없다. */
     videoId: 'An6LvWQuj_8', // 어떤 비디오인지에 대한 id
     playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생 시 id를 동일하게 유지하도록 한다. 
     },
     /* vars는 '객체들' players 객체들에 대한 속성 추가 */ 

     events: {
        /* 객체 안에 함수가 들어있는 것을 '메서드'라고 부른다.  */
        onReady: function(event) { 
            /* 영상 실행에 대한 데이터를 event를 통해 받아 내부에서 활용한다. */
            event.target.mute() // 음소거(위에서는 선언 어려움)    
        }
     }
   });
 }
