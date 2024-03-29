/* APIから情報を受け取り */
$(function () {
    //const query = "http://172.20.1.122:8000/posts";
    //ノパソなら　const query = http://localhost:8000/posts
    const query = "http://localhost:8000/posts";
    $.getJSON(query, function (data) {
        // console.log(data)
        let putData = "";
        for (i = 0; i < data.length; i++) {
            nowRow = data[i];
            //console.log(nowRow.imgurl);
            if (nowRow.type === "Pixiv"){
                nowRow.imgurl = "../img/pixiv.png"
            }
            //console.log(nowRow.imgurl);
            putData += `<div class="scenariobox">
                            <div>
                                <h2 class="oneline">${nowRow.title}</h2>
                                <div class="flex">
                                    <div class="nomal">
                                        <h3>人数</h3>
                                        <p class="oneline">${nowRow.player}</p>
                                    </div>
                                    <div class="nomal">
                                        <h3>時間</h3>
                                        <p class="oneline">${nowRow.playtime}</p>
                                    </div>
                                    <div class="price">
                                        <h3>価格</h3>
                                        <p class="oneline">${nowRow.price}</p>
                                    </div>
                                    <div class="nomal">
                                        <h3>配布・販売先</h3>
                                        <p class="oneline"><a href="${nowRow.url}">${nowRow.type}</a></p>
                                    </div>
                                </div>
                                <h3>概要</h3>
                                <p class="overview">${nowRow.overview}</p>
                                <div class="atags"><a href="../scenario_read/?id=${nowRow.id}">詳細を見る</a></div>
                            </div>
                            <img src="${nowRow.imgurl}" alt="${nowRow.title}のティザーイメージ">
                        </div>
                        `;
            //console.log(nowRow.imgurl);
        }
        $("#result").html(putData)
    });
})

/* テンプレート */
/*
< div class="scenariobox" >
    <div>
        <h2>TEST title</h2>
        <div class="flex">
            <div>
                <h3>人数・時間</h3>
                <p>n人用 約n~m時間</p>
            </div>
            <div>
                <h3>価格</h3>
                <p>価格が入る</p>
            </div>
            <div>
                <h3>配布・販売先</h3>
                <p><a href="">BOOTHとか</a></p>
            </div>
        </div>
        <h3>概要</h3>
        <p>ここにシナリオの内容が入ります。<br>想定としては大体200文字程度でなんとか<br>やりくりしたいと思っています。</p>
            <div class="atags"><a href="">詳細を見る</a></div>
    </div>
    <img src="" alt="test">
</div>
*/