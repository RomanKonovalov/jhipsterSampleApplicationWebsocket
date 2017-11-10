(function () {
    'use strict';

    angular
        .module('jhipsterSampleApplicationWebsocketApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
