import React, { useState } from 'react';
import { ImageSliderComponent } from './ImageSliderComponent';

export const CatalogListDisplay = ({ productList }) => {
    const uniqueFamilyItems = {};

    const filteredData = productList.filter((book) => {
        if (!uniqueFamilyItems[book.familyItem] ) {
          uniqueFamilyItems[book.familyItem] = true;
          return true; // Include the book in the filtered array
        } else if(book.name!==null){
            return false;
        } else{
            return false;
        }
      });

    const bookkeeping = filteredData.map((book) => ({
        ...book,
        author: book.author === "" ? "N/A" : book.author,
      }));
    
      console.log(filteredData);
    return (
        
        <div className="catalog-list">
            <div className="ui cards" style={{justifyContent: 'center'}}>
                {bookkeeping.map((book) => (
                    <div className="card" backgroundColor='#84e08e' key={book.id}>
                            <div className="content">
                                <ImageSliderComponent images={book.images}/>
                                <div class="text">{book.fullName} </div>
                                <div className="meta">Author: {(book.author)} </div>

                            </div> 
                    </div>))}
            </div>
        </div>
        
    );
    };
