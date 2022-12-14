import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const FilterButton = styled.button<{ shouldFilter }>`
  display: flex;
  flex-direction: row;
  display: inline-block;
  border: 1px solid #3174EE;
  border-radius: 4px;
  padding: 6px;
  margin-bottom: 20px;
  ${({ shouldFilter }) => css`
  background-color: ${shouldFilter ? '#3174EE' : '#fff'};
  `}
  
  height: 32px;
  
  &:hover {
    cursor: pointer;
  }
  `

export const FilterButtonText = styled.span<{ shouldFilter }>`
  ${({ shouldFilter }) => css`
  color: ${shouldFilter ? '#fff' : '#3174EE'};
  `}
  font-size: 12px;
  font-weight: 600;
  `

export const SearchBar = styled.input`
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  `

export const SearchWrapper = styled.div`
  background-color: #fff;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #9ea5a9;
  display: inline-flex;
  align-items: center;
  padding: 5px;
`

export const JobListWrapper = styled.div`
  display: flex;
  justify-Content: space-around;
  flex-Wrap: wrap;
`