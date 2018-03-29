$(".tabs").click(function(e) {
    let target = e.target;
    console.log(target.parentElement.tagName);
    console.log(target.parentElement.tagName);
    if($(target.parentNode.parentNode).hasClass("activeTab")){
    }else {
        let childs = target.parentNode.parentNode.parentNode.childNodes;
        for (let item of childs){
            $(item).removeClass("activeTab");
        }
        if (target.parentElement.tagName !== "LI" && target.parentElement.tagName !== "UL"){
            $(target.parentNode.parentNode).addClass("activeTab");
        }

    }
});

$(".tabs").hover(
    function () {
        $(".tabs").addClass("activeTab-deactivated");
    },
    function () {
        $(".tabs").removeClass("activeTab-deactivated");
    });
