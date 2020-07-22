import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LogoMain } from '../LogoMain';

const useStyles = makeStyles((theme) => ({
    gridMainContentWrapper: {
        width: '100%',
        marginTop: 50,
        direction: 'column',
        flexGrow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyItems: 'center',
    },
    gridItemWrapper: {
       
    },
    shopComingSoonText: {
        color: 'rgb(42, 0, 141)',
        textShadow: '2px 2px #fff',
        fontWeight: 700,
    },
    shopComingSoonWrapper: {
        textAlign: 'center',
        marginTop: -50
    },
    gridShopItemWrapper: {
        marginBottom: 100,
        marginTop: 30
    },
    shopPlaceholderItem: {
        width: '100%',
        height: 400,
        position: 'relative',
        backgroundImage: 'url(/Assets/Images/PlaceholderShopImageFront.jpg)',
        backgroundSize: 'cover',
        textAlign: 'center',
        '&:hover': {
            backgroundImage: 'url(/Assets/Images/PlaceholderShopImageBack.jpg)',
        },
        zIndex: 1
    },
    shopAddToBasketButtons: {
        zIndex: 0,
        transition: '1s',
        position: 'relative'
    }
}));
  
export function Shop() {

    const item1 = {cost: 12, id: "steppersTee1", desc: "plain white steppers tee"}
    const item2 = {cost: 13, id: "steppersTee2", desc: "plain blue steppers tee"}
    const item3 = {cost: 14, id: "steppersTee3", desc: "plain black steppers tee"}
    const item4 = {cost: 15, id: "steppersTee4", desc: "plain green steppers tee"}



    const styles = useStyles();
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)
    const [isViewingBasket, setIsViewingBasket] = useState(false)
    const [shopItem1Size, setShopItem1Size] = useState('')
    const [shopItem2Size, setShopItem2Size] = useState('')
    const [shopItem3Size, setShopItem3Size] = useState('')
    const [shopItem4Size, setShopItem4Size] = useState('')

    function handleAddToBasket(item, cost){
        setTotal(total+cost)
        var currentBasket = basket
        switch(item) {
            case 1:
                currentBasket.push([item.toString()+shopItem1Size])
                break;
            case 2:
                currentBasket.push([item.toString()+shopItem2Size])
                break;
            case 3:
                currentBasket.push([item.toString()+shopItem3Size])
                break;
            case 4:
                currentBasket.push([item.toString()+shopItem4Size])
                break;
            default:
              // code block
        }
        setBasket(currentBasket.concat())
    }

    var basketItemsGrid = basket.map((IDSize) => 
        <Grid item xs={12}>
            {IDSize}
        </Grid>
    )

    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.shopComingSoonWrapper}>
                    <h1 className={styles.shopComingSoonText}>STEPPERS CLUB MERCHANDISE</h1>
                </Grid>
            </Grid>
            basket: {basket} -- 
            total: £{total} 
            {isViewingBasket && <button onClick={() => setIsViewingBasket(!isViewingBasket)}>Back to store</button>}
            {isViewingBasket && 
                <Grid item container xs={12}>
                    {basketItemsGrid}
                </Grid>
            }
            {!isViewingBasket && <button onClick={() => setIsViewingBasket(!isViewingBasket)}>Basket</button>}
            {!isViewingBasket &&
                <Grid item container xs={12} spacing={3} className={styles.gridShopItemWrapper}>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_1
                        </div>
                        placeholder_item_1 £{item1.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem1Size(e.target.value)}>
                                <option value="" disabled selected>Size</option>
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(1,item1.cost)}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_2
                        </div>
                        placeholder_item_2 £{item2.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem2Size(e.target.value)}>
                                <option value="" disabled selected>Size</option>
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(2,item2.cost)}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_3
                        </div>
                        placeholder_item_3 £{item3.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem3Size(e.target.value)}>
                                <option value="" disabled selected>Size</option>
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(3,item3.cost)}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_4
                        </div>
                        placeholder_item_4 £{item4.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem4Size(e.target.value)}>
                                <option value="" disabled selected>Size</option>
                                <option value="XL">XL</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="S">S</option>
                                <option value="XS">XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(4,item4.cost)}>Add to basket</button>
                        </div>
                    </Grid>
                </Grid>
            }            
        </Grid>
        
    )
  }

 