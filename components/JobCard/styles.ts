import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  border: 1px solid #d8dee2;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0 15px 20px -19px rgb(0 0 0 / 20%);
`

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`

export const CompanyLogo = styled.img`
  max-width: 50px;
`
export const Title = styled.h3`
  font-size: 18px;
  color: #333333;
`
export const CompanyName = styled.h4`
  font-size: 16px;
  color: rgba(51,51,51,.8);
  font-weight: 600;
  align-items: center;
  display: flex;
  gap: 3px;
  `
export const Location = styled.h5`
  font-size: 14px;
  color: rgba(51,51,51,.8);
  font-weight: 400;
  align-items: center;
  display: flex;
  gap: 3px;
`
export const Description = styled.div`
  color: rgba(51,51,51,.8);
  font-size: 14px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`
export const Salary = styled.h6`
  font-size: 14px;
  color: rgba(51,51,51,.8);
  font-weight: 400;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
  gap: 3px;
`
export const PostedDate = styled.h6`
  font-size: 12px;
  color: rgba(51,51,51,.8);
  font-weight: 400;
`


export const JobLevel = styled.div`
  background: #EBEFFC;
  color: #5687BA;
  border-radius: 6px;
  margin: 20px 10px 20px 0;
  padding: 2px 8px;
  text-align: center;
  display: inline-block;
`
export const ActionButton = styled.button`
  background-color:#3174EE;
  color: #fff;
  padding: 15px;
  text-align: center; 
  border: none;
  border-radius: 4px;
  float: right;
  font-size: 16px;

  &:hover {
    background-color: #215FD0;
    cursor: pointer;
  }
`