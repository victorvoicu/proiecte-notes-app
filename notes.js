const fs=require('fs')
function getNotes() {
     
    
}
//add read remove list
function loadNotes(title) {
    //citeste json si returneaza obiect
   let x= fs.readFileSync(title).toString()
   let y=JSON.parse(x)
   console.log(y);
   return y
   
}
function addNote(title,body) {
    
}

module.exports={getNotes,loadNotes,addNote}
