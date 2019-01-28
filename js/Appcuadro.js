var app = angular.module('CuadroApp', []);

app.controller('ctrlCuadro', function($scope)
{  
    $scope.mostrarcuadro1 = true;
    $scope.mostrarcuadro2 = true;
    $scope.mostrarcuadro3 = true;
    $scope.mostrarcuadro4 = true;
    $scope.bienvenido = false;

    $scope.cuadro1 = function (){
        $scope.mostrarcuadro1=false;
        $scope.mostrarcuadro2=true;
        $scope.mostrarcuadro3=true;
        $scope.mostrarcuadro4=true;
        $scope.bienvenido=true;

    }
    $scope.cuadro2 = function (){
        $scope.mostrarcuadro1=true;
        $scope.mostrarcuadro2=false;
        $scope.mostrarcuadro3=true;
        $scope.mostrarcuadro4=true;
        $scope.bienvenido=true;
    }
    $scope.cuadro3 = function (){
        $scope.mostrarcuadro1=true;
        $scope.mostrarcuadro2=true;
        $scope.mostrarcuadro3=false;
        $scope.mostrarcuadro4=true;
        $scope.bienvenido=true;
    }
    $scope.cuadro4 = function (){
        $scope.mostrarcuadro1= true;
        $scope.mostrarcuadro2=true;
        $scope.mostrarcuadro3= true;
        $scope.mostrarcuadro4=false;
        $scope.bienvenido=true;
    }
});