
# Typeahead implementation example

This project demonstrates an implementation of a [trie](https://en.wikipedia.org/wiki/Trie) data structure.

A trie can be used to implement a typeahaed feature where multiple words can be returned for a given prefix.
To make the implementation more useful, the trie class defined in this codebase takes a data type that will be assigned to the provided string. Later on, when strings are retrieved, the value associated with them can be retrieved as well.

This could be useful in a web application where a user is searching for a product. The product name could be stored in the trie, and the product id could be stored as the value. When the user selects a product, the product id can be retrieved and used to fetch the product from the database.

## Running the project

To use it you can clone the repo, and run the following commands

```bash
npm install
npm build
npm start
```

To develop you can run

```bash
npm run dev
```
