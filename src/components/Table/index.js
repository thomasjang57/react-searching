import React from 'react';

import Button from '../Button';

const Table = function (props) {
    const { list, onDismiss } = props;
    return (
       <div className="table">
         {
           list.map(item =>
             <div key={item.objectID} className="table-row">
               <span>
                 <a href={item.url}>{item.title}</a>
               </span>
               <span>{item.author}</span>
               <span>{item.num_comments}</span>
               <span>{item.points}</span>
               <span>
                 <Button
                   onClick={() => onDismiss(item.objectID)} className="button-inline"
                     > Dismiss
                 </Button>
               </span>
             </div>
             )
          }
       </div>
    );
 }


export default Table;
