
var Links = {
    setColor : function (color){
        // var alist = document.querySelectorAll('a');
        // var i=0;
        // while(i<alist.length){
        //     alist[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color); //jQuery
    }
}
var Body = {
    setColor : function (color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color); //jQuery
    },
    setBackgroundColor : function (color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color); //jQuery
    }
}
function nightDayhandler(self) {
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day'

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night'
          
        Links.setColor('blue');
    }
}