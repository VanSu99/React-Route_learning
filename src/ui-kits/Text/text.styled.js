import styled from 'styled-components';


export const TextSpan = styled.span`
    ${props => props.isBold ? 'font-weight: bold;' : ''}
    ${props => props.isUnderline ? 'text-decoration: underline;' : ''}
`;

export const TextLink = styled.a``;