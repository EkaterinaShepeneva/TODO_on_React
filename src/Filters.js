import { useState } from 'react'

function Filters({tasksArray, tasksRender, filterAllArray,filterDoneArray,filterUnDoneArray,sortEarlyDate, sortLastDate}){    

    const [btnActive, setActiveBtn] = useState({ filter:'filter__undone', sort:'sort__last'} )

    return(
        <section className="filterBox">
            <div className="filterBox__filter">
                <button className={btnActive.filter === 'filter__all' ? 'filter__all btnActive' : 'filter__all'} onClick={() => {setActiveBtn({...btnActive, filter:'filter__all'}); filterAllArray()}} >All</button>
                <button className={btnActive.filter === 'filter__done' ? 'filter__donel btnActive' : 'filter__done'} onClick={() => {setActiveBtn({...btnActive, filter:'filter__done'});filterDoneArray(tasksArray)}}>Done</button>
                <button className={btnActive.filter === 'filter__undone' ? 'filter__undone btnActive' : 'filter__undone'} onClick={() => {setActiveBtn({...btnActive, filter:'filter__undone'});filterUnDoneArray(tasksArray)}}>Undone</button>
            </div>
            <div className="filterBox__sorting">
                <span>Sort by Date</span>
                <button className={btnActive.sort === 'sort__early' ? 'sort__early btnActive' : 'sort__early'} onClick={() => {setActiveBtn({...btnActive, sort:'sort__early'});sortEarlyDate(tasksRender)}}>Ear</button>
                <button className={btnActive.sort === 'sort__last' ? 'sort__last btnActive' : 'sort__last'} onClick={() => {setActiveBtn({...btnActive, sort:'sort__last'});sortLastDate(tasksRender)}}>Las</button>
            </div>
        </section>
    )
}

export default Filters