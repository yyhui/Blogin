function addArrow() {
    var items = document.getElementsByClassName('continue'),
        arrow;

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('mouseenter', function() {
            arrow = this.getElementsByClassName('con-arrow')[0];
            setTimeout(function() {
                arrow.className += ' show';
            }, 20);
        });
        items[i].addEventListener('mouseleave', function() {
            arrow = this.getElementsByClassName('con-arrow')[0];
            setTimeout(function() {
                arrow.className = 'con-arrow';
            }, 20);
        });
    }
}

function nextPage() {
    var articles = document.getElementsByClassName('article'),
        images = ['images/lake.jpg', 'images/lion.jpg', 'images/slovenia.jpg'],
        tmp;

    for (var i = 0; i < articles.length; i++) {
        tmp = articles[i].getElementsByTagName('img')[0];
        tmp.src = images[i];
        articles[i].getElementsByTagName('h2')[0].innerHTML = '<a>Test</a>';
        articles[i].getElementsByClassName('brief')[0].innerHTML = 'test test test';
    }
}

window.onload = function() {
    var pre = document.getElementsByClassName('left')[0],
        next = document.getElementsByClassName('right')[0];

    addArrow();

    pre.addEventListener('click', nextPage);

    next.addEventListener('click', nextPage);
};
