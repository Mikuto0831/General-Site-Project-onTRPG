// 読み込まれたときに無条件で発火ゾーン
$(function () {
    // 背景画像のランダム化
    const backgroundImgs = ["無限ループおそら濃いめS.gif", "星空ループ_色濃いめ.gif"]
    const backgroundImg = backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)]
    $(".background").css('background-image', `url('../img/${backgroundImg}')`)

    // maintitleの文字フォント変更に関わる部分
    // 対応させるフォントの配列
    const titleFonts = ["DotGothic16", "Zen+Kurenaido", "Noto+Sans+JP", "Dela+Gothic+One", "Kaisei+Decol", "Yusei+Magic", "Rampart+One", "Reggae+One", "Stick", "Hachi+Maru+Pop", "Train+One", "Yomogi"]
    const titleFont = titleFonts[Math.floor(Math.random() * titleFonts.length)]
    $("#dim-title-font").html(`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${titleFont}&display=swap" type="text/css">`);
    $("[id=maintitles]").css({ 'font-family': `"${titleFont.replace(/\+/g, " ")}", "Arial", "MS 遊ゴシック"` });

});