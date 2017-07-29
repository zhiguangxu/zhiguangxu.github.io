$(document).ready(function() {
    pre_content = $("#zhiguangxu_site_pv").html();
    $("#zhiguangxu_site_pv").html(pre_content);
    $.ajax({
        type: "get",
        async: false,
        url: "https://api.jarrekk.com/api/v1.0/jalpc/pv_count",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "flightHandler",
        success: function(json) {
            var website_count = json.data;
            $("#zhiguangxu_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
        },
        error: function() {
            console.log('fail');
        }
    });
});
