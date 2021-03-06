import { useContext } from "react"
import { MundaneListContext } from "../../../contexts/MundaneContexts"
import MundaneList from "../Components/MundaneList";
import MundaneListForm from "../Forms/MundaneListForm";

export default function MundaneListContainer(){

    const lists = useContext(MundaneListContext).get;
    return <div> 
            {lists.map( list => <MundaneList key={list.id} list={list}></MundaneList>)}
            <MundaneListForm></MundaneListForm>
        </div>
}