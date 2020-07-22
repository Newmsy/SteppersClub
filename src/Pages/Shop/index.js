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
        textShadow: '2px 2px rgb(255,209,76)',
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
    },
    viewBasketGrid: {
        height: 110,
        justifyContent: 'center',
    },
    viewBasketItemImage: {
        height: 100
    },
    viewBasketWrapper: {
        justifyContent: 'center',
        marginTop: 50
    },
    basketBreakLine: {
        width: '100%',
        height: 2,
        backgroundColor:'black',
    },
    viewBasketTitlesGrid: {

    },
    viewBasketTotalGrid: {
        marginBottom: 150
    }
}));
  
export function Shop() {

    const item1 = {cost: 12, id: "steppersTee1", desc: "plain white steppers tee", imageFrontURL: '/Assets/Images/PlaceholderShopImageFront.jpg', imageBackURL: '/Assets/Images/PlaceholderShopImageBack.jpg'}
    const item2 = {cost: 13, id: "steppersTee2", desc: "plain blue steppers tee", imageFrontURL: '/Assets/Images/PlaceholderShopImageFront.jpg', imageBackURL: '/Assets/Images/PlaceholderShopImageBack.jpg'}
    const item3 = {cost: 14, id: "steppersTee3", desc: "plain black steppers tee", imageFrontURL: '/Assets/Images/PlaceholderShopImageFront.jpg', imageBackURL: '/Assets/Images/PlaceholderShopImageBack.jpg'}
    const item4 = {cost: 15, id: "steppersTee4", desc: "plain green steppers tee", imageFrontURL: '/Assets/Images/PlaceholderShopImageFront.jpg', imageBackURL: '/Assets/Images/PlaceholderShopImageBack.jpg'}



    const styles = useStyles();
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)
    const [isViewingBasket, setIsViewingBasket] = useState(false)
    const [shopItem1Size, setShopItem1Size] = useState('')
    const [shopItem2Size, setShopItem2Size] = useState('')
    const [shopItem3Size, setShopItem3Size] = useState('')
    const [shopItem4Size, setShopItem4Size] = useState('')

    function handleAddToBasket(item, cost){
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
                return
        }
        setTotal(total+cost)
        setBasket(currentBasket.concat())
    }

    function getShopItemInfo(itemID) {
        switch(itemID) {
            case '1':
                return item1
            case '2':
                return item2
            case '3':
                return item3
            case '4':
                return item4
            default:
                return 
        }
        
    }

    function RemoveItem(index, cost) {
        var currentBasket = basket
        currentBasket.splice(index, 1)
        setBasket(currentBasket)
        setTotal(total-cost)
    }

    var basketItemsGrid = basket.map((IDSize, i) => 
        <Grid item container xs={8} className={styles.viewBasketGrid}>            
            <Grid item xs={3}>{getShopItemInfo(IDSize.toString().charAt(0)).desc}</Grid>
            <Grid item xs={3}>{IDSize.toString().substring(1)}</Grid>
            <Grid item xs={3}><img src={getShopItemInfo(IDSize.toString().charAt(0)).imageFrontURL} className={styles.viewBasketItemImage} alt="Shop Item"/></Grid>
            <Grid item xs={1}>£{getShopItemInfo(IDSize.toString().charAt(0)).cost}</Grid>
            <Grid item xs={2}><button onClick={()=>RemoveItem(i,getShopItemInfo(IDSize.toString().charAt(0)).cost)}>REMOVE</button></Grid>
            <Grid item xs={12} className={styles.basketBreakLine}></Grid>
        </Grid>
    )

    

    
    return (
        <Grid container className={styles.gridMainContentWrapper}>
            <LogoMain/>
            <Grid item container xs={12} className={styles.gridItemWrapper}>
                <Grid item xs={12} className={styles.shopComingSoonWrapper}>
                    <h1 className={styles.shopComingSoonText}>THE CLUB SHOP</h1>
                </Grid>
            </Grid>
            basket: {basket} -- 
            total: £{total} 
            {isViewingBasket && <button onClick={() => setIsViewingBasket(!isViewingBasket)}>Back to store</button>}
            {isViewingBasket && 
                <Grid item container xs={12} className={styles.viewBasketWrapper}>
                    <Grid item container xs={8} className={styles.viewBasketTitlesGrid}>            
                        <Grid item xs={3}>ITEM</Grid>
                        <Grid item xs={3}>SIZE</Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={1}>PRICE</Grid>
                        <Grid item xs={12} className={styles.basketBreakLine}></Grid>
                    </Grid>
                    {basketItemsGrid}
                    <Grid item container xs={8} className={styles.viewBasketTotalGrid}>            
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}>TOTAL: </Grid>
                        <Grid item xs={1}>£{total}</Grid>
                    </Grid>
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
                                <option value="" disabled selected={shopItem1Size===''}>Size</option>
                                <option value="XL" selected={shopItem1Size==='XL'}>XL</option>
                                <option value="L" selected={shopItem1Size==='L'}>L</option>
                                <option value="M" selected={shopItem1Size==='M'}>M</option>
                                <option value="S" selected={shopItem1Size==='S'}>S</option>
                                <option value="XS" selected={shopItem1Size==='XS'}>XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(1,item1.cost)} disabled={shopItem1Size===''}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_2
                        </div>
                        placeholder_item_2 £{item2.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem2Size(e.target.value)}>
                            <option value="" disabled selected={shopItem2Size===''}>Size</option>
                                <option value="XL" selected={shopItem2Size==='XL'}>XL</option>
                                <option value="L" selected={shopItem2Size==='L'}>L</option>
                                <option value="M" selected={shopItem2Size==='M'}>M</option>
                                <option value="S" selected={shopItem2Size==='S'}>S</option>
                                <option value="XS" selected={shopItem2Size==='XS'}>XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(2,item2.cost)} disabled={shopItem2Size===''}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_3
                        </div>
                        placeholder_item_3 £{item3.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem3Size(e.target.value)}>
                            <option value="" disabled selected={shopItem3Size===''}>Size</option>
                                <option value="XL" selected={shopItem3Size==='XL'}>XL</option>
                                <option value="L" selected={shopItem3Size==='L'}>L</option>
                                <option value="M" selected={shopItem3Size==='M'}>M</option>
                                <option value="S" selected={shopItem3Size==='S'}>S</option>
                                <option value="XS" selected={shopItem3Size==='XS'}>XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(3,item3.cost)} disabled={shopItem3Size===''}>Add to basket</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div className={styles.shopPlaceholderItem}>
                            placeholder_item_4
                        </div>
                        placeholder_item_4 £{item4.cost}
                        <div className={styles.shopAddToBasketButtons}>
                            <select name="size" id="size" onChange={(e) => setShopItem4Size(e.target.value)}>
                            <option value="" disabled selected={shopItem4Size===''}>Size</option>
                                <option value="XL" selected={shopItem4Size==='XL'}>XL</option>
                                <option value="L" selected={shopItem4Size==='L'}>L</option>
                                <option value="M" selected={shopItem4Size==='M'}>M</option>
                                <option value="S" selected={shopItem4Size==='S'}>S</option>
                                <option value="XS" selected={shopItem4Size==='XS'}>XS</option>
                            </select>
                            <button type="submit" onClick={() => handleAddToBasket(4,item4.cost)} disabled={shopItem4Size===''}>Add to basket</button>
                        </div>
                    </Grid>
                </Grid>
            }            
        </Grid>
        
    )
  }

 