function trackScroll() {
    var scrolled = window.pageYOffset;
    if (scrolled > 2200) {
        setTimeout(showElements, 500);
    }
    // if (scrolled < 1500) {
    //     hideCards();
    //   }
}

function hideCards() {
    let lastCards = document.querySelectorAll('.character');
    for (let i = 10; i < 20; i++){
        lastCards[i].style.display = 'none';
    }
}

function showElements() {
    let lastCards = document.querySelectorAll('.character');
    for (let i = 10; i < 20; i++){
        lastCards[i].style.display = '';
    }
}

export { trackScroll, hideCards, showElements }
