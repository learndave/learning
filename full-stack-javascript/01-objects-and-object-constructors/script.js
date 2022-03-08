function Book(title, author, numPages, hasRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.hasRead = hasRead;

    this.info = function() {
        if (this.hasRead) {
            message = "already read";
        } else {
            message = "not read yet";
        }
        return `${title} by ${author}, ${numPages} pages, ${message}.`;
    }
}

const theHobbit = new Book("The Hobbit",
                            "J.R.R. Tolkien",
                            295,
                            false);

console.log(theHobbit.info());