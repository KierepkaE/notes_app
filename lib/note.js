class Note{
  constructor(title, content){
    this.title = title;
    this.content = content;
  }

  trimmedTitle() {
    return this.title.length > 20 ?
      this.title.substring(0, 20) + "..." :
      this.title;
  }

  readContentLines(){
    return this.content.split("\n");
  }
}