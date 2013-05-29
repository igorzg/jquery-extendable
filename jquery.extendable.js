/*!
 * Developed by : Igor Ivanovic
 * User: igor
 * Date: 3/21/13
 * Time: 5:09 PM
 */
(function($) {
    /**
     *
     * Plugin extender
     * @param options
     * @return {*}
     */
    $.extendable = function( object ){
        /**
         * Closure power :)
         */
        return function(options){
            /**
             * Plugin unique indentifier
             */
            var name = object.toString();

            var isMethodCall = typeof options === "string",
                args = Array.prototype.slice.call( arguments, 1 ),
                returnValue = this;
            /**
             * Applay dynamic arguments
             */
            options = !isMethodCall && args.length ? $.extend.apply( null, [ true, options ].concat( args ) ) : options;

            /**
             * Prevent internal methods
             */
            if ( isMethodCall && options.charAt( 0 ) === "_" ) {
                return returnValue;
            }
            /**
             * Public methods only
             */
            if ( isMethodCall ) {
                this.each(function() {
                    var instance = $.data( this, name ),
                        methodValue = instance && $.isFunction( instance[options] ) ?
                            instance[ options ].apply( instance, args ) :
                            instance;
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue;
                        return false;
                    }
                });
            } else {
                /**
                 * Create An instance
                 */
                this.each(function() {
                    var instance = $.data( this, name );
                    if ( instance ) {
                        instance.option( options || {} );
                    } else {
                        $.data( this, name, new object( options, this ) );
                    }
                });
            }
            return returnValue;
        }
    };
}(jQuery));