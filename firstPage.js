var database, listNode;
var allBooks;
var displayName = "";
var displayEmail = "";
var bookLink;

function setup() {
    createCanvas(windowWidth, windowHeight);
    database = firebase.database();

    user = new Users();
}

function draw() {
    
    Users.readUsers();
console.log(allBooks);
var pos = 100;
    var index = 0;
    for (var books in allBooks) {
        pos = pos + 30;
        index = index + 1;
        bookLink = createA("#", allBooks[books].title);
        bookLink.position(100, pos);
        displayName = allBooks[index-1].name;
        displayEmail = allBooks[index-1].email;
        bookLink.mousePressed(() => {
       
            
            text(displayName, 200, 200);
            text(displayEmail, 300, 200);

        
    })
        

    }

}