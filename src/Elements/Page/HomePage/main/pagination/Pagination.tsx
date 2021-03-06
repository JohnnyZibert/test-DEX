import ReactPaginate from 'react-paginate'

import styles from './Paginate.module.scss'

export const Pagination = () => {
  const svgBackArrow = (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.4 0.768457C5.712 1.08046 5.712 1.58446 5.4 1.89646L2.296 5.00046L5.4 8.10446C5.712 8.41646 5.712 8.92046 5.4 9.23246C5.088 9.54446 4.584 9.54446 4.272 9.23246L0.600003 5.56046C0.288003 5.24846 0.288003 4.74446 0.600003 4.43246L4.272 0.760457C4.576 0.456457 5.088 0.456457 5.4 0.768457Z"
        fill="#707070"
      />
    </svg>
  )
  const svgUpArrow = (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.599997 0.768457C0.287997 1.08046 0.287997 1.58446 0.599997 1.89646L3.704 5.00046L0.599997 8.10446C0.287997 8.41646 0.287997 8.92046 0.599997 9.23246C0.911997 9.54446 1.416 9.54446 1.728 9.23246L5.4 5.56046C5.712 5.24846 5.712 4.74446 5.4 4.43246L1.728 0.760457C1.424 0.456457 0.911997 0.456457 0.599997 0.768457Z"
        fill="#707070"
      />
    </svg>
  )

  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel={svgUpArrow}
        onPageChange={(event) => event.selected + 1}
        pageRangeDisplayed={4}
        pageCount={4}
        // forcePage={currentPage - 1}
        previousLabel={svgBackArrow}
      />
    </div>
  )
}
