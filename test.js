(function($){

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
         pub : function(){
            return '1';
         }
    }

    $.fn.Test = $.extendable(Test);
    
    
}(jQuery));
