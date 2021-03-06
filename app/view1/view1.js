'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'PostsCtrlAjax'
        });
    }])

    .controller('PostsCtrlAjax', function ($scope, $http) {
        $http.get('https://api.myjson.com/bins/kyxat').success(function (data) {
            $scope.widgets = data;
            var myarray = Object.values($scope.widgets)[0];
            // console.log(myarray[1]);
            // console.log(myarray.length);
            var critical = [];
            for (var i =0; i<myarray.length; i++) {
                if (myarray[i]) {
                    critical.push(Object.values($scope.widgets)[0][i])
                }
            }
        });

    })
    .filter('time', function () {
        return function (date, timeCreated) {
            var start = moment(timeCreated);
            var end = moment().toDate().getTime();
            return moment.duration(moment(end).diff(moment(start))).humanize() + ' ago!';
        }
    });

// {
//     "wigdets"
// :
//     [{
//         "type": "Critical",
//         "tyme": "es5",
//         "timeCreated": 1519370371619,
//         "name": "bla-bla-1",
//         "info1": "bla-bla-1",
//         "info2": "bla-bla-1",
//         "info3": "bla-bla-1",
//         "info4": "bla-bla-1",
//         "info5": "bla-bla-1"
//     }, {
//         "type": "Major",
//         "target": "es5",
//         "timeCreated": 1519370405741,
//         "name": "bla-bla-2",
//         "info1": "bla-bla-2",
//         "info2": "bla-bla-2",
//         "info3": "bla-bla-2",
//         "info4": "bla-bla-2",
//         "info5": "bla-bla-2"
//     }, {
//         "type": "Major",
//         "target": "es5",
//         "timeCreated": 1519370426405,
//         "name": "bla-bla-3",
//         "info1": "bla-bla-3",
//         "info2": "bla-bla-3",
//         "info3": "bla-bla-3",
//         "info4": "bla-bla-3",
//         "info5": "bla-bla                          