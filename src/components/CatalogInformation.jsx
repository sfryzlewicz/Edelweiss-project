import React, { useState } from 'react';
import { Image, Icon, Container, Card } from 'semantic-ui-react';
import CatalogData from '../data/CatalogData.json';
import gif from '../output-onlinegiftools.gif';

export const CatalogInformation = () => {

    return (
        <div className="catalog-information-container">
            <Image className="background-image" >
                <div className="info-card">
                    <h2 style={{ alignItems: 'center', justifyContent: 'center'}}>{CatalogData.name}</h2>
                    <h3 style={{ alignItems: 'center', justifyContent: 'center'}}>Organization: #{CatalogData.orgID} -{CatalogData.orgName}</h3>

                </div>
                <img style={{marginLeft:'35%', marginTop:'28%', display:'flex',width:'30%'}} src={gif}></img>
            </Image>
        </div>
    );
};