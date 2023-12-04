

export class Character{
  name
  role 
  currentHp 
  maxHp 
  isDead 

  constructor(setName, setRole, setHealth){
    console.log('building character', setName, setRole, setHealth);
    this.name = setName
    this.role = setRole
    this.maxHp = setHealth 
    this.currentHp = this.maxHp
    this.isDead = false
    this.greeting()
  }

  greeting(){
    console.log('🎅💬', `Hello my name is ${this.name}, im ready to fight!🤺`)
  }

  characterTemplate(){
    return `
    <div class="col-4 border bg-white shadow rounded text-center">
        <h3>${this.name}</h3>
        <h4>${this.role}</h4>
        <div>
          <span>${this.currentHp}</span>/ <span>${this.maxHp}</span>
        </div>
        <div>
          <button onclick="app.CharactersController.hurtCharacter('${this.name}')" class="btn btn-danger"><i class="mdi mdi-arrow-down"></i></button>
        </div>
      </div>
    `
  }
}

// example of how to make a character
// let flint = new Character('Flint', 'Fighter', 25)
