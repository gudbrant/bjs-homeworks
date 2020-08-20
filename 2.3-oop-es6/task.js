class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix () {
       this.state *= 1.5;
    }
    
    set state (state) {
        this._state = state;
        if (this._state < 0) {
            this._state = 0;
        } else if (this.state > 100) {
            this._state = 100;
        } else {
            return this._state;
        }
    }
    
    get state (){
        return this._state;
    }
    
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
        super (author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount,state)  {
        super (author, name, releaseDate, pagesCount,state);
        this.type = 'detective';
        
    }
}


// =========== Задание 2 ============

class Library extends PrintEditionItem {
    
    constructor (name ,state) {
        super (name, state);
        this.books = [];
    }
    
    addBook(book) {
        this.books = [];
        this.books.push(book);
        return this.books.length;
    }
    
    findBookBy(type, value) {
        
    }

    giveBookByName(bookName) {
        
        /*let book = this.books.findIndex (item => item.name == book.Name);
        if (book === -1) {
            return null;
        } else {
            this.book.splice(book, 1);
            let bookFiend ((this.book.splice(book, 1)));
            return bookFiend;
        }*/
        
    }
    
    
    
}



// ============= задание 3 ===========

class StudentLog {
  constructor(name) {
      this.name = name;
      this.totalGradeArray = [];
  }

  getName() {
      return this.name;
  }

  addGrade(grade, subject) {
      if(this[subject]) {
      } else {
          this[subject] = [];
      }
      
      if(grade > 0 && grade < 6) {                
          this.totalGradeArray.push(grade);
          this[subject].push(grade);
          return this[subject].length;
      } else {
          console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
      }
  }

  getAverageBySubject(subject) {
      if(this[subject]) {
          let averageBySubject = 0;
          for (let i = 0; i < this[subject].length; i++) {
              averageBySubject = averageBySubject + this[subject][i];
          }
          return (averageBySubject / this[subject].length);
      } else {
          return 0;
      }
  }

  getTotalAverage() {
      let totalSum = 0;

      if (this.totalGradeArray.length === 0) {
          return 0;
      } else {
          for (let i = 0; i < this.totalGradeArray.length; i++) {
              totalSum = totalSum + this.totalGradeArray[i];
          }

          return (totalSum / this.totalGradeArray.length);
      }
  }
}
