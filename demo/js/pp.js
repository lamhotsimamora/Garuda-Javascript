 function adjustHeightOfPage(pageNo) {

                var offset = 80;
                var pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height();

                if($(window).width() >= 992) { offset = 120; }
                else if($(window).width() < 480) { offset = 40; }
               
                // Get the page height
                var totalPageHeight = 335 + $('.cd-slider-nav').height()
                                        + pageContentHeight + offset
                                        + $('.tm-footer').height();

               
                if(totalPageHeight > $(window).height()) 
                {
                    $('.cd-hero-slider').addClass('small-screen');
                    $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
                }
                else 
                {
                    $('.cd-hero-slider').removeClass('small-screen');
                    $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
                }
            }

          

            // Everything is loaded including images.            
            $(window).load(function(){

                adjustHeightOfPage(1); // Adjust page height

                $('.gallery-first').magnificPopup({
                    delegate: 'a', // child items selector, by clicking on it popup will open
                    type: 'image',
                    gallery:{enabled:true}                
                });

                $('.gallery-second').magnificPopup({
                    delegate: 'a', // child items selector, by clicking on it popup will open
                    type: 'image',
                    gallery:{enabled:true}                
                });
				
                
                $('#tmNavbar a').click(function(){
                    $('#tmNavbar').collapse('hide');

                    adjustHeightOfPage($(this).data("no")); // Adjust page height       
                });

                $( window ).resize(function() {
                    var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
                    
                    setTimeout(function() {
                        adjustHeightOfPage( currentPageNo );
                    }, 3000);

                   
                    
                });

                $('body').addClass('loaded');
                $('.tm-current-year').text(new Date().getFullYear());
                           
            });