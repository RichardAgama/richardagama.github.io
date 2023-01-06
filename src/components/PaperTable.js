import React, { useState } from 'react';
import PaperRow from './PaperRow';

const PaperTable = ({papers, handleTableClick, page}) => {


    return(

        <table>
        <tr>
            <th></th>
            <th className='table-header'>Design</th>
            <th className='table-header'>Date</th>
        </tr>

        
        {
            papers.map(paper => <PaperRow key={paper.index} {...paper} page={page} handleTableClick={handleTableClick}></PaperRow>)
        }

        
        </table>


    );

}

export default PaperTable;