
var tData;
function fnDetail(event) {
    var index = event.data.index;
    $("#MName").html(tData[index].title);
    $("#HostWords").html(tData[index].descriptionFilterHtml);
    $("#btnMap").html("<a href='https://www.google.com.tw/maps/place/" + tData[index].showInfo[0].location + "' target='_blank' class='btn btn-success'>地圖</a>");
    $("#M_ID").val(tData[index].ID);
}
//axios==============================
/*
axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do', {
    params: {
        method: 'doFindTypeJ',
        category: 8
    },
}).then(function (response) {
    console.log(response);
    tData = response.data;
            for (var i = 0; i < tData.length; i++) {
                $("#divShow").append
                    (
                        "<div class='col-sm-4' style='margin-top:15px;'>" +
                        "<div class='thumbnail'>" +
                        "<div class='caption'>" +
                        "<h3>" + tData[i].title + "</h3>" +
                        //"<p>" + tData[i].sourceWebName + "</p>" +
                        "<input type='button' id='btn" + i + "' class='btn btn-info' data-toggle='modal' data-target='#myModal' value='更多資訊'>" +
                        "</div></div></div>"
                    );
                    $("#btn" + i).on("click", { index: i }, fnDetail);
            }
}).catch(function (error) {
    console.log(error);
});
//axios==============================
*/

function getPageData(url, params = {}) {
    var urlObj = new URL(url);
    urlObj.search = new URLSearchParams(params);
    return fetch( new Request(urlObj, {
        method: 'GET',
    })).then((response) => {
        return response.json();
    }).catch((error) => {
        console.log(error);
    });
}
getPageData('https://localhost:44395/api/FoodService', {
//getPageData('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do', {
        method: 'doFindTypeJ',
        category: 8
}).then(function (response) {
    console.log(response);
    tData = response;
            for (var i = 0; i < tData.length; i++) {
                $("#divShow").append
                    (
                        "<div class='col-sm-4' style='margin-top:15px;'>" +
                        "<div class='thumbnail'>" +
                        "<div class='caption'>" +
                        "<h3>" + tData[i].title + "</h3>" +
                        //"<p>" + tData[i].sourceWebName + "</p>" +
                        "<input type='button' id='btn" + i + "' class='btn btn-info' data-toggle='modal' data-target='#myModal' value='更多資訊'>" +
                        "</div></div></div>"
                    );
                    $("#btn" + i).on("click", { index: i }, fnDetail);
            }
}).catch(function (error) {
    console.log(error);
});

/*
    $.ajax({
        url: '',
        type: 'GET',
        success: function (data) {
            
        }
    })
    //執行成功
    .done(function(json){
            console.log(json);
    })
    //執行失敗
    .fail(function(xhrmstatus,errorThrown){
            
    })
    //成功or失敗都執行
    .always(function(xhr,status){
            
    });
*/
