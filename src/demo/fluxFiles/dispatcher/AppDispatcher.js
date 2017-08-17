import flux from 'flux'
import listStore from '../stores/listStore'

let Dispatcher=flux.Dispatcher;
let AppDispatcher=new Dispatcher();


AppDispatcher.register((action)=>{
  switch(action.actionType){
    case "ADD_NEW_ITEM":
      listStore.addNewItemHandler(action.text)
      listStore.emitChange()
      break;
    default:
  }
})

export default AppDispatcher

