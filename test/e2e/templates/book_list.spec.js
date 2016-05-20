describe("E2E: book list vie", function() {

  // Define the arraz of of books in the expected order
  //Sorted by title
  var expectedBooks = [
    {
      title: "CofeeScript",
      isbn: "978-3-86490-050-1",
      author: "Andreas Schubert"
    },
    {
      title: "JavaScript für Enterprise-Entwickler",
      isbn: "978-3-89864-728-1",
      author: "Oliver Ochs"
    },
    {
      title: "Node.js & Co.",
      isbn: "978-3-89864-829-5",
      author: "Golo Roden"
    }
  ];

  //Derive an array that onlz contains titles
  //for easier expectation checks.
  var orderedTitles = expectedBooks.map(function(book){
    return book.title;
  });

  beforeEach(function() {
    browser().navigateTo('#/books');
    browser().reload();
  });

  var selector = 'table.bm-book-list tr';

  it('should show the correct number of books', function(){
    expect(repeater(selector).count()).toEqual(expectedBooks.length);
  });

  it('should show the books in proper order', function(){
    expect(repeater(selector).column('book.title')).toEqual(orderedTitles);
  });

  it('should show the correct book information', function(){
    for(var i = 0, n = expectedBooks.length; i < n; i++) {
      expect(repeater(selector).row(i)).toEqual(
        [
          expectedBooks[i].title,
          expectedBooks[i].author,
          expectedBooks[i].isbn
        ]
      );
    }
  });

  it('should filter correctly by book title', function() {

    var searchText = expectedBooks[0].title.substr(0,6);
    input('searchText').enter(searchText);

    expect(repeater(selector).column('book.title')).toEqual([expectedBooks[0].title]);
  });

  it('should filter correctly by book author', function() {
    var searchText = expectedBooks[0].author.substr(0,7);
    input('searchText').enter(searchText);

    expect(repeater(selector).column('book.author')).toEqual([expectedBooks[0].author]);
  });

  it('should filter correctly by isbn number', function(){
      var searchText = expectedBooks[0].isbn.substr(-5,5);
      input('searchText').enter(searchText);

      expect(repeater(selector).column('book.isbn')).toEqual([expectedBooks[0].isbn]);
  });

  it('should appropritate navigate to detail view', function(){
    var i = 0;
    var detailsLink = selector + ':nth-child(' + (i + 1) + ') a';
    element(detailsLink).click();

    expect(browser().location().path()).toEqual('/books/' + expectedBooks[i].isbn);
  });

});
