document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.header_banner img:nth-child(1)');  // 메뉴 아이콘
    const navMenu = document.querySelector('.header_inner nav');  // 네비게이션 메뉴

    // 메뉴 아이콘 클릭 시 nav 메뉴 보이기/숨기기
    menuIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');  // active 클래스 토글
    });
});

const text = `모든 것은 1946년 오디오 전문가인
James B. Lansing과
필터링되지 않은 사운드에 대한 
그의 사랑으로 시작되었습니다.`; // 백틱 사용

        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                let char = text[index] === " " ? "&nbsp;" : text[index]; // 띄어쓰기를 &nbsp;로 변환
                document.querySelector(".typing p").innerHTML += char; // innerHTML 사용
                index++;
                setTimeout(typeEffect, 100); // 속도 조절 가능
            } else {
                document.querySelector(".typing p").style.borderRight = "none"; // 커서 제거
            }
        }

        typeEffect();