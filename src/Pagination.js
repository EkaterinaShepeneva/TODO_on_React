function Pagination ({ page, pagesCount, i}) {
    return (
        <div className={ i === page ? "pagination__pages__number activePages" : "pagination__pages__number" }>
          {i}
        </div>
    )
}

export default Pagination