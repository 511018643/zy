$(function () {
    var mm= new MM();
    mm.renderNav();
    mm.renderClassify();
});

var MM= function () {
    
};

MM.prototype={
    URL: 'http://localhost:9090',
    renderNav:function () {        
            var mySwiper1 = new Swiper('#header-nav', {
                freeMode: true,
                slidesPerView: 'auto',
            });        
    },
    renderClassify:function () {
        $.ajax({
            
            url: 'http://localhost:9090/api/getindexmenu',
            
            
            
            success:function (data) {
                console.log(data);
                
            }
        })
    }

}