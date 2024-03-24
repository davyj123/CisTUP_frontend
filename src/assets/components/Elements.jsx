import styled from "styled-components";
export const Page = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const Navbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 6px 0px grey;
    padding: 1rem;
`;
export const Apptitle = styled.h3`
    
`;
export const AppLinks = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    margin: 0 1rem;
`;
export const Applink = styled.li`
    margin: 0 1rem;
    font-weight: bold;
    padding: .5rem;

    &:hover{
        background-color: #e2ddde;
    }
`;


export const MainContainer = styled.div`
    width: 100%;
    height: auto;
`;
export const UploadWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;
export const UploadContainer = styled.form`
    padding: 3rem;
    border: 2px dashed red;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Files = styled.input`
    background-color: #ee5775;
    color: white;
    padding: 1rem;
`;
export const UploadBtn = styled.button`
    margin: 1rem;
    background: #f8d3f8;
    border: none;
    outline: none;
    padding: 0.8rem 1rem;
    cursor: pointer;

    &:active{
        background: #f1b7f1;
    }
`;
export const UploadStatus = styled.span``;


export const DataTableWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

