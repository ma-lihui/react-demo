import EventEmitter from 'events'

class ListStore extends EventEmitter{
  constructor() {
    super();

    this.items=[]    
  }

  getAll(){
    return this.items
  }

  addNewItemHandler(text){
    this.items.push(text)
  }

  emitChange(){
    this.emit('change')
  }

  addChangeListener(callback){
    this.on('change',callback)
  }

  removeChangeListener(callback){
    this.removeListener('change',callback)
  }
}

//new 一个listStore暴露给其他模块使用
let listStore=new ListStore()

export default listStore