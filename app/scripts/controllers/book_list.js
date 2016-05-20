bmApp.controller('BookListCtrl', function($scope, BookDataService){
  
  $scope.books = BookDataService.getBooks();

  $scope.getBooksOrder = function(book) {
    return book.title
  };
});
