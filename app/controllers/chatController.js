(function(){

    'use strict';

    angular.module('app')
        .controller('chatController', ['$scope', '$rootScope', function($scope, $rootScope){

            var self = this;
            var socket = window.io('localhost:3000');
            self.messages = [];
            self.userName = undefined;
            self.message = undefined;
            self.hide = true;

            $rootScope.$on('new-user', function(event, userName){
                self.userName = userName;
                self.hide = false;
            });

            self.send = function(){
                if(self.message){
                    socket.emit('new-message', {
                        message: self.message,
                        userName: self.userName
                    });
                    self.message = undefined;
                }
            };

            socket.on('receive-message', function(message){
                $scope.$apply(function(){
                    self.messages.push(message);
                });
            });

        }]);

})();