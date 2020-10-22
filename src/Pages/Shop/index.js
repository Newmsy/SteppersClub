import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  Select,
  MenuItem,
  Modal,
  Paper,
  Input,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PaypalButton from "./paypalbutton";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: 70,
    direction: "column",
    flexGrow: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
  },
  gridItemWrapper: {},
  shopComingSoonText: {
    color: "rgb(4,44,159)",
    textShadow: "2px 2px rgb(255,209,76)",
    fontWeight: 700,
  },
  shopComingSoonText2: {
    color: "rgb(4,44,159)",
    textShadow: "2px 2px rgb(255,209,76)",
    fontWeight: 700,
    marginTop: 15,
    marginLeft: 5,
  },
  shopComingSoonText3: {
    color: "rgb(4,44,159)",
    textShadow: "2px 2px rgba(255,42,44, 0.5)",
    fontWeight: 700,
  },
  shopComingSoonWrapper: {
    textAlign: "center",
    marginTop: -50,
  },
  gridShopItemWrapper: {
    marginBottom: 100,
    marginTop: 30,
  },
  shopItemImage: {
    width: "100%",

    position: "relative",

    zIndex: 1,
  },
  shopAddToBasketButtons: {
    zIndex: 0,
    transition: "1s",
    position: "relative",
    marginTop: 20,
  },
  viewBasketGrid: {
    justifyContent: "center",
  },
  viewBasketItemImage: {
    height: 100,
    marginBottom: 10,
  },
  mobileViewBasketItemImage: {
    width: "100%",
    marginBottom: 10,
  },
  viewBasketWrapper: {
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 100,
  },
  basketBreakLine: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
  },
  viewBasketTitlesGrid: {},
  viewBasketTotalGrid: {
    marginBottom: 50,
  },
  addBasketButton: {
    marginLeft: 20,
    backgroundColor: "rgb(4,44,159)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(4,44,159, 0.7)",
    },
  },
  addBasketButtonDisabled: {
    marginLeft: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(4,44,159,0.3)",
  },
  sizeSelect: {
    width: 80,
  },
  removeButton: {
    backgroundColor: "rgb(4,44,159)",
    marginTop: "10%",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(4,44,159, 0.7)",
    },
  },
  checkoutWrapper: {
    position: "absolute",
    width: 400,
    maxWidth: "100vw",
    top: "5%",
    left: "calc(50vw - 220px)",
    [theme.breakpoints.down("sm")]: {
      left: "2%",
      width: "80vw",
    },
    backgroundColor: "white",
    overflow: "scroll",
    maxHeight: "80vh",
    padding: theme.spacing(2, 4, 3),
  },
  checkoutButton: {
    backgroundColor: "rgb(4,44,159)",
    marginTop: "10%",
    marginRight: 50,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(4,44,159, 0.7)",
    },
    discountCodeInput: {
      padding: 3,
    },
  },
  discountButton: {
    marginTop: 20,
    backgroundColor: "rgb(4,44,159)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(4,44,159, 0.7)",
    },
  },
}));

export function Shop() {
  const item1 = {
    cost: 20.0,
    id: "steppersTee1",
    desc: "OG",
    imageURL: "/Assets/Images/yellowshoptee.jpg",
  };
  const item2 = {
    cost: 20.0,
    id: "steppersTee2",
    desc: "VOICENOTES",
    imageURL: "/Assets/Images/redshoptee.jpg",
  };

  const styles = useStyles();
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [isViewingBasket, setIsViewingBasket] = useState(false);
  const [shopItem1Size, setShopItem1Size] = useState("");
  const [shopItem2Size, setShopItem2Size] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);

  function handleAddToBasket(item, cost) {
    var currentBasket = basket;
    switch (item) {
      case "Y":
        currentBasket.push([item.toString() + shopItem1Size]);
        break;
      case "R":
        currentBasket.push([item.toString() + shopItem2Size]);
        break;

      default:
        return;
    }
    setTotal(total + cost);
    setBasket(currentBasket.concat());
  }

  function getShopItemInfo(itemID) {
    switch (itemID) {
      case "Y":
        return item1;
      case "R":
        return item2;

      default:
        return;
    }
  }

  function applyDiscountCode() {
    if (discountCode === "steppersfam6") {
      if (discountApplied === false) {
        setDiscountApplied(true);
        setTotal(total - 5);
      }
    } else {
      setDiscountError(true);
    }
  }

  function RemoveItem(index, cost) {
    var currentBasket = basket;
    currentBasket.splice(index, 1);
    setBasket(currentBasket);
    setTotal(total - cost);
  }

  var basketItemsGrid = basket.map((IDSize, i) => (
    <Grid item container xs={12} md={10} className={styles.viewBasketGrid}>
      <Grid item xs={3} md={3}>
        <h3 className={styles.shopComingSoonText}>
          {getShopItemInfo(IDSize.toString().charAt(0)).desc}
        </h3>
      </Grid>
      <Grid item xs={2}>
        <h2 className={styles.shopComingSoonText2}>
          {IDSize.toString().substring(1)}
        </h2>
      </Grid>
      <Hidden smDown>
        <Grid item xs={6} md={4} justify="flex-start">
          <img
            src={getShopItemInfo(IDSize.toString().charAt(0)).imageURL}
            className={styles.viewBasketItemImage}
            alt="Shop Item"
          />
        </Grid>
      </Hidden>
      <Grid item xs={3} md={1}>
        <h3 className={styles.shopComingSoonText}>
          £{getShopItemInfo(IDSize.toString().charAt(0)).cost}
        </h3>
      </Grid>
      <Grid
        item
        container
        xs={3}
        md={2}
        justify="flex-end"
        style={{ marginBottom: 30 }}
      >
        <Grid item>
          <Button
            onClick={() =>
              RemoveItem(i, getShopItemInfo(IDSize.toString().charAt(0)).cost)
            }
            className={styles.removeButton}
          >
            REMOVE
          </Button>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid item xs={12} justify="flex-start">
          <img
            src={getShopItemInfo(IDSize.toString().charAt(0)).imageURL}
            className={styles.mobileViewBasketItemImage}
            alt="Shop Item"
          />
        </Grid>
      </Hidden>
      <Grid item xs={12} className={styles.basketBreakLine}></Grid>
    </Grid>
  ));

  if (new Date() < new Date(2020, 9, 23, 0, 0, 0, 0))
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 className={styles.shopComingSoonText}>Coming Soon</h1>
      </div>
    );

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Modal
        open={isCheckingOut}
        onClose={() => setIsCheckingOut(false)}
        className={styles.paymentModal}
      >
        <Paper className={styles.checkoutWrapper}>
          <PaypalButton amount={total} items={basket} />
        </Paper>
      </Modal>

      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <Grid item xs={12} className={styles.shopComingSoonWrapper}>
          <h1 className={styles.shopComingSoonText}>THE CLUB SHOP</h1>
        </Grid>
        <Grid
          item
          xs={12}
          justify="center"
          className={styles.shopComingSoonWrapper}
        >
          <h1 className={styles.shopComingSoonText}>
            Available Oct 23 - Oct 30
          </h1>
        </Grid>
      </Grid>

      {isViewingBasket && (
        <Grid item container xs={12} justify="space-around">
          <Grid
            item
            container
            style={{ marginLeft: 20 }}
            xs={12}
            sm={4}
            justify="center"
          >
            <Grid item>
              <h1 className={styles.shopComingSoonText}>
                Total: £{total >= 0 ? total : 0}
              </h1>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} container justify="center">
            <Grid item>
              <Button onClick={() => setIsViewingBasket(!isViewingBasket)}>
                <h1 className={styles.shopComingSoonText}>Back to store</h1>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {isViewingBasket && (
        <Grid item container xs={12} className={styles.viewBasketWrapper}>
          <Grid
            item
            container
            xs={12}
            md={10}
            className={styles.viewBasketTitlesGrid}
          >
            <Grid item xs={3} md={3}>
              <h3 className={styles.shopComingSoonText}>ITEM</h3>
            </Grid>
            <Grid item xs={2} sm={3}>
              <h3 className={styles.shopComingSoonText}>SIZE</h3>
            </Grid>
            <Hidden smDown>
              <Grid item xs={3}></Grid>
            </Hidden>
            <Grid item xs={1}>
              <h3 className={styles.shopComingSoonText}>PRICE</h3>
            </Grid>
            <Grid item xs={12} className={styles.basketBreakLine}></Grid>
          </Grid>
          {basketItemsGrid}
          <Grid
            item
            container
            xs={12}
            md={12}
            className={styles.viewBasketTotalGrid}
          >
            {total > 0 && (
              <>
                <Grid item xs={1} sm={3}></Grid>

                <Grid item xs={3} sm={3}>
                  {discountApplied === false && (
                    <h2
                      className={styles.shopComingSoonText}
                      style={{
                        textAlign: "center",
                        position: "relative",
                        right: 20,
                      }}
                    >
                      Discount Code:
                    </h2>
                  )}
                </Grid>
                <Grid item container xs={4} alignItems="center">
                  {discountApplied === false && (
                    <div className={styles.discountCodeInput}>
                      <Input
                        onChange={(e) => {
                          setDiscountCode(e.target.value);
                          setDiscountError(false);
                        }}
                        value={discountCode}
                      ></Input>
                    </div>
                  )}
                  {discountApplied === true && (
                    <h2 className={styles.shopComingSoonText}>
                      Discount Applied
                    </h2>
                  )}
                </Grid>
                <Grid item xs={3} sm={2}>
                  {discountApplied === false && (
                    <Button
                      onClick={() => applyDiscountCode(discountCode)}
                      className={styles.discountButton}
                    >
                      Apply
                    </Button>
                  )}
                  {discountApplied === true && (
                    <h2 className={styles.shopComingSoonText}>- £5</h2>
                  )}
                </Grid>
                {discountError && (
                  <Grid item container xs={12}>
                    <Grid item xs={3}></Grid>

                    <Grid item xs={7}>
                      <h2 className={styles.shopComingSoonText}>
                        Discount code not recognised!
                      </h2>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                )}
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>Shipping: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£3.50</h2>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>TOTAL: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£{total + 3.5}</h2>
                </Grid>
              </>
            )}
          </Grid>
          <Grid
            item
            container
            xs={12}
            justify="flex-end"
            style={{ height: 100, backgroundColor: "white" }}
          >
            {total > 0 && total < 100 && (
              <Grid item xs={3} style={{ marginRight: 50 }}>
                <Button
                  onClick={() => setIsCheckingOut(true)}
                  className={styles.checkoutButton}
                >
                  Checkout
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
      {!isViewingBasket && (
        <Grid item container xs={12} justify="space-around">
          <Grid
            item
            container
            style={{ marginLeft: 20 }}
            xs={12}
            sm={4}
            justify="center"
          >
            <Grid item>
              <h1 className={styles.shopComingSoonText}>
                Total: £{total >= 0 ? total : 0}
              </h1>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} container justify="center">
            <Grid item>
              <Button onClick={() => setIsViewingBasket(!isViewingBasket)}>
                <h1 className={styles.shopComingSoonText}>View Basket</h1>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {!isViewingBasket && (
        <Grid
          item
          container
          xs={12}
          spacing={3}
          className={styles.gridShopItemWrapper}
        >
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <img
              src={item1.imageURL}
              alt={item1.desc}
              className={styles.shopItemImage}
            ></img>
            <h1 className={styles.shopComingSoonText}>
              {item1.desc} £{item1.cost}
            </h1>
            <div className={styles.shopAddToBasketButtons}>
              <Select
                name="size"
                id="size"
                onChange={(e) => setShopItem1Size(e.target.value)}
                className={styles.sizeSelect}
                placeholder="size"
                value={shopItem1Size}
              >
                <MenuItem value="none" disabled selected={shopItem1Size === ""}>
                  Size
                </MenuItem>
                <MenuItem value="XL" selected={shopItem1Size === "XL"}>
                  XL
                </MenuItem>
                <MenuItem value="L" selected={shopItem1Size === "L"}>
                  L
                </MenuItem>
                <MenuItem value="M" selected={shopItem1Size === "M"}>
                  M
                </MenuItem>
                <MenuItem value="S" selected={shopItem1Size === "S"}>
                  S
                </MenuItem>
              </Select>
              <Button
                type="submit"
                onClick={() => handleAddToBasket("Y", item1.cost)}
                disabled={shopItem1Size === ""}
                className={
                  shopItem1Size === ""
                    ? styles.addBasketButtonDisabled
                    : styles.addBasketButton
                }
              >
                Add to basket
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <img
              src={item2.imageURL}
              alt={item2.desc}
              className={styles.shopItemImage}
            ></img>
            <h1 className={styles.shopComingSoonText3}>
              {item2.desc} £{item2.cost}
            </h1>
            <div className={styles.shopAddToBasketButtons}>
              <Select
                name="size"
                id="size"
                onChange={(e) => setShopItem2Size(e.target.value)}
                className={styles.sizeSelect}
                value={shopItem2Size}
              >
                <MenuItem value="none" disabled selected={shopItem2Size === ""}>
                  Size
                </MenuItem>
                <MenuItem value="XL" selected={shopItem2Size === "XL"}>
                  XL
                </MenuItem>
                <MenuItem value="L" selected={shopItem2Size === "L"}>
                  L
                </MenuItem>
                <MenuItem value="M" selected={shopItem2Size === "M"}>
                  M
                </MenuItem>
                <MenuItem value="S" selected={shopItem2Size === "S"}>
                  S
                </MenuItem>
              </Select>
              <Button
                type="submit"
                onClick={() => handleAddToBasket("R", item2.cost)}
                disabled={shopItem2Size === ""}
                className={
                  shopItem2Size === ""
                    ? styles.addBasketButtonDisabled
                    : styles.addBasketButton
                }
              >
                Add to basket
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
