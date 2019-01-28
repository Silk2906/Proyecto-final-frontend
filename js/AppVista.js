var app = angular.module('vistaAdApp', []);

app.controller('ctrlAdmin', function($scope)
{  
    $scope.mostrarcuadro1 = true;
    $scope.mostrarcuadro2 = true;
    $scope.mostrarcuadro3 = true;
    $scope.mostrarcuadro4 = true;
    $scope.mostrarcuadro5 = true;
    $scope.mostrarcuadro6 = true;
    $scope.bienvenido = false;

    $scope.cuadro1 = function (){
        $scope.mostrarcuadro1 = false;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.bienvenido = true;

    }
    $scope.cuadro2 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = false;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro3 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = false;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro4 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = false;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro5 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = false;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro6 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = false;
        $scope.mostrarcuadro7 = true;
        $scope.bienvenido = true;
    }
    $scope.cuadro7 = function (){
        $scope.mostrarcuadro1 = true;
        $scope.mostrarcuadro2 = true;
        $scope.mostrarcuadro3 = true;
        $scope.mostrarcuadro4 = true;
        $scope.mostrarcuadro5 = true;
        $scope.mostrarcuadro6 = true;
        $scope.mostrarcuadro7 = false;
        $scope.bienvenido = true;
    }











});