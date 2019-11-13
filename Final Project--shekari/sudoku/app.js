window.onload = init;

function init() {
    var sudoku_body = document.getElementsByClassName('box-parent');
    var sudoku_outterbox = document.getElementsByClassName('box-child');
    var num = document.getElementsByClassName('number');
    var output = document.getElementById('output');

    var html = "";
    for (var i = 0; i < 9; i++) {
        html += '<div class="box-parent">';
        for (var j = 0; j < 9; j++) {
            html += '<div class="box-child">';
            html += '<input type="text" class="number" maxlength="1" value="">';
            html += '</div>';
        }
        html += '</div>';
    };
    output.innerHTML = html;

    // box-1-----------------
    num[7].value = "5";
    num[6].value = "8";
    // box-2------------------
    num[9].value = "4";
    num[11].value = "8";
    num[16].value = "2";
    // box-3---------------
    num[19].value = "2";
    num[20].value = "9";
    num[23].value = "4";
    num[26].value = "7";
    // box-4------------------
    num[29].value = "8";
    num[31].value = "2";
    num[35].value = "3";
    // box-5------------------
    num[36].value = "3";
    num[37].value = "7";
    num[38].value = "4";
    num[42].value = "2";
    num[43].value = "6";
    num[44].value = "1";
    // box-6----------------
    num[45].value = "2";
    num[51].value = "7";
    //box-7-----------------
    num[57].value = "2";
    num[60].value = "1";
    num[61].value = "3";
    // box-8---------------
    num[64].value = "9";
    num[65].value = "3";
    num[69].value = "6";
    num[70].value = "4";
    num[71].value = "2";
    // box-9--------------
    num[72].value = "6";
    num[73].value = "1";
    num[74].value = "2";
    num[75].value = "4";
    num[77].value = "3";
    num[79].value = "7";

    // function strats here-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

    num[0].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[1].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '7') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[2].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[3].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '3') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[4].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[5].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '2') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[8].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '4') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[10].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '3') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[12].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '7') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[13].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[14].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[15].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[17].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[18].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[21].addEventListener('change', function() {

        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[22].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[24].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[25].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '3') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[27].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[28].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[30].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '7') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[32].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[33].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[34].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '4') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[39].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '4') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[39].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[40].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[41].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[46].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[47].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[48].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '3') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[49].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '4') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[50].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[52].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[53].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[54].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '4') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[55].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[56].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '7') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[58].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '6') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[59].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[62].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[63].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[66].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '1') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[67].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[68].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '7') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[76].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '5') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[78].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '9') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });
    num[80].addEventListener('change', function() {
        var num0 = this.value;

        if (num0 == '8') {
            this.style.backgroundColor = "yellowgreen";
            this.style.color = "white";


        } else {
            this.style.backgroundColor = "red";
            this.style.color = "white";

        }

    });


    // for (var i = 0; i < 81; i++) {
    //     num[i].addEventListener('change', function() {
    //         var num0 = this.value;

    //         if (num0 == '4') {
    //             this.style.backgroundColor = "yellowgreen";
    //             this.style.color = "white";


    //         } else {
    //             this.style.backgroundColor = "red";
    //             this.style.color = "white";

    //         }

    //     });
    // }
};