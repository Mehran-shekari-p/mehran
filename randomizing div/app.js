$(document).ready(init);

function init() {
    var parent = $('.parent').append('<div class="child"></div>');

    $('.but').click(function() {
        var child = $('.child');
        var top = ($('.child')[0].offsetTop);
        var left = ($('.child')[0].offsetLeft);

        var rand_t = Math.floor(Math.random() * 520);
        var rand_l = Math.floor(Math.random() * parent.width());
        if (rand_l <= parent.width() - 80) {
            left = rand_l;
        }
        top = rand_t;

        child.css({
            'width': '80px',
            'height': '80px',
            'border': '1px solid pink',
            'border-radius': '50%',
            'position': ' absolute',
            'top': top + 'px',
            'left': left + 'px',
            'transition': '.5s',
            'background-color': 'pink',
            'opacity': '1',


        });
    });

};