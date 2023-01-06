import React, { useState } from 'react';
import Paper from './Paper';
import PaperArray from './PaperArray';
import PaperTable from './PaperTable';


const PaperList = ({papers = [], page, handleTableClick}) => {


    return(

<>



        <PaperTable papers={papers} page={page} handleTableClick={handleTableClick}></PaperTable>
        <Paper key={page.id} {...page}></Paper>
        

        {
            //papers.map(paper => <Paper key={paper.id} {...page}></Paper>)
        }
</>
       
    );

}

export default PaperList;