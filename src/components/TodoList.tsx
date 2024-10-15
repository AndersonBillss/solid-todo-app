import { createSignal } from "solid-js"

export default function TodoList(){
    const [list, setList] = createSignal<string[]>([])
    const [newItem, setNewItem] = createSignal<string>("")
    return<>
        <ul>
            {list().map(item => <li>{item}</li>)}
        </ul>
        <input value={newItem()} onChange={e => setNewItem(e.target.value)}/>
        <button onClick={() => addList()}>Add list</button>
    </>

    function addList(){
        if(newItem() !== ''){            
            setList([...list(), newItem()]);
            setNewItem("");
        }
    }
}

