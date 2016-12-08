(function(){

    'use strict';

    angular.module('app')
        .controller('userCreationController', ['$scope', '$rootScope', function($scope, $rootScope){

            var self = this;
            self.disabled = false;
            self.name = undefined;

            self.create = function(){
                if(self.name){
                    self.disabled = true;
                    $rootScope.$emit('new-user', self.name);
                }
            };

        }]);

})();