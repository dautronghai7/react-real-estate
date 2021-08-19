import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.1s ease-in-out;    
    opacity: ${({isOpen})=>(isOpen ? '1' : '0')};    
    top: ${({isOpen})=>(isOpen ? '1' : '-100%')};

`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;
export const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
export const DropdownWrapper = styled.div`

`;
export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px){
        grid-template-rows: repeat(4, 60px);
    }
`;
export const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{
        color: #000d1a;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu >
                {menuData.map((item, index)=>{return (
                    <DropdownLink to={item.link} key={index}>
                        {item.title}
                    </DropdownLink>
                )
                })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>Contact Us</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
