import React, { Component } from 'react'
import './Merch.css';

export default class Merch extends Component {
    constructor(props){
        super(props);

        const merch1 = require('.//MerchImages/bkgn.jpg');
        const merch2 = require('.//MerchImages/anhood.jpg');
        const merch3 = require('.//MerchImages/printtest2.jpg');
        const merch4 = require('.//MerchImages/ceremony.jpg');
        const merch5 = require('.//MerchImages/mongo.jpg');
        const merch6 = require('.//MerchImages/rebuild.jpg');
        const merch7 = require('.//MerchImages/rgnsup.jpg');
        const merch8 = require('.//MerchImages/rottingout.jpg');
        const merch9 = require('.//MerchImages/titlefight.jpg');
        const merchx = require('.//MerchImages/trashtalk.jpg');


        const other1 = require('.//PlantImages/reworked.jpg');
        const other2 = require('.//PlantImages/heaven.jpg');
        const other3 = require('.//PlantImages/toobright.jpg');
        const other4 = require('.//PlantImages/dogcoiner.jpg');
        const other5 = require('.//PlantImages/wip.jpg');
        const other6 = require('.//PlantImages/trashsamp.jpg');
        const other7 = require('.//PlantImages/ald.jpg');
        const other8 = require('.//PlantImages/day2qt.jpg');
        const other9 = require('.//PlantImages/isolation.jpg');
        const otherx = require('.//PlantImages/tday.jpg');
      
        this.clickMerch = this.clickMerch.bind(this);
        this.clickOther = this.clickOther.bind(this);
        

        this.state = {
            
                index: 0,
                indexTwo: 0,
                otherList: [other1, other2, other3, other4, other5, other6, other7, other8, other9, otherx],
                merchList: [merch1, merch2, merch3, merch4, merch5, merch6, merch7, merch8, merch9, merchx]
        };
        
        
    };

// Click image to move through index
    clickMerch() {
        if(this.state.index + 1 === this.state.merchList.length) {
            this.setState ({
                index: 0
            });
        } else {
            this.setState({
                index: this.state.index + 1
            });
        }
    }; 

//same functionality as above just seperate box this can be seperated into two components and passed down using props
    clickOther() {
        if(this.state.index + 1 === this.state.otherList.length) {
                this.setState ({
                    index: 0
                });
            } else {
                this.setState({
                    index: this.state.index -1
                });
            }
        }; 
    

    render() {
        return (
            <div className="merchcont">
                <h1>TracPad Originals</h1>
            
                    <img
                        src={this.state.merchList[this.state.index]} 
                        onClick={this.clickMerch} 
                        alt="merch-draw"
                        height={550}
                        width={490}
                        className='merch-box' />

                     <img
                        src={this.state.otherList[this.state.index]} 
                        onClick={this.clickOther} 
                        alt="merch-draw"
                        height={550}
                        width={490}
                        className='merch-box' />


          
                    <p className="alsoblurb">
                        The images in this section are a randomized assortment of some of the 
                        rejected ideas and designs. The drawings of the band shirts are how the idea first 
                        came to be. Remember when merch was fucking $20... Shit, remember when merch was $15.
                        I bought a Mongoloids crew neck in 2007 that cost $20. That same crew neck is currently 
                        being sold for $100+ on <a href="https://depop.com" target="_blank" rel="noopener noreferrer">Depop.</a>
                        That website is pretty crazy when you think about how the DIY economy used to work.
                    </p>
            </div>
        )
    }
}
