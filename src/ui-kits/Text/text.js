import React from 'react';
import { TextSpan, TextLink } from './text.styled';

// trong Props sẽ cho custom lại -> có thể là thẻ <span> , <a> , <p> -> liên quan đến text

function text({ tag = 'span', href, children, ...props }) {
    // ...props -> sẽ dồn hết vào ( isBold: true, isUnderline: false, ...) 

    if(tag === 'link' && href){
        return (
            <TextLink {...props}>
                Link
            </TextLink>
        )
    }else if(tag === 'span') {
        return(
            <TextSpan {...props}>
                span
            </TextSpan>
        )
    }

    return (
        <div></div>
    );
}

export default text;