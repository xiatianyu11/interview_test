describe('Directive: myProgress', function () {
	var compile, scope, directiveElem;

  function getCompiledElement(){
    var element = angular.element('<my-progress></my-progress>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }



  beforeEach(function(){
    module('myApp');

    inject(function($compile, $rootScope, $templateCache){
      $templateCache.put('views/myProgress.html', '<div id="container"></div>');
      compile = $compile;
      scope = $rootScope.$new();
    });

    directiveElem = getCompiledElement();
  });


  it('should have container element', function () {
    var containerElement = directiveElem.find('#container');
    expect(containerElement).toBeDefined();
  });


});
