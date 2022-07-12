function Pagination ({item, page}) {
    return (
        <div key={Math.random()} className={ item === page ? "pagination__pages__number activePages" : "pagination__pages__number" }>
          {item}
        </div>
    )
}

export default Pagination