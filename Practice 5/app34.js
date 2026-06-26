const student={
    name:"Nischith",
    marks:95,
    prop:this,
    getName:function(){
        console.log(this);
        return this.name;
    },
    getMarks:function(){
        console.log(this);
        return this.marks;
    }
};
console.log(student.getName());
console.log(student.getMarks());