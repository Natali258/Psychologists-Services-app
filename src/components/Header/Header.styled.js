import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SHeader = styled.div`
display: block;
width: 100%;
padding: 24px 0 24px 0;
border-bottom: 1px solid rgba(25, 26, 21, 0.1);;
`

export const SHeaderContainer = styled.div`
display:flex;
flex-direction: row;
`


export const SHeaderBoxLink = styled.div`
display: flex;
align-items: center;
`

export const SHeaderLink = styled(NavLink)`
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 120%;
letter-spacing: -0.02em;
color: #54be96;
text-decoration: none;
`

export const SHeaderLinkSpan = styled.span`
font-weight: 600;
color: #191a15;
`

export const SHeaderUl = styled.ul`
display: flex;
position: relative;
margin-left: 130px;
justify-content: center;
align-items: center;
gap: 40px;
flex-direction: row;
`

export const SHeaderLinkNav = styled(NavLink)`
font-weight: 400;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;
text-decoration: none;
`

export const SCircleContainer = styled.li`
/* display:block;
width: 9px;
height: 9px;
border-radius: 50%;
background-color: rgba(84, 190, 150, 1); */

&:before {
  content: "";
  position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: rgba(84, 190, 150, 1);
  top: 40px;
  left: 0;
  transition: all 1s;
}
`

export const SHeaderUlBtn = styled.ul`
display: flex;
margin-left: auto;
justify-content: center;
align-items: center;
gap: 8px;
flex-direction: row;
`

export const SHeaderBtn = styled.button`
display: block;
padding: 14px 39px;
border-radius: 30px;
border: 1px solid rgba(25, 26, 21, 0.2);
background-color: rgba(251, 251, 251, 1);
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #191a15;

&:hover {
    border: 1px solid #36a379;
}
`

export const SHeaderBtnRegistration = styled.button`
display: block;
padding: 14px 39px;
border-radius: 30px;
background-color: #54be96;
border: 1px solid rgba(25, 26, 21, 0.2);
transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

font-weight: 500;
font-size: 16px;
line-height: 125%;
letter-spacing: -0.01em;
color: #fbfbfb;

&:hover {
    background-color: #36a379;
}
`