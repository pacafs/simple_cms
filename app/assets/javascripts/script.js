$(document).ready(function(){

    /* This code is executed on the document ready event */

    var left	= 0,
        top		= 0,
        sizes	= { retina: { width:190, height:190 },
                webpage:{ width:500, height:283 } },
        webpage	= $('#webpage'),
        offset	= { left: webpage.offset().left, top: webpage.offset().top },
        retina	= $('#retina');
    

    if(navigator.userAgent.indexOf('Chrome')!=-1)
    {
        /*	Applying a special chrome curosor,
            as it fails to render completely blank curosrs. */

        retina.addClass('chrome');
    }

    webpage.mousemove(function(e){

        left = (e.pageX-offset.left);
        top = (e.pageY-offset.top);

        if(retina.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage.trigger('mouseenter');
        }

        if(left<0 || top<0 || left > sizes.webpage.width ||
            top > sizes.webpage.height)
        {
            /*	If we are out of the bondaries of the
                webpage screenshot, hide the retina div */

            if(!retina.is(':animated')){
                webpage.trigger('mouseleave');
            }
            return false;
        }

        /*	Moving the retina div with the mouse
            (and scrolling the background) */

        retina.css({
            left				: left - sizes.retina.width/2,
            top					: top - sizes.retina.height/2,
            backgroundPosition	: '-'+(1.6*left)+'px -'+(1.35*top)+'px'
        });

    }).mouseleave(function(){
        retina.stop(true,true).fadeOut('fast');
    }).mouseenter(function(){
        retina.stop(true,true).fadeIn('fast');
    });

    // 2 // 

    /* This code is executed on the document ready event */

    var left2    = 0,
        top2     = 0,
        sizes2   = { retina2: { width:190, height:190 }, webpage2:{ width:500, height:283 } },
        webpage2 = $('#webpage2'),
        offset2  = { left: webpage2.offset().left, top: webpage2.offset().top },
        retina2  = $('#retina2');
    

    if(navigator.userAgent.indexOf('Chrome')!=-1)
    {
        /*  Applying a special chrome curosor,
            as it fails to render completely blank curosrs. */

        retina2.addClass('chrome');
    }

    webpage2.mousemove(function(e){

        left2 = (e.pageX-offset2.left);
        top2  = (e.pageY-offset2.top);

        if(retina2.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage2.trigger('mouseenter');
        }

        if(left2<0 || top2<0 || left2 > sizes2.webpage2.width ||
            top2 > sizes2.webpage2.height)
        {
            /*  If we are out of the bondaries of the
                webpage screenshot, hide the retina div */

            if(!retina2.is(':animated')){
                webpage2.trigger('mouseleave');
            }
            return false;
        }

        /*  Moving the retina div with the mouse
            (and scrolling the background) */

        retina2.css({
            left                : left2 - sizes2.retina2.width/2,
            top                 : top2 - sizes2.retina2.height/2,
            backgroundPosition  : '-'+(1.6*left2)+'px -'+(1.35*top2)+'px'
        });

    }).mouseleave(function(){
        retina2.stop(true,true).fadeOut('fast');
    }).mouseenter(function(){
        retina2.stop(true,true).fadeIn('fast');
    });

    // 3 // 

    /* This code is executed on the document ready event */

    var left3    = 0,
        top3     = 0,
        sizes3   = { retina3: { width:190, height:190 }, webpage3:{ width:500, height:283 } },
        webpage3 = $('#webpage3'),
        offset3  = { left: webpage3.offset().left, top: webpage3.offset().top },
        retina3  = $('#retina3');
    

    if(navigator.userAgent.indexOf('Chrome')!=-1)
    {
        /*  Applying a special chrome curosor,
            as it fails to render completely blank curosrs. */

        retina3.addClass('chrome');
    }

    webpage3.mousemove(function(e){

        left3 = (e.pageX-offset3.left);
        top3  = (e.pageY-offset3.top);

        if(retina3.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage3.trigger('mouseenter');
        }

        if(left3<0 || top3<0 || left3 > sizes3.webpage3.width ||
            top3 > sizes3.webpage3.height)
        {
            /*  If we are out of the bondaries of the
                webpage screenshot, hide the retina div */

            if(!retina3.is(':animated')){
                webpage3.trigger('mouseleave');
            }
            return false;
        }

        /*  Moving the retina div with the mouse
            (and scrolling the background) */

        retina3.css({
            left                : left3 - sizes3.retina3.width/2,
            top                 : top3 - sizes3.retina3.height/2,
            backgroundPosition  : '-'+(1.6*left3)+'px -'+(1.35*top3)+'px'
        });

    }).mouseleave(function(){
        retina3.stop(true,true).fadeOut('fast');
    }).mouseenter(function(){
        retina3.stop(true,true).fadeIn('fast');
    });

    // 4 // 

    /* This code is executed on the document ready event */

    var left4    = 0,
        top4     = 0,
        sizes4   = { retina4: { width:190, height:190 }, webpage4:{ width:500, height:283 } },
        webpage4 = $('#webpage4'),
        offset4  = { left: webpage4.offset().left, top: webpage4.offset().top },
        retina4  = $('#retina4');
    

    if(navigator.userAgent.indexOf('Chrome')!=-1)
    {
        /*  Applying a special chrome curosor,
            as it fails to render completely blank curosrs. */

        retina4.addClass('chrome');
    }

    webpage4.mousemove(function(e){

        left4 = (e.pageX-offset4.left);
        top4  = (e.pageY-offset4.top);

        if(retina4.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage4.trigger('mouseenter');
        }

        if(left4<0 || top4<0 || left4 > sizes4.webpage4.width ||
            top4 > sizes4.webpage4.height)
        {
            /*  If we are out of the bondaries of the
                webpage screenshot, hide the retina div */

            if(!retina4.is(':animated')){
                webpage4.trigger('mouseleave');
            }
            return false;
        }

        /*  Moving the retina div with the mouse
            (and scrolling the background) */

        retina4.css({
            left                : left4 - sizes4.retina4.width/2,
            top                 : top4 - sizes4.retina4.height/2,
            backgroundPosition  : '-'+(1.6*left4)+'px -'+(1.35*top4)+'px'
        });

    }).mouseleave(function(){
        retina4.stop(true,true).fadeOut('fast');
    }).mouseenter(function(){
        retina4.stop(true,true).fadeIn('fast');
    });


});


