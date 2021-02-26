// gender
var gender_mv_boy = function() {
    MvBoy.classList.remove("d-none");
    MvGirl.classList.add("d-none");
    ImageBoy.classList.remove("d-none");
    ImageGirl.classList.add("d-none");
    OptionBoy.classList.remove("d-none");
    OptionGirl.classList.add("d-none");
}
var gender_mv_girl = function() {
    MvBoy.classList.add("d-none");
    MvGirl.classList.remove("d-none");
    ImageBoy.classList.add("d-none");
    ImageGirl.classList.remove("d-none");
    OptionBoy.classList.add("d-none");
    OptionGirl.classList.remove("d-none");
}

const BtnBoy = document.querySelector('#boy');
const BtnGirl = document.querySelector('#girl');
const ImageBoy = document.querySelector('#boy_img');
const ImageGirl = document.querySelector('#girl_img');
const MvBoy = document.querySelector('#main_mv_img_boy');
const MvGirl = document.querySelector('#main_mv_img_girl');
const OptionBoy = document.querySelector('#character_mv_options_boy');
const OptionGirl = document.querySelector('#character_mv_options_girl');

BtnBoy.addEventListener('click', gender_mv_boy);
BtnGirl.addEventListener('click', gender_mv_girl);

// text

var text_girl_sync = function() {
    document.querySelector('#message').innerHTML = this.value
    document.querySelector('#message_girl').innerHTML = this.value
    var url = new URL(window.location.href);
    var text_content = this.value;
    url.searchParams.append('text', text_content);
}

document.querySelector('#textarea').addEventListener('change', text_girl_sync);


// toppage
var reload = function() {
    console.log("reload")
    window.location.reload();
}

document.querySelector('#headTo_1').addEventListener('click', reload);
document.querySelector('#headTo_1from_back').addEventListener('click', reload);
document.querySelector('#headTo_1from4').addEventListener('click', reload);


// pagenation
var Pagenation = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 4; i++) {
        document.querySelector('#page_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
}

document.querySelector('#headTo_2').addEventListener('click', { showSelector: '#page_2', handleEvent: Pagenation });
document.querySelector('#headTo_3').addEventListener('click', { showSelector: '#page_3', handleEvent: Pagenation });
document.querySelector('#headTo_3from_back').addEventListener('click', { showSelector: '#page_3', handleEvent: Pagenation });
document.querySelector('#headTo_3from_check').addEventListener('click', { showSelector: '#page_3', handleEvent: Pagenation });
document.querySelector('#headTo_4from_last').addEventListener('click', { showSelector: '#page_4', handleEvent: Pagenation });
document.querySelector('#headTo_4').addEventListener('click', { showSelector: '#page_4', handleEvent: Pagenation });




var toggle = function() {
    document.querySelector(this.showSelector).classList.toggle("d-none");
}


document.querySelector('#show_name').addEventListener('click', { showSelector: '#show_name', handleEvent: toggle });
document.querySelector('#show_howTofrom_page3').addEventListener('click', { showSelector: '#howTo_page3', handleEvent: toggle });
document.querySelector('#show_page3from_howto').addEventListener('click', { showSelector: '#howTo_page3', handleEvent: toggle });
document.querySelector('#show_howTofrom_page4').addEventListener('click', { showSelector: '#howTo_page4', handleEvent: toggle });
document.querySelector('#show_page4from_howto').addEventListener('click', { showSelector: '#howTo_page4', handleEvent: toggle });

var cg_bg = function() {
    document.querySelector(this.showSelector).classList.toggle("bg_gray");
}
document.querySelector('#show_howTofrom_page3').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#show_page3from_howto').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#show_howTofrom_page4').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#show_page4from_howto').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#show_back3').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#headTo_3from_back').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#headTo_1from_back').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#show_back4').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#headTo_1from4').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });
document.querySelector('#headTo_4from_4').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#show_backlast').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#headTo_4from_last').addEventListener('click', { showSelector: '#page_4', handleEvent: cg_bg });
document.querySelector('#headTo_1').addEventListener('click', { showSelector: '#page_3', handleEvent: cg_bg });




var hide = function() {
    document.querySelector(this.showSelector).classList.add("d-none");
}
document.querySelector('#show_name').addEventListener('click', { showSelector: '#character_mv_options', handleEvent: hide });
document.querySelector('#show_check').addEventListener('click', { showSelector: '#name', handleEvent: hide });
document.querySelector('#show_check').addEventListener('click', { showSelector: '#name_btn', handleEvent: hide });
document.querySelector('#back_check').addEventListener('click', { showSelector: '#name', handleEvent: hide });
document.querySelector('#back_check').addEventListener('click', { showSelector: '#name_btn', handleEvent: hide });
document.querySelector('#headTo_3from_back').addEventListener('click', { showSelector: '#back_3', handleEvent: hide });
document.querySelector('#headTo_4').addEventListener('click', { showSelector: '#check', handleEvent: hide });
document.querySelector('#headTo_end').addEventListener('click', { showSelector: '#check', handleEvent: hide });
document.querySelector('#headTo_4from_last').addEventListener('click', { showSelector: '#back_last', handleEvent: hide });
document.querySelector('#headTo_4from_4').addEventListener('click', { showSelector: '#back_4', handleEvent: hide });

var show = function() {
    document.querySelector(this.showSelector).classList.remove("d-none");
}
document.querySelector('#show_name').addEventListener('click', { showSelector: '#name', handleEvent: show });
document.querySelector('#show_name').addEventListener('click', { showSelector: '#name_btn', handleEvent: show });
document.querySelector('#show_check').addEventListener('click', { showSelector: '#check', handleEvent: show });
document.querySelector('#back_check').addEventListener('click', { showSelector: '#character_mv_options', handleEvent: show });
document.querySelector('#back_check').addEventListener('click', { showSelector: '#show_name', handleEvent: show });
document.querySelector('#headTo_4').addEventListener('click', { showSelector: '#character_mv_options', handleEvent: show });
document.querySelector('#headTo_4').addEventListener('click', { showSelector: '#show_name', handleEvent: show });
document.querySelector('#headTo_end').addEventListener('click', { showSelector: '#end', handleEvent: show });
document.querySelector('#show_back3').addEventListener('click', { showSelector: '#back_3', handleEvent: show });
document.querySelector('#show_back4').addEventListener('click', { showSelector: '#back_4', handleEvent: show });
document.querySelector('#show_backlast').addEventListener('click', { showSelector: '#back_last', handleEvent: show });
document.querySelector('#headTo_4from_last').addEventListener('click', { showSelector: '#page_4', handleEvent: show });
document.querySelector('#headTo_4from_4').addEventListener('click', { showSelector: '#page_4', handleEvent: show });







// パーツ選択の変更
var showFunc = function(e) {
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
}

document.querySelector('#select1').addEventListener('click', { showSelector: '#option_boy_1', handleEvent: showFunc });
document.querySelector('#select2').addEventListener('click', { showSelector: '#option_boy_2', handleEvent: showFunc });
document.querySelector('#select3').addEventListener('click', { showSelector: '#option_boy_3', handleEvent: showFunc });
document.querySelector('#select4').addEventListener('click', { showSelector: '#option_boy_4', handleEvent: showFunc });
document.querySelector('#select5').addEventListener('click', { showSelector: '#option_boy_5', handleEvent: showFunc });
document.querySelector('#select6').addEventListener('click', { showSelector: '#option_boy_6', handleEvent: showFunc });

var showFunc = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 6; i++) {
        document.querySelector('#option_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
}
document.querySelector('#select1_girl').addEventListener('click', { showSelector: '#option_girl_1', handleEvent: showFunc });
document.querySelector('#select2_girl').addEventListener('click', { showSelector: '#option_girl_2', handleEvent: showFunc });
document.querySelector('#select3_girl').addEventListener('click', { showSelector: '#option_girl_3', handleEvent: showFunc });
document.querySelector('#select4_girl').addEventListener('click', { showSelector: '#option_girl_4', handleEvent: showFunc });
document.querySelector('#select5_girl').addEventListener('click', { showSelector: '#option_girl_5', handleEvent: showFunc });
document.querySelector('#select6_girl').addEventListener('click', { showSelector: '#option_girl_6', handleEvent: showFunc });


// 髪の選択
var showFuncPartsHair = function(e) {
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_hair_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_hair = this.showSelector;
    url.searchParams.append('hair', selected_parts_hair);
    console.log(url.searchParams.get('hair'));

}


document.querySelector('#parts_hair_boy_1').addEventListener('click', { showSelector: '#main_mv_hair_boy_1', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_2').addEventListener('click', { showSelector: '#main_mv_hair_boy_2', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_3').addEventListener('click', { showSelector: '#main_mv_hair_boy_3', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_4').addEventListener('click', { showSelector: '#main_mv_hair_boy_4', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_5').addEventListener('click', { showSelector: '#main_mv_hair_boy_5', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_6').addEventListener('click', { showSelector: '#main_mv_hair_boy_6', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_7').addEventListener('click', { showSelector: '#main_mv_hair_boy_7', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_8').addEventListener('click', { showSelector: '#main_mv_hair_boy_8', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_9').addEventListener('click', { showSelector: '#main_mv_hair_boy_9', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_10').addEventListener('click', { showSelector: '#main_mv_hair_boy_10', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_11').addEventListener('click', { showSelector: '#main_mv_hair_boy_11', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_12').addEventListener('click', { showSelector: '#main_mv_hair_boy_12', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_13').addEventListener('click', { showSelector: '#main_mv_hair_boy_13', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_boy_14').addEventListener('click', { showSelector: '#main_mv_hair_boy_14', handleEvent: showFuncPartsHair });


// var selected_parts_hair


var showFuncPartsHair = function(e) {
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_hair_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_hair = this.showSelector;
    url.searchParams.append('hair', selected_parts_hair);
    console.log(url.searchParams.get('hair'));
}


document.querySelector('#parts_hair_girl_1').addEventListener('click', { showSelector: '#main_mv_hair_girl_1', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_2').addEventListener('click', { showSelector: '#main_mv_hair_girl_2', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_3').addEventListener('click', { showSelector: '#main_mv_hair_girl_3', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_4').addEventListener('click', { showSelector: '#main_mv_hair_girl_4', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_5').addEventListener('click', { showSelector: '#main_mv_hair_girl_5', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_6').addEventListener('click', { showSelector: '#main_mv_hair_girl_6', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_7').addEventListener('click', { showSelector: '#main_mv_hair_girl_7', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_8').addEventListener('click', { showSelector: '#main_mv_hair_girl_8', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_9').addEventListener('click', { showSelector: '#main_mv_hair_girl_9', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_10').addEventListener('click', { showSelector: '#main_mv_hair_girl_10', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_11').addEventListener('click', { showSelector: '#main_mv_hair_girl_11', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_12').addEventListener('click', { showSelector: '#main_mv_hair_girl_12', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_13').addEventListener('click', { showSelector: '#main_mv_hair_girl_13', handleEvent: showFuncPartsHair });
document.querySelector('#parts_hair_girl_14').addEventListener('click', { showSelector: '#main_mv_hair_girl_14', handleEvent: showFuncPartsHair });


// 顔の選択
var showFuncPartsFace = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_face_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_face = this.showSelector;
    url.searchParams.append('face', selected_parts_face);
    console.log(url.searchParams.get('face'));
}


document.querySelector('#parts_face_boy_1').addEventListener('click', { showSelector: '#main_mv_face_boy_1', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_2').addEventListener('click', { showSelector: '#main_mv_face_boy_2', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_3').addEventListener('click', { showSelector: '#main_mv_face_boy_3', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_4').addEventListener('click', { showSelector: '#main_mv_face_boy_4', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_5').addEventListener('click', { showSelector: '#main_mv_face_boy_5', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_6').addEventListener('click', { showSelector: '#main_mv_face_boy_6', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_7').addEventListener('click', { showSelector: '#main_mv_face_boy_7', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_8').addEventListener('click', { showSelector: '#main_mv_face_boy_8', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_9').addEventListener('click', { showSelector: '#main_mv_face_boy_9', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_10').addEventListener('click', { showSelector: '#main_mv_face_boy_10', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_11').addEventListener('click', { showSelector: '#main_mv_face_boy_11', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_12').addEventListener('click', { showSelector: '#main_mv_face_boy_12', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_13').addEventListener('click', { showSelector: '#main_mv_face_boy_13', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_boy_14').addEventListener('click', { showSelector: '#main_mv_face_boy_14', handleEvent: showFuncPartsFace });

var showFuncPartsFace = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_face_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_face = this.showSelector;
    url.searchParams.append('face', selected_parts_face);
    console.log(url.searchParams.get('face'));
}


document.querySelector('#parts_face_girl_1').addEventListener('click', { showSelector: '#main_mv_face_girl_1', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_2').addEventListener('click', { showSelector: '#main_mv_face_girl_2', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_3').addEventListener('click', { showSelector: '#main_mv_face_girl_3', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_4').addEventListener('click', { showSelector: '#main_mv_face_girl_4', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_5').addEventListener('click', { showSelector: '#main_mv_face_girl_5', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_6').addEventListener('click', { showSelector: '#main_mv_face_girl_6', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_7').addEventListener('click', { showSelector: '#main_mv_face_girl_7', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_8').addEventListener('click', { showSelector: '#main_mv_face_girl_8', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_9').addEventListener('click', { showSelector: '#main_mv_face_girl_9', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_10').addEventListener('click', { showSelector: '#main_mv_face_girl_10', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_11').addEventListener('click', { showSelector: '#main_mv_face_girl_11', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_12').addEventListener('click', { showSelector: '#main_mv_face_girl_12', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_13').addEventListener('click', { showSelector: '#main_mv_face_girl_13', handleEvent: showFuncPartsFace });
document.querySelector('#parts_face_girl_14').addEventListener('click', { showSelector: '#main_mv_face_girl_14', handleEvent: showFuncPartsFace });


// 目の選択
var showFuncPartsEye = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_eye_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_eye = this.showSelector;
    url.searchParams.append('eye', selected_parts_eye);
    console.log(url.searchParams.get('eye'));
}


document.querySelector('#parts_eye_boy_1').addEventListener('click', { showSelector: '#main_mv_eye_boy_1', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_2').addEventListener('click', { showSelector: '#main_mv_eye_boy_2', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_3').addEventListener('click', { showSelector: '#main_mv_eye_boy_3', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_4').addEventListener('click', { showSelector: '#main_mv_eye_boy_4', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_5').addEventListener('click', { showSelector: '#main_mv_eye_boy_5', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_6').addEventListener('click', { showSelector: '#main_mv_eye_boy_6', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_7').addEventListener('click', { showSelector: '#main_mv_eye_boy_7', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_8').addEventListener('click', { showSelector: '#main_mv_eye_boy_8', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_9').addEventListener('click', { showSelector: '#main_mv_eye_boy_9', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_10').addEventListener('click', { showSelector: '#main_mv_eye_boy_10', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_11').addEventListener('click', { showSelector: '#main_mv_eye_boy_11', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_12').addEventListener('click', { showSelector: '#main_mv_eye_boy_12', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_13').addEventListener('click', { showSelector: '#main_mv_eye_boy_13', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_boy_14').addEventListener('click', { showSelector: '#main_mv_eye_boy_14', handleEvent: showFuncPartsEye });


var showFuncPartsEye = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_eye_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_eye = this.showSelector;
    url.searchParams.append('eye', selected_parts_eye);
    console.log(url.searchParams.get('eye'));
}


document.querySelector('#parts_eye_girl_1').addEventListener('click', { showSelector: '#main_mv_eye_girl_1', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_2').addEventListener('click', { showSelector: '#main_mv_eye_girl_2', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_3').addEventListener('click', { showSelector: '#main_mv_eye_girl_3', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_4').addEventListener('click', { showSelector: '#main_mv_eye_girl_4', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_5').addEventListener('click', { showSelector: '#main_mv_eye_girl_5', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_6').addEventListener('click', { showSelector: '#main_mv_eye_girl_6', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_7').addEventListener('click', { showSelector: '#main_mv_eye_girl_7', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_8').addEventListener('click', { showSelector: '#main_mv_eye_girl_8', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_9').addEventListener('click', { showSelector: '#main_mv_eye_girl_9', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_10').addEventListener('click', { showSelector: '#main_mv_eye_girl_10', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_11').addEventListener('click', { showSelector: '#main_mv_eye_girl_11', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_12').addEventListener('click', { showSelector: '#main_mv_eye_girl_12', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_13').addEventListener('click', { showSelector: '#main_mv_eye_girl_13', handleEvent: showFuncPartsEye });
document.querySelector('#parts_eye_girl_14').addEventListener('click', { showSelector: '#main_mv_eye_girl_14', handleEvent: showFuncPartsEye });

// 鼻の選択
var showFuncPartsNose = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_nose_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_nose = this.showSelector;
    url.searchParams.append('nose', selected_parts_nose);
    console.log(url.searchParams.get('nose'));
}

document.querySelector('#parts_nose_boy_1').addEventListener('click', { showSelector: '#main_mv_nose_boy_1', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_2').addEventListener('click', { showSelector: '#main_mv_nose_boy_2', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_3').addEventListener('click', { showSelector: '#main_mv_nose_boy_3', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_4').addEventListener('click', { showSelector: '#main_mv_nose_boy_4', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_5').addEventListener('click', { showSelector: '#main_mv_nose_boy_5', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_6').addEventListener('click', { showSelector: '#main_mv_nose_boy_6', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_7').addEventListener('click', { showSelector: '#main_mv_nose_boy_7', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_8').addEventListener('click', { showSelector: '#main_mv_nose_boy_8', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_9').addEventListener('click', { showSelector: '#main_mv_nose_boy_9', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_10').addEventListener('click', { showSelector: '#main_mv_nose_boy_10', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_11').addEventListener('click', { showSelector: '#main_mv_nose_boy_11', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_12').addEventListener('click', { showSelector: '#main_mv_nose_boy_12', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_13').addEventListener('click', { showSelector: '#main_mv_nose_boy_13', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_boy_14').addEventListener('click', { showSelector: '#main_mv_nose_boy_14', handleEvent: showFuncPartsNose });


var showFuncPartsNose = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_nose_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_nose = this.showSelector;
    url.searchParams.append('nose', selected_parts_nose);
    console.log(url.searchParams.get('nose'));
}

document.querySelector('#parts_nose_girl_1').addEventListener('click', { showSelector: '#main_mv_nose_girl_1', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_2').addEventListener('click', { showSelector: '#main_mv_nose_girl_2', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_3').addEventListener('click', { showSelector: '#main_mv_nose_girl_3', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_4').addEventListener('click', { showSelector: '#main_mv_nose_girl_4', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_5').addEventListener('click', { showSelector: '#main_mv_nose_girl_5', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_6').addEventListener('click', { showSelector: '#main_mv_nose_girl_6', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_7').addEventListener('click', { showSelector: '#main_mv_nose_girl_7', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_8').addEventListener('click', { showSelector: '#main_mv_nose_girl_8', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_9').addEventListener('click', { showSelector: '#main_mv_nose_girl_9', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_10').addEventListener('click', { showSelector: '#main_mv_nose_girl_10', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_11').addEventListener('click', { showSelector: '#main_mv_nose_girl_11', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_12').addEventListener('click', { showSelector: '#main_mv_nose_girl_12', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_13').addEventListener('click', { showSelector: '#main_mv_nose_girl_13', handleEvent: showFuncPartsNose });
document.querySelector('#parts_nose_girl_14').addEventListener('click', { showSelector: '#main_mv_nose_girl_14', handleEvent: showFuncPartsNose });


// 口の選択
var showFuncPartsMouth = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_mouth_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_mouth = this.showSelector;
    url.searchParams.append('mouth', selected_parts_mouth);
    console.log(url.searchParams.get('mouth'));
}


document.querySelector('#parts_mouth_boy_1').addEventListener('click', { showSelector: '#main_mv_mouth_boy_1', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_2').addEventListener('click', { showSelector: '#main_mv_mouth_boy_2', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_3').addEventListener('click', { showSelector: '#main_mv_mouth_boy_3', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_4').addEventListener('click', { showSelector: '#main_mv_mouth_boy_4', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_5').addEventListener('click', { showSelector: '#main_mv_mouth_boy_5', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_6').addEventListener('click', { showSelector: '#main_mv_mouth_boy_6', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_7').addEventListener('click', { showSelector: '#main_mv_mouth_boy_7', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_8').addEventListener('click', { showSelector: '#main_mv_mouth_boy_8', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_9').addEventListener('click', { showSelector: '#main_mv_mouth_boy_9', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_10').addEventListener('click', { showSelector: '#main_mv_mouth_boy_10', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_11').addEventListener('click', { showSelector: '#main_mv_mouth_boy_11', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_12').addEventListener('click', { showSelector: '#main_mv_mouth_boy_12', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_13').addEventListener('click', { showSelector: '#main_mv_mouth_boy_13', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_boy_14').addEventListener('click', { showSelector: '#main_mv_mouth_boy_14', handleEvent: showFuncPartsMouth });

var showFuncPartsMouth = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_mouth_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_mouth = this.showSelector;
    url.searchParams.append('mouth', selected_parts_mouth);
    console.log(url.searchParams.get('mouth'));
}


document.querySelector('#parts_mouth_girl_1').addEventListener('click', { showSelector: '#main_mv_mouth_girl_1', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_2').addEventListener('click', { showSelector: '#main_mv_mouth_girl_2', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_3').addEventListener('click', { showSelector: '#main_mv_mouth_girl_3', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_4').addEventListener('click', { showSelector: '#main_mv_mouth_girl_4', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_5').addEventListener('click', { showSelector: '#main_mv_mouth_girl_5', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_6').addEventListener('click', { showSelector: '#main_mv_mouth_girl_6', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_7').addEventListener('click', { showSelector: '#main_mv_mouth_girl_7', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_8').addEventListener('click', { showSelector: '#main_mv_mouth_girl_8', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_9').addEventListener('click', { showSelector: '#main_mv_mouth_girl_9', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_10').addEventListener('click', { showSelector: '#main_mv_mouth_girl_10', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_11').addEventListener('click', { showSelector: '#main_mv_mouth_girl_11', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_12').addEventListener('click', { showSelector: '#main_mv_mouth_girl_12', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_13').addEventListener('click', { showSelector: '#main_mv_mouth_girl_13', handleEvent: showFuncPartsMouth });
document.querySelector('#parts_mouth_girl_14').addEventListener('click', { showSelector: '#main_mv_mouth_girl_14', handleEvent: showFuncPartsMouth });


// 体の選択
var showFuncPartsBody = function(e) {
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_body_boy_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_body = this.showSelector;
    url.searchParams.append('body', selected_parts_body);
    console.log(url.searchParams.get('body'));
}
document.querySelector('#parts_body_boy_1').addEventListener('click', { showSelector: '#main_mv_body_boy_1', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_2').addEventListener('click', { showSelector: '#main_mv_body_boy_2', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_3').addEventListener('click', { showSelector: '#main_mv_body_boy_3', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_4').addEventListener('click', { showSelector: '#main_mv_body_boy_4', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_5').addEventListener('click', { showSelector: '#main_mv_body_boy_5', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_6').addEventListener('click', { showSelector: '#main_mv_body_boy_6', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_7').addEventListener('click', { showSelector: '#main_mv_body_boy_7', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_8').addEventListener('click', { showSelector: '#main_mv_body_boy_8', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_9').addEventListener('click', { showSelector: '#main_mv_body_boy_9', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_10').addEventListener('click', { showSelector: '#main_mv_body_boy_10', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_11').addEventListener('click', { showSelector: '#main_mv_body_boy_11', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_12').addEventListener('click', { showSelector: '#main_mv_body_boy_12', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_13').addEventListener('click', { showSelector: '#main_mv_body_boy_13', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_boy_14').addEventListener('click', { showSelector: '#main_mv_body_boy_14', handleEvent: showFuncPartsBody });

var showFuncPartsBody = function(e) {
    console.log(this.showSelector);
    for (let i = 1; i <= 14; i++) {
        document.querySelector('#main_mv_body_girl_' + i).classList.add("d-none");
    }
    document.querySelector(this.showSelector).classList.remove("d-none");
    var url = new URL(window.location.href);
    var selected_parts_body = this.showSelector;
    url.searchParams.append('body', selected_parts_body);
}
document.querySelector('#parts_body_girl_1').addEventListener('click', { showSelector: '#main_mv_body_girl_1', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_2').addEventListener('click', { showSelector: '#main_mv_body_girl_2', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_3').addEventListener('click', { showSelector: '#main_mv_body_girl_3', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_4').addEventListener('click', { showSelector: '#main_mv_body_girl_4', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_5').addEventListener('click', { showSelector: '#main_mv_body_girl_5', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_6').addEventListener('click', { showSelector: '#main_mv_body_girl_6', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_7').addEventListener('click', { showSelector: '#main_mv_body_girl_7', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_8').addEventListener('click', { showSelector: '#main_mv_body_girl_8', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_9').addEventListener('click', { showSelector: '#main_mv_body_girl_9', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_10').addEventListener('click', { showSelector: '#main_mv_body_girl_10', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_11').addEventListener('click', { showSelector: '#main_mv_body_girl_11', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_12').addEventListener('click', { showSelector: '#main_mv_body_girl_12', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_13').addEventListener('click', { showSelector: '#main_mv_body_girl_13', handleEvent: showFuncPartsBody });
document.querySelector('#parts_body_girl_14').addEventListener('click', { showSelector: '#main_mv_body_girl_14', handleEvent: showFuncPartsBody });


var QRcode = function() {
    var qrtext = window.location.href;
    var utf8qrtext = unescape(encodeURIComponent(qrtext));
    $("#img-qr").html("");
    $("#img-qr").qrcode({ width: 160, height: 160, text: utf8qrtext });
};

document.querySelector('#headTo_end').addEventListener('click', QRcode);