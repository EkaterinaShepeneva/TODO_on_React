import Pagination from "./Pagination"

function PagesButton ({handlePage, pagesCount, page, movingOnPages}){
    return (
        <div className="pagination">
        <button
          className="pagination__back"
          onClick={(event) => {
            handlePage(event);
          }}
        >
          back
        </button>
        <button onClick={() => movingOnPages(1)} className="first_page">First page</button>
        <div className="pagination__pages">
          {new Array(pagesCount).fill().map((el, i) => 
          <Pagination
            key={Math.random()}
            page={page}
            pagesCount={pagesCount}
            i={i+1}
            movingOnPages={movingOnPages}
          />)}
        </div>
        <button onClick={() => movingOnPages(pagesCount)} className="last_page">Last page</button>
        <button
          className="pagination__forward"
          onClick={(event) => {
            handlePage(event);
          }}
        >
          forward
        </button>
      </div>
    )
}

export default PagesButton