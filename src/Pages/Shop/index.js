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
    marginTop: 60,
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
    marginBottom: 5,
    marginTop: 10,
  },
  shopItemImage: {
    width: "100%",
    cursor: "pointer",
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
    backgroundColor: "rgb(4,44,159)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(4,44,159, 0.7)",
    },
  },
  addBasketButtonDisabled: {
    fontWeight: "bold",
    backgroundColor: "rgba(4,44,159,0.3)",
  },
  sizeSelect: {
    width: 200,
    height: 40,
    backgroundColor: "rgba(110,110,110,0.1)",
    textAlign: "center",
    paddingLeft: 15,
    fontSize: 25,
    border: "2px solid rgb(4,44,159)",
    borderRadius: 5,
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
  const blacktee = {
    cost: 20.0,
    id: "BkT",
    desc: "Black Steppers Tee",
    imageURL: "/Assets/Images/Shop/blackfronttee.png",
    extraImages: {
      back: "/Assets/Images/Shop/blackbacktee.png",
      photoFront: "/Assets/Images/Shop/blackfrontphoto.png",
      photoBack: "/Assets/Images/Shop/blackbackphoto.png",
    },
  };
  const whitetee = {
    cost: 20.0,

    id: "WhT",
    desc: "White Steppers Tee",
    imageURL: "/Assets/Images/Shop/whitefronttee.png",
    extraImages: {
      back: "/Assets/Images/Shop/whitebacktee.png",
      photoFront: "/Assets/Images/Shop/whitefrontphoto.png",
      photoBack: "/Assets/Images/Shop/whitebackphoto.png",
    },
  };
  const yellowtee = {
    cost: 20.0,

    id: "YeT",
    desc: "Yellow Steppers Tee",
    imageURL: "/Assets/Images/Shop/yellowfronttee.png",
    extraImages: {
      back: "/Assets/Images/Shop/yellowbacktee.png",
      photoFront: "/Assets/Images/Shop/yellowfrontphoto.png",
      photoBack: "/Assets/Images/Shop/yellowbackphoto.png",
    },
  };
  const bluetee = {
    cost: 20.0,

    id: "BuT",
    desc: "Blue Steppers Tee",
    imageURL: "/Assets/Images/Shop/bluefronttee.png",
    extraImages: {
      back: "/Assets/Images/Shop/bluebacktee.png",
      photoFront: "/Assets/Images/Shop/bluefrontphoto.png",
      photoBack: "/Assets/Images/Shop/bluebackphoto.png",
    },
  };
  const blackhat = {
    cost: 15,
    id: "BkH",
    desc: "Black Steppers Cap",
    imageURL: "/Assets/Images/Shop/blackhat.png",
    extraImages: {
      photo: "/Assets/Images/Shop/hatblackphoto.png",
    },
  };
  const whitehat = {
    cost: 15,
    id: "WhH",
    desc: "White Steppers Cap",
    imageURL: "/Assets/Images/Shop/whitehat.png",
    extraImages: {
      photo: "/Assets/Images/Shop/hatwhitephoto.png",
    },
  };

  const styles = useStyles();
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [view, setView] = useState(null);
  const [itemSize, setItemSize] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountError, setDiscountError] = useState(false);

  function handleAddToBasket(item, quantity) {
    var currentBasket = basket;

    for (var i = 0; i < quantity; i++) {
      currentBasket.push(item.id.toString() + itemSize);
    }
    setTotal(total + item.cost * quantity);
    setBasket(currentBasket.concat());
    setItemQuantity(0);
    setItemSize("");
    setView(null);
  }

  function getShopItemInfo(itemID) {
    switch (itemID) {
      case "BkT":
        return blacktee;
      case "YeT":
        return yellowtee;
      case "WhT":
        return whitetee;
      case "BuT":
        return bluetee;
      case "BkH":
        return blackhat;
      case "WhH":
        return whitehat;
      default:
        return;
    }
  }

  function applyDiscountCode() {
    if (discountCode === "deeleydubplate") {
      if (discountApplied === false) {
        setDiscountApplied(true);
        setTotal(total - 7 * basket.length);
      }
    } else {
      setDiscountError(true);
    }
  }

  function RemoveItem(index, cost) {
    var currentBasket = basket;
    currentBasket.splice(index, 1);
    setBasket(currentBasket);
    setTotal(total - cost + (discountApplied ? 7 : 0));
  }

  const storeHeader = (
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
          <Button onClick={() => setView(null)}>
            <h1 className={styles.shopComingSoonText}>Back to store</h1>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  var basketItemsGrid = basket.map((IDSize, i) => (
    <Grid item container xs={12} md={10} className={styles.viewBasketGrid}>
      <Grid item xs={3} md={3}>
        <h3 className={styles.shopComingSoonText}>
          {getShopItemInfo(IDSize.toString().substring(0, 3))?.desc}
        </h3>
      </Grid>
      <Grid item xs={2}>
        <h2 className={styles.shopComingSoonText2}>
          {IDSize.toString().substring(3)}
        </h2>
      </Grid>
      <Hidden smDown>
        <Grid item xs={6} md={4} justify="flex-start">
          <img
            src={getShopItemInfo(IDSize.toString().substring(0, 3))?.imageURL}
            className={styles.viewBasketItemImage}
            alt="Shop Item"
          />
        </Grid>
      </Hidden>
      <Grid item xs={3} md={1}>
        <h3 className={styles.shopComingSoonText}>
          £{getShopItemInfo(IDSize.toString().substring(0, 3))?.cost}
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
              RemoveItem(
                i,
                getShopItemInfo(IDSize.toString().substring(0, 3))?.cost
              )
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
            src={getShopItemInfo(IDSize.toString().substring(0, 3))?.imageURL}
            className={styles.mobileViewBasketItemImage}
            alt="Shop Item"
          />
        </Grid>
      </Hidden>
      <Grid item xs={12} className={styles.basketBreakLine}></Grid>
    </Grid>
  ));

  const TeePage = (item) => {
    const isHat = !!item.extraImages.photo;
    return (
      <Grid
        container
        xs={12}
        className={styles.gridShopItemWrapper}
        style={{ marginBottom: 80, justifyContent: "center" }}
      >
        <Hidden smUp>
          <Grid item xs={10} container style={{ justifyContent: "center" }}>
            <Grid item xs={6}>
              <img src={item.imageURL} style={{ width: "100%" }} />
              {item.extraImages.back && (
                <img src={item.extraImages.back} style={{ width: "100%" }} />
              )}
            </Grid>
            <Grid item xs={6}>
              {item.extraImages.photo && (
                <img src={item.extraImages.photo} style={{ width: "100%" }} />
              )}
              {item.extraImages.photoFront && (
                <img
                  src={item.extraImages.photoFront}
                  style={{ width: "100%" }}
                />
              )}
              {item.extraImages.photoBack && (
                <img
                  src={item.extraImages.photoBack}
                  style={{ width: "100%" }}
                />
              )}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs={3}>
            <img src={item.imageURL} style={{ width: "100%" }} />
            {item.extraImages.back && (
              <img src={item.extraImages.back} style={{ width: "100%" }} />
            )}
          </Grid>
        </Hidden>
        <Grid
          item
          xs={6}
          container
          className={styles.gridShopItemWrapper}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item style={{ marginTop: -40 }}>
            <h1
              className={styles.shopComingSoonText}
              style={{ fontSize: 40, textAlign: "center" }}
            >
              {item.desc}
            </h1>
          </Grid>
          <Grid item style={{ marginTop: -40 }}>
            <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
              £{item.cost}
            </h1>
          </Grid>
          {!isHat && (
            <>
              <Grid item>
                <h1
                  className={styles.shopComingSoonText}
                  style={{ fontSize: 30 }}
                >
                  SIZE
                </h1>
              </Grid>

              <Grid item>
                <Select
                  name="size"
                  id="size"
                  onChange={(e) => setItemSize(e.target.value)}
                  className={styles.sizeSelect}
                  placeholder="size"
                  value={itemSize}
                >
                  <MenuItem value="" disabled selected={itemSize === "none"}>
                    Size
                  </MenuItem>
                  <MenuItem value="XL" selected={itemSize === "XL"}>
                    XL
                  </MenuItem>
                  <MenuItem value="L" selected={itemSize === "L"}>
                    L
                  </MenuItem>
                  <MenuItem value="M" selected={itemSize === "M"}>
                    M
                  </MenuItem>
                  <MenuItem value="S" selected={itemSize === "S"}>
                    S
                  </MenuItem>
                </Select>
              </Grid>
            </>
          )}
          <Grid item>
            <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
              Quantity
            </h1>
          </Grid>
          <Grid item>
            <Select
              name="quantity"
              id="quantity"
              onChange={(e) => setItemQuantity(e.target.value)}
              className={styles.sizeSelect}
              placeholder="quantity"
              value={itemQuantity}
            >
              <MenuItem value="none" disabled selected={itemSize.size === 0}>
                Quantity
              </MenuItem>
              <MenuItem value={1} selected={itemQuantity === 1}>
                1
              </MenuItem>
              <MenuItem value={2} selected={itemQuantity === 2}>
                2
              </MenuItem>
              <MenuItem value={3} selected={itemQuantity === 3}>
                3
              </MenuItem>
              <MenuItem value={4} selected={itemQuantity === 4}>
                4
              </MenuItem>
            </Select>
          </Grid>
          <Grid>
            <div className={styles.shopAddToBasketButtons}>
              <Button
                type="submit"
                onClick={() => handleAddToBasket(item, itemQuantity)}
                disabled={itemQuantity < 1 || (!isHat && itemSize === "")}
                className={
                  itemQuantity < 1 || (!isHat && itemSize === "")
                    ? styles.addBasketButtonDisabled
                    : styles.addBasketButton
                }
              >
                Add to basket
              </Button>
            </div>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={3}>
            {item.extraImages.photo && (
              <img src={item.extraImages.photo} style={{ width: "100%" }} />
            )}
            {item.extraImages.photoFront && (
              <img
                src={item.extraImages.photoFront}
                style={{ width: "100%" }}
              />
            )}
            {item.extraImages.photoBack && (
              <img src={item.extraImages.photoBack} style={{ width: "100%" }} />
            )}
          </Grid>
        </Hidden>
      </Grid>
    );
  };

  //change below to 7 may instead of 6
  if (new Date() < new Date(2021, 4, 6, 0, 0, 0, 0))
    return (
      <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <h1 className={styles.shopComingSoonText}>
          Shop closed - next release coming soon
        </h1>
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
        <img
          src="/Assets/Images/ShopBlackText.png"
          style={{
            width: "50%",
            marginLeft: "25%",
            marginBottom: -40,
            marginTop: "-2%",
          }}
        />
      </Grid>

      {(view === "basket" || !!view) && storeHeader}
      {view === "basket" && (
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
                    <h2 className={styles.shopComingSoonText}>
                      - £{basket.length * 7}
                    </h2>
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
                  <h2 className={styles.shopComingSoonText}>£4</h2>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>TOTAL: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£{total + 4}</h2>
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
            {total > 0 && (
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
      {!view && (
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
              <Button onClick={() => setView("basket")}>
                <h1 className={styles.shopComingSoonText}>View Basket</h1>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {!view && (
        <>
          <Grid
            item
            container
            xs={12}
            spacing={3}
            className={styles.gridShopItemWrapper}
            style={{ justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <h1
                className={styles.shopComingSoonText}
                style={{
                  fontSize: 40,
                  textAlign: "center",
                  marginTop: -20,
                  marginBottom: -20,
                }}
              >
                TEES
              </h1>
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={whitetee.imageURL}
                alt={whitetee.desc}
                className={styles.shopItemImage}
                onClick={() => setView(whitetee)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={yellowtee.imageURL}
                alt={yellowtee.desc}
                className={styles.shopItemImage}
                onClick={() => setView(yellowtee)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={bluetee.imageURL}
                alt={bluetee.desc}
                className={styles.shopItemImage}
                onClick={() => setView(bluetee)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={blacktee.imageURL}
                alt={blacktee.desc}
                className={styles.shopItemImage}
                onClick={() => setView(blacktee)}
              ></img>{" "}
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            spacing={3}
            className={styles.gridShopItemWrapper}
            style={{ marginBottom: 100, justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <h1
                className={styles.shopComingSoonText}
                style={{
                  fontSize: 40,
                  textAlign: "center",
                  marginTop: -20,
                  marginBottom: -20,
                }}
              >
                HATS
              </h1>
            </Grid>
            <Grid item xs={8} sm={6}>
              <img
                src={blackhat.imageURL}
                alt={blackhat.desc}
                className={styles.shopItemImage}
                onClick={() => setView(blackhat)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={6}>
              <img
                src={whitehat.imageURL}
                alt={whitehat.desc}
                className={styles.shopItemImage}
                onClick={() => setView(whitehat)}
              ></img>{" "}
            </Grid>
          </Grid>
        </>
      )}
      {view && view !== "basket" && TeePage(view)}
    </Grid>
  );
}
