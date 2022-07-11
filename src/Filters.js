function Filters({filters, sort, onFilter, onSort}){    

    return(
        <section className="filterBox">
            <div className="filterBox__filter">
                <button className={filters === 'filter__all' ? 'filter__all btnActive' : 'filter__all'} onClick={() => {onFilter('filter__all')}} >All</button>
                <button className={filters === 'filter__done' ? 'filter__donel btnActive' : 'filter__done'} onClick={() => {onFilter('filter__done')}}>Done</button>
                <button className={filters === 'filter__undone' ? 'filter__undone btnActive' : 'filter__undone'} onClick={() => {onFilter('filter__undone')}}>Undone</button>
            </div>
            <div className="filterBox__sorting">
                <span>Sort by Date</span>
                <button className={sort === 'sort__early' ? 'sort__early btnActive' : 'sort__early'} onClick={() => {onSort('sort__early')}}>Ear</button>
                <button className={sort === 'sort__last' ? 'sort__last btnActive' : 'sort__last'} onClick={() => {onSort('sort__last')}}>Las</button>
            </div>
        </section>
    )
}

export default Filters