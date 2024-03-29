/* APIから情報を受け取り */
$(function () {
    //const query = "http://172.20.1.122:8000/posts";
    //ノパソなら　http://localhost:8000/posts
    const query = "http://localhost:8000/posts";
    $.getJSON(query, function (data) {
        useRow = data[getParam("id",location.search)]
        console.log(useRow);
        $("[id=rule]").html(useRow.rule)
        $("[id=title]").html(`<a href="${useRow.url}">${useRow.title}</a>`)
        $("[id=overview]").html(useRow.overview)
        $("[id=type]").html(`<a href="${useRow.url}">${useRow.type}</a>`)
    });
})

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}