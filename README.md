# MyReads Project

Main Page(/) shows your bookshelf.
Search Page(/search) shows search results you can add to your bookshelf.
You can move books between shelves and move away from your bookshelf.

# Components

- ListBooks - component for main page(/)
  under ListBooks
  - Bookshelf, Book, SelectList components exist.
  - Book and Select components are used for Search page as well.
- Search - component for search page(/search)

# Other details

- In case of missing author or image, errors were handled.
- Props type were applied for all components.
- Props were more used than states.
- BookAPIs were called from App and Search component.

# Lessons Learned

- The relationship of state and setState.
- How to pass props to components in hierarchy.
- how to send request and use response data accordingly.
