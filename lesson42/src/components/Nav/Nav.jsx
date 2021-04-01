import React from 'react';

const Nav = (props) => {
    // const [home, products, contacts] = props.list;
    return (
        <ul>
       {props.list.map((item, i) => (
           <li key={ props.list[i] }><a href ='/home'>{props.list[i]}</a></li>
       ))}
    </ul> 

    )
}

export default Nav;


