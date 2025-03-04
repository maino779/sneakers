document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector('#navi'); // ナビゲーションメニュー
    const navLinks = document.querySelectorAll('.nav-menu a'); // メニュー内のリンク
    const hamburger = document.querySelector('.humburger'); // ハンバーガーメニュー

    // リンクをクリックしたときにメニューを非表示にする
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active'); // メニューを閉じる
            hamburger.classList.remove('active'); // ハンバーガーアイコンの状態をリセット
        });
    });

    // ハンバーガークリックでメニューの表示/非表示を切り替える
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


$(document).ready(function() {
    $('.slider').slick({
        arrows: true,  /* 矢印ボタンを表示 */
        centerMode: true,
        centerPadding: '50px',  /* パディングを適切に調整 */
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(window).scroll(function() {
    // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
