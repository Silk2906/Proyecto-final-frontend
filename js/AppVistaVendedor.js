var app = angular.module('vistaVendedorApp', []);

app.controller('ctrlVendedor', function($scope)
{  
    $scope.mostrarcuadro1 = true;
    $scope.mostrarcuadro2 = true;
    $scope.mostrarcuadro3 = true;
    $scope.bienvenido = false;

    $scope.cuadro1 = function (){
        $scope.mostrarcuadro1 = false;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.bienvenido = true;

    }
    $scope.cuadro2 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = false;
        $scope.mostrarcuadro3 = true;

        $scope.bienvenido = true;
    }
    $scope.cuadro3 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = false;
        $scope.bienvenido = true;
    }

});
