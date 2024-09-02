import React from 'react'
import { PaginationControls, PaginationButton, PaginationImage } from './styles'
import PreviousIcon from '../../assets/img/Previous.png'
import NextIcon from '../../assets/img/Next.png'

interface PaginationProps {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <PaginationControls>
      <PaginationButton
        isActive={currentPage > 1}
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <PaginationImage src={PreviousIcon} alt="Previous" />
      </PaginationButton>
      {Array.from({ length: totalPages }, (_, num) => (
        <PaginationButton
          key={num + 1}
          isActive={num + 1 === currentPage}
          onClick={() => paginate(num + 1)}
        >
          {num + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        isActive={currentPage < totalPages}
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <PaginationImage src={NextIcon} alt="Next" />
      </PaginationButton>
    </PaginationControls>
  )
}

export default Pagination
