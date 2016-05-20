bmApp.controller('BookListCtrl', function($scope){
  $scope.books = [
    {
      title: "JavaScript für Enterprise-Entwickler",
      isbn: "978-3-89864-728-1",
      author: "Oliver Ochs"
    },
    {
      title: "Node.js & Co.",
      isbn: "978-3-89864-829-5",
      author: "Golo Roden"
    },
    {
      title: "CofeeScript",
      isbn: "978-3-86490-050-1",
      author: "Andreas Schubert"
    }
  ];

  $scope.getBooksOrder = function(book) {
    return book.title
  };
});
