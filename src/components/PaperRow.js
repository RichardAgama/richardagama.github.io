import React, { useState } from 'react';

const PaperRow = ({id, index, title, number, className, date, hidden, handleTableClick, page}) => {


    return(

    <tr onClick={handleTableClick} dataset={index} className={(id == page.id)?"selected-row":"non-selected-row"}>
        <td  dataset={index}><p className='table-cursor'>{(id == page.id)?">":""}</p></td>
        <td className='table-td' dataset={index}>{title}</td>
        <td  dataset={index}>{date}</td>
    </tr>


    );

}

export default PaperRow;