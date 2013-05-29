(function($){
    
    /**
     * Constructor 
     */
    function Test(options, selector){
        this._settings = $.extend({
            a : 'a',
            b : 'b'
        }, options);
        this._selector = $(selector);
        this._init();
    }

    /**
     * Extend prototype
     */
    Test.prototype = {
        /**
         * Initalize
         */
        _init : function(){
            
        },
          /**
         * Initalize
         */
        _private : function(){
            throw new Error('Not visible');
        },
        
        /**
         * Public method
         */
         pub : function( a, b, c){
            return a + b + c;
         }
    }

    $.fn.Test = $.extendable(Test);
    
    
}(jQuery));



$(function(){
    $('div.box').Test({
        a: 'works',
        b : 'works_also'
    });
    //call pub method
    $('div.box').Test("pub", 1 ,2 ,3 );
     //not accessible and will not throw an error
    $('div.box').Test("_private");
});
