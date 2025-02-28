document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.header_banner img:nth-child(1)');  // 메뉴 아이콘
    const navMenu = document.querySelector('.header_inner nav');  // 네비게이션 메뉴
    
    // 메뉴 아이콘 클릭 시 nav 메뉴 보이기/숨기기
    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');  // active 클래스 토글
    });
});

