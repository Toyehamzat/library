const addBook=document.getElementById('add-book');
const formcontainer=document.getElementById('form-container');
const form=document.getElementById('book-form')
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readBook = document.getElementById('read');
const newBook = document.getElementById('new-book');
const library = document.getElementById('library');

let mylibrary=[];
let bookAddition;

addBook.addEventListener('click',() => {
    if(formcontainer.style.display=='block'){
        formcontainer.style.display='none';
    } else if((formcontainer.style.display='none')){
        formcontainer.style.display='block';
    }
});

class book{
    constructor(title,author,pages,readBook){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.readBook=readBook;
    }
}

function addbooktolibrary(){
    formcontainer.style.display='none';
    mylibrary[mylibrary.length]= new book(
        title.value,
        author.value,
        pages.value,
        readBook.checked
    );
}

function createbook(){
    library.innerHTML='';

    for(let i=0; i<mylibrary.length;i++){
        const bookDiv=document.createElement('div')
        const titleDiv=document.createElement('div')
        const authorDiv=document.createElement('div')
        const pagesDiv=document.createElement('div')
        const readBtn=document.createElement('button')
        const removeBtn=document.createElement('button')

        titleDiv.classList.add('title');
		authorDiv.classList.add('author');
        pagesDiv.classList.add('pages');
		readBtn.classList.add('read');
		removeBtn.classList.add('remove');
		bookDiv.classList.add('book');

        titleDiv.textContent=mylibrary[i].title;
        authorDiv.textContent=mylibrary[i].author;
        pagesDiv.textContent=`${mylibrary[i].pages} pages`;
        removeBtn.textContent='remove'

        if (mylibrary[i].readBook) {
			readBtn.textContent = 'Read';
			readBtn.style.backgroundColor = '#63da63';
		} else {
			readBtn.textContent = 'Not Read';
			readBtn.style.backgroundColor = '#e04f63';
		}

        readBtn.addEventListener('click', function () {
			mylibrary[i].readBook = !mylibrary[i].readBook;
			createbook();
		});

		removeBtn.addEventListener('click', () => {
			mylibrary.splice(i, 1);
			createbook();
		});

		bookDiv.appendChild(titleDiv);
		bookDiv.appendChild(authorDiv);
		bookDiv.appendChild(pagesDiv);
		bookDiv.appendChild(readBtn);
		bookDiv.appendChild(removeBtn);
        library.appendChild(bookDiv);



    }
}
form.addEventListener('submit',function(e) {
    addbooktolibrary();
    createbook();
    e.preventDefault();
    form.reset();
})



// const addBook=document.getElementById('add-book');
// const formcontainer=document.getElementById('form-container');
// const form=document.getElementById('book-form')
// const title = document.getElementById('title');
// const author = document.getElementById('author');
// const pages = document.getElementById('pages');
// const readBook = document.getElementById('read');
// const newBook = document.getElementById('new-book');
// const library = document.getElementById('library');

// let mylibrary=[];
// let bookAddition;

// addBook.addEventListener('click',() => {
//     if(formcontainer.style.display=='block'){
//         formcontainer.style.display='none';
//     } else if((formcontainer.style.display='none')){
//         formcontainer.style.display='block';
//     }
// });

// class book{
//     constructor(title,author,pages,readBook){
//         this.title=title;
//         this.author=author;
//         this.pages=pages;
//         this.readBook=readBook;
//     }
// }

// function addbooktolibrary(){
//     formcontainer.style.display='none';
//     mylibrary[mylibrary.length]= new book(
//         title.value,
//         author.value,
//         pages.value,
//         readBook.checked
//     );
// }

// function createbook(){
//     library.innerHTML='';

//     for(let i=0; i<mylibrary.length;i++){
//         const bookDiv=document.createElement('div')
//         const titleDiv=document.createElement('div')
//         const authorDiv=document.createElement('div')
//         const pagesDiv=document.createElement('div')
//         const readBtn=document.createElement('button')
//         const removeBtn=document.createElement('button')

//         titleDiv.classList.add('title');
// 		authorDiv.classList.add('author');
//         pagesDiv.classList.add('pages');
// 		readBtn.classList.add('read');
// 		removeBtn.classList.add('remove');
// 		bookDiv.classList.add('book');

//         titleDiv.textContent=mylibrary[i].title;
//         authorDiv.textContent=mylibrary[i].author;
//         pagesDiv.textContent=`${mylibrary[i].pages} pages`;
//         removeBtn.textContent='remove'

//         if (mylibrary[i].readBook) {
// 			readBtn.textContent = 'Read';
// 			readBtn.style.backgroundColor = '#63da63';
// 		} else {
// 			readBtn.textContent = 'Not Read';
// 			readBtn.style.backgroundColor = '#e04f63';
// 		}

//         readBtn.addEventListener('click', function () {
// 			mylibrary[i].readBook = !mylibrary[i].readBook;
// 			createbook();
// 		});

// 		removeBtn.addEventListener('click', () => {
// 			mylibrary.splice(i, 1);
// 			createbook();
// 		});

// 		bookDiv.appendChild(titleDiv);
// 		bookDiv.appendChild(authorDiv);
// 		bookDiv.appendChild(pagesDiv);
// 		bookDiv.appendChild(readBtn);
// 		bookDiv.appendChild(removeBtn);
//         library.appendChild(bookDiv);



//     }
// }
// form.addEventListener('submit',function(e) {
//     addbooktolibrary();
//     createbook();
//     e.preventDefault();
//     form.reset();
// })
