function scrollToTop() {
    window.scrollTo({
        top: 0,
    })
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top')
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block'
    } else {
        scrollTopButton.style.display = 'none'
    }
})