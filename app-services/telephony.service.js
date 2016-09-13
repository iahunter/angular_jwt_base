﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('TelephonyService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.GetDidblock = GetDidblock;

		service.didblocks = {};
		    
		function GetDidblock(callback) {
			service.didblock = {};
			GetType(callback, 'didblock');
        }

        function GetType(callback, type) {
			service.didblock[type] = {};
            $http.get('../api/' + type)
                .success(function (response) {
					//console.log(response);
					response.didblocks.forEach(function(item, index) {
						
						//console.log(item);
						
						//service.didblock = response;
						service.didblocks = response.didblocks;
						
						//GetDids(callback, type, item.id);
					});
					callback(true);
                })
				// execute callback with false to indicate failed call
				.error(function() {
					callback(false);
				});
		}

		function GetDidblockDids(callback, type, didblock_id)
		{
			/*
			service.accounts[type][account_id]['certificates'] = {};
            $http.get('/api/' + type + '/accounts/' + account_id + '/certificates')
                .success(function (response) {
					//console.log('got success for certs acct type ' + type + ' account id ' + account_id)
					response.certificates.forEach(function(item, index) {
						service.accounts[type][account_id]['certificates'][item.id] = item;
					});
					callback(true);
                })
				// execute callback with false to indicate failed call
				.error(function() {
					callback(false);
				});
			*/
		}
		
		return service;
		
    }
})();
