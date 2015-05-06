'use strict';
require.config({
	paths: {
			'app': 'scripts/app',
    	    'angular': 'scripts/angular',
    	    'angularAMD': 'scripts/angularAMD',
    	    'ngload' : 'scripts/ngload',
             'jquery' :'scripts/jquery'   
    	},
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD']
    },  
});

require(['angular','app']);

