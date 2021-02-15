function block(click, show, hide) {
    const $click = document.querySelector(click);
    const $show = document.querySelector(show);
    const $hide = document.querySelectorAll(hide);

    $click.addEventListener('click', event);

    function event($show, $hide) {
        for (var i = 0; i < 5; i++) {
            $hide[i].removeClass(".d-block");
        }
        $show.addClass(".d-block");
    }
}

function flex(click, show, hide) {
    const $click = document.querySelector(click);
    const $show = document.querySelector(show);
    const $hide = document.querySelectorAll(hide);

    $click.addEventListener('click', event);

    function event($show, $hide) {
        for (var i = 0; i < 5; i++) {
            $hide[i].removeClass(".d-flex");
        }
        $show.addClass(".d-flex");
    }
}

flex('#select1', '.option1', '.option');
flex('#select2', '.option2', '.option');