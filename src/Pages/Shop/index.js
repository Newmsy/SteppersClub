import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import { Button, Select, MenuItem, Modal, Paper, Input } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PaypalButton from "./paypalbutton";
import { Lookbook, LookbookCarousel } from "./carousel";

const useStyles = makeStyles((theme) => ({
  gridMainContentWrapper: {
    width: "100%",
    marginTop: -30,
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
  shopComingSoonTextDesc: {
    color: "rgb(4,44,159)",

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
  socialMediaImageFacebook: {
    marginLeft: "12%",
    width: "75%",
    minWidth: 40,
  },
  socialMediaImageYoutube: {
    width: "80%",
    marginLeft: "5%",
    minWidth: 40,
  },
  socialMediaImageSoundcloud: {
    width: "70%",
    position: "relative",
    top: "2.25%",
    marginLeft: "13%",
    minWidth: 40,
  },
  socialMediaImageInstagram: {
    width: "66%",
    marginLeft: "17%",
    position: "relative",
    top: "4%",
    minWidth: 40,
    left: "6%",
  },
  gridSocialsWrapper: {
    justifyContent: "center",
    marginTop: 40,
    zIndex: 1,
    marginBottom: 10,
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
  const whiteteelong = {
    cost: 25.0,
    id: "WTL",
    hasSize: true,
    desc: "White Steppers Long Sleve Tee".toUpperCase(),
    imageURL: "/Assets/Images/Shop/white long.png",
    extradesc:
      "A long sleeve take on our OG t-shirt template, the basis of our previous two drops. Complete with Steppers Club insignia on front and back, the tee’s drop in Pink and White for AW/21.",
    extraImages: {
      back: "",
      photoFront: "",
      photoBack: "",
    },
  };
  const whitetee = {
    cost: 20.0,
    id: "WhT",
    hasSize: true,
    desc: "WHITE STEPPERS TEE".toUpperCase(),
    imageURL: "/Assets/Images/Shop/whiteshort.png",
    extradesc:
      "An ever present of our clothing drops, the short sleeve White tee returns alongside a Pink version of the design, brand new for AW/21.",
    extraImages: {
      back: "",
      photoFront: "",
      photoBack: "",
    },
  };
  const pinktee = {
    cost: 20.0,
    id: "PiT",
    hasSize: true,
    desc: "Pink Steppers Tee".toUpperCase(),
    extradesc:
      "An ever present of our clothing drops, the short sleeve White tee returns alongside a Pink version of the design, brand new for AW/21.",
    imageURL: "/Assets/Images/Shop/pink tshirt.png",
    extraImages: {
      back: "",
      photoFront: "",
      photoBack: "",
    },
  };
  const pinkteelong = {
    cost: 25.0,
    id: "PTL",
    hasSize: true,
    extradesc:
      "A long sleeve take on our OG t-shirt template, the basis of our previous two drops. Complete with Steppers Club insignia on front and back, the tee’s drop in Pink and White for AW/21.",
    desc: "Pink Steppers Long sleeve tee".toUpperCase(),
    imageURL: "/Assets/Images/Shop/pink long.png",
    extraImages: {
      back: "",
      photoFront: "",
      photoBack: "",
    },
  };
  const blackhat = {
    cost: 15,
    id: "BkH",
    hasSize: false,
    desc: "Black Suede Steppers Cap".toUpperCase(),
    extradesc:
      "After significant demand, we’ve decided to bring back our suede caps for AW/21. Purchasable in Black and Grey, each unit has high quality embroidery of the Steppers Club text logo on the front centre of the cap.",
    imageURL: "/Assets/Images/Shop/black cap.png",
    extraImages: {
      photo: "",
    },
  };
  const greyhat = {
    cost: 15,
    id: "GrH",
    hasSize: false,
    extradesc:
      "After significant demand, we’ve decided to bring back our suede caps for AW/21. Purchasable in Black and Grey, each unit has high quality embroidery of the Steppers Club text logo on the front centre of the cap.",
    desc: "Grey Suede Steppers Cap".toUpperCase(),
    imageURL: "/Assets/Images/Shop/grey cap.png",
    extraImages: {
      photo: "",
    },
  };
  const blackhoodie = {
    cost: 45,
    id: "BHd",
    hasSize: true,
    extradesc:
      "Heavy blend embroidered hoodie with high quality embroidery of the Steppers Club text and cassette logos, placed on the front and back of the garment. The hoodie is perfect for winter conditions with a soft inside and durable exterior.",
    desc: "Black Steppers Hoodie".toUpperCase(),
    imageURL: "/Assets/Images/Shop/blackhoodie.png",
    extraImages: {
      photo: "",
    },
  };
  const blackbeanie = {
    cost: 15,
    id: "BBn",
    hasSize: false,
    extradesc:
      "Warm, wooly and classic in design, our new beanies are perfect for repping the label throughout the winter. Each unit has high quality embroidery of the Steppers Club text logo in the front centre of the beanie. ",
    desc: "Black Steppers Beanie".toUpperCase(),
    imageURL: "/Assets/Images/Shop/beanie.png",
    extraImages: {
      photo: "",
    },
  };
  const blackbag = {
    cost: 20,
    id: "BkB",
    hasSize: false,
    extradesc:
      "Whether you’re making a quick trip to the shops or heading out to the rave, our new waist bags are a perfect solution for bringing the essentials with you. Each bag is durable and possesses good storage space, with the Steppers Club text logo embroidered on the front.",
    desc: "Black Steppers Waist Bag".toUpperCase(),
    imageURL: "/Assets/Images/Shop/black bum bag.png",
    extraImages: {
      photo: "",
    },
  };
  const redbag = {
    cost: 20,
    id: "ReB",
    hasSize: false,
    extradesc:
      "Whether you’re making a quick trip to the shops or heading out to the rave, our new waist bags are a perfect solution for bringing the essentials with you. Each bag is durable and possesses good storage space, with the Steppers Club text logo embroidered on the front.",
    desc: "Red Steppers Waist Bag".toUpperCase(),
    imageURL: "/Assets/Images/Shop/red bum bag.png",
    extraImages: {
      photo: "",
    },
  };
  const bluebag = {
    cost: 20,
    id: "BuB",
    hasSize: false,
    extradesc:
      "Whether you’re making a quick trip to the shops or heading out to the rave, our new waist bags are a perfect solution for bringing the essentials with you. Each bag is durable and possesses good storage space, with the Steppers Club text logo embroidered on the front.",
    desc: "Blue Steppers Waist Bag".toUpperCase(),
    imageURL: "/Assets/Images/Shop/blue bum bag.png",
    extraImages: {
      photo: "",
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
      case "WTL":
        return whiteteelong;
      case "PiT":
        return pinktee;
      case "WhT":
        return whitetee;
      case "PTL":
        return pinkteelong;
      case "BkH":
        return blackhat;
      case "GrH":
        return greyhat;
      case "BHd":
        return blackhoodie;
      case "BBn":
        return blackbeanie;
      case "BkB":
        return blackbag;
      case "ReB":
        return redbag;
      case "BuB":
        return bluebag;
      default:
        return;
    }
  }

  function applyDiscountCode() {
    if (discountCode === "jkahsdflkjhbnasdf") {
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
      <Grid item container style={{ marginLeft: 20 }} xs={12} sm={4} justify="center">
        <Grid item>
          <h1 className={styles.shopComingSoonText}>TOTAL: £{total >= 0 ? total : 0}</h1>
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
        <h3 className={styles.shopComingSoonText}>{getShopItemInfo(IDSize.toString().substring(0, 3))?.desc}</h3>
      </Grid>
      <Grid item xs={2}>
        <h2 className={styles.shopComingSoonText2}>{IDSize.toString().substring(3)}</h2>
      </Grid>
      <Hidden smDown>
        <Grid item xs={6} md={4} justify="flex-start">
          <img src={getShopItemInfo(IDSize.toString().substring(0, 3))?.imageURL} className={styles.viewBasketItemImage} alt="Shop Item" />
        </Grid>
      </Hidden>
      <Grid item xs={3} md={1}>
        <h3 className={styles.shopComingSoonText}>£{getShopItemInfo(IDSize.toString().substring(0, 3))?.cost}</h3>
      </Grid>
      <Grid item container xs={3} md={2} justify="flex-end" style={{ marginBottom: 30 }}>
        <Grid item>
          <Button onClick={() => RemoveItem(i, getShopItemInfo(IDSize.toString().substring(0, 3))?.cost)} className={styles.removeButton}>
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
    const hasSize = !!item.hasSize;
    return (
      <Grid container xs={12} className={styles.gridShopItemWrapper} style={{ marginBottom: 80, justifyContent: "center" }}>
        <Hidden smUp>
          <Grid item xs={10} container style={{ justifyContent: "center" }}>
            <Grid item xs={12}>
              <img src={item.imageURL} style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid container item xs={12} style={{ justifyContent: "center" }}>
            <Grid xs={6}>
              <img src={item.imageURL} style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Hidden>
        <Grid
          item
          xs={8}
          container
          className={styles.gridShopItemWrapper}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid item style={{ marginTop: -40 }}>
            <h1 className={styles.shopComingSoonText} style={{ fontSize: 40, textAlign: "center" }}>
              {item.desc}
            </h1>
          </Grid>
          <Grid item style={{ marginTop: -20, marginBottom: 20 }}>
            <h1 className={styles.shopComingSoonTextDesc} style={{ fontSize: 16, textTransform: "uppercase", textAlign: "center" }}>
              {item.extradesc}
            </h1>
          </Grid>
          <Grid item style={{ marginTop: -40 }}>
            <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
              £{item.cost}
            </h1>
          </Grid>
          {hasSize && (
            <>
              <Grid item>
                <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
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
                    SIZE
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
              QUANTITY
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
                QUANTITY
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
                disabled={itemQuantity < 1 || (hasSize && itemSize === "")}
                className={itemQuantity < 1 || (hasSize && itemSize === "") ? styles.addBasketButtonDisabled : styles.addBasketButton}
              >
                Add to basket
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12} className={styles.headerWrapper} style={{ justifyContent: "center" }}>
          <Grid xs={7} item>
            <LookbookCarousel />
          </Grid>
        </Grid>
      </Grid>
    );
  };

  if (new Date() > new Date(2021, 10, 5, 17, 0, 0, 0))
    return (
      <div style={{ width: "100%", textAlign: "center", marginTop: 100 }}>
        <img src="/Assets/Images/shopClosed.png" alt="shop closed" style={{ marginBottom: 30, maxWidth: "50%" }} />
        <Grid container xs={12} style={{ justifyContent: "center" }}>
          <Grid item container xs={8} sm={8} spacing={2} className={styles.gridSocialsWrapper}>
            <Grid item xs={3} sm={2}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/steppersclub/?__tn__=%2Cd%2CP-R&eid=ARDXn9RqkkPteWYgjOKLRrpdacbClosDVzoLDJUeXfWFVqT96vg1kiHco-9zT0PJE-kVRxsXjQEhj_XO"
              >
                <img src="/Assets/Images/facebook.png" alt="FACEBOOK" className={styles.socialMediaImageFacebook} />
              </a>
            </Grid>
            <Grid item xs={3} sm={2}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/steppersclub_/">
                <img src="/Assets/Images/instagram.png" alt="INSTAGRAM" className={styles.socialMediaImageInstagram} />
              </a>
            </Grid>
            <Grid item xs={3} sm={2}>
              <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/steppersclub">
                <img src="/Assets/Images/soundcloudIcon.png" alt="SOUNDCLOUD" className={styles.socialMediaImageSoundcloud} />
              </a>
            </Grid>
            <Grid item xs={3} sm={2}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCmmzif8Hf1zQ6AhPbeJv86w?fbclid=IwAR2944u6hogl83Jv0Kg2GwZgXb7S5SniTogcLqKSDwqrYtSTllQJ2a-nl0s"
              >
                <img src="/Assets/Images/youtubeIcon.png" alt="YOUTUBE" className={styles.socialMediaImageYoutube} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );

  return (
    <Grid container className={styles.gridMainContentWrapper}>
      <Modal open={isCheckingOut} onClose={() => setIsCheckingOut(false)} className={styles.paymentModal}>
        <Paper className={styles.checkoutWrapper}>
          <PaypalButton amount={total} items={basket} />
        </Paper>
      </Modal>

      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <img
          src="/Assets/Images/Shop/storepic.png"
          style={{
            width: "80%",
            marginLeft: "10%",
            marginBottom: 30,
            height: "100%",
          }}
        />
      </Grid>
      {!view && (
        <Grid xs={6} sm={2}>
          <a href="/shop/lookbook">
            <img src="/Assets/Images/lookbook.png" style={{ width: "100%" }} />
          </a>
        </Grid>
      )}

      {(view === "basket" || !!view) && storeHeader}
      {view === "basket" && (
        <Grid item container xs={12} className={styles.viewBasketWrapper}>
          <Grid item container xs={12} md={10} className={styles.viewBasketTitlesGrid}>
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
          <Grid item container xs={12} md={12} className={styles.viewBasketTotalGrid}>
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
                      DISCOUNT CODE:
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
                  {discountApplied === true && <h2 className={styles.shopComingSoonText}>DISCOUNT APPLIED</h2>}
                </Grid>
                <Grid item xs={3} sm={2}>
                  {discountApplied === false && (
                    <Button onClick={() => applyDiscountCode(discountCode)} className={styles.discountButton}>
                      APPLY
                    </Button>
                  )}
                  {discountApplied === true && <h2 className={styles.shopComingSoonText}>- £{basket.length * 7}</h2>}
                </Grid>
                {discountError && (
                  <Grid item container xs={12}>
                    <Grid item xs={3}></Grid>

                    <Grid item xs={7}>
                      <h2 className={styles.shopComingSoonText}>Discount code not recognised!</h2>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                )}
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>SHIPPING: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£5</h2>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>TOTAL: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£{total + 5}</h2>
                </Grid>
              </>
            )}
          </Grid>
          <Grid item container xs={12} justify="flex-end" style={{ height: 100, backgroundColor: "white" }}>
            {total > 0 && (
              <Grid item xs={3} style={{ marginRight: 50 }}>
                <Button onClick={() => setIsCheckingOut(true)} className={styles.checkoutButton}>
                  Checkout
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid item container xs={10} justify="flex-end" style={{ marginTop: 500, backgroundColor: "white" }}>
            <p style={{ fontSize: 8, color: "grey", textAlign: "center" }}>
              The information contained in this website is for general information purposes only. The information is provided by Steppers
              Club and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the
              website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you
              place on such information is therefore strictly at your own risk.
            </p>{" "}
            <p style={{ fontSize: 8, color: "grey", textAlign: "center" }}>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage,
              or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this
              website. Through this website you are able to link to other websites which are not under the control of Steppers Club. We have
              no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a
              recommendation or endorse the views expressed within them.
            </p>{" "}
            <p style={{ fontSize: 8, color: "grey", textAlign: "center" }}>
              {" "}
              Every effort is made to keep the website up and running smoothly. However, Steppers Club takes no responsibility for, and will
              not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>
          </Grid>
        </Grid>
      )}
      {!view && (
        <Grid item container xs={12} justify="space-around">
          <Grid item container style={{ marginLeft: 20 }} xs={12} sm={4} justify="center">
            <Grid item>
              <h1 className={styles.shopComingSoonText}>TOTAL: £{total >= 0 ? total : 0}</h1>
            </Grid>
          </Grid>
          <Hidden smUp>
            <Grid item xs={6}>
              <Divider style={{ height: 4 }} />
            </Grid>
          </Hidden>
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
          <Grid item xs={12}>
            <Hidden smUp>
              <Divider style={{ height: 4, marginTop: -20, marginBottom: 20 }} />
            </Hidden>
          </Grid>
          <Grid item container xs={10} spacing={3} className={styles.gridShopItemWrapper} style={{ justifyContent: "center" }}>
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
              <img src={whitetee.imageURL} alt={whitetee.desc} className={styles.shopItemImage} onClick={() => setView(whitetee)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={whiteteelong.imageURL}
                alt={whiteteelong.desc}
                className={styles.shopItemImage}
                onClick={() => setView(whiteteelong)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={pinktee.imageURL} alt={pinktee.desc} className={styles.shopItemImage} onClick={() => setView(pinktee)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={pinkteelong.imageURL}
                alt={pinkteelong.desc}
                className={styles.shopItemImage}
                onClick={() => setView(pinkteelong)}
              ></img>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden smUp>
              <Divider style={{ height: 4, marginTop: -20, marginBottom: 20 }} />
            </Hidden>
          </Grid>
          <Grid item container xs={10} sm={10} spacing={3} className={styles.gridShopItemWrapper} style={{ justifyContent: "center" }}>
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
                HOODIES
              </h1>
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={blackhoodie.imageURL}
                alt={blackhoodie.desc}
                className={styles.shopItemImage}
                onClick={() => setView(blackhoodie)}
              ></img>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden smUp>
              <Divider style={{ height: 4, marginTop: -20, marginBottom: 20 }} />
            </Hidden>
          </Grid>
          <Grid item container xs={10} sm={10} spacing={3} className={styles.gridShopItemWrapper} style={{ justifyContent: "center" }}>
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
            <Grid item xs={8} sm={3}>
              <img src={blackhat.imageURL} alt={blackhat.desc} className={styles.shopItemImage} onClick={() => setView(blackhat)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={greyhat.imageURL} alt={greyhat.desc} className={styles.shopItemImage} onClick={() => setView(greyhat)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={blackbeanie.imageURL}
                alt={blackbeanie.desc}
                className={styles.shopItemImage}
                onClick={() => setView(blackbeanie)}
              ></img>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden smUp>
              <Divider style={{ height: 4, marginTop: -20, marginBottom: 20 }} />
            </Hidden>
          </Grid>
          <Grid
            item
            container
            xs={10}
            sm={10}
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
                BAGS
              </h1>
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={blackbag.imageURL} alt={blackbag.desc} className={styles.shopItemImage} onClick={() => setView(blackbag)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={redbag.imageURL} alt={redbag.desc} className={styles.shopItemImage} onClick={() => setView(redbag)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={bluebag.imageURL} alt={bluebag.desc} className={styles.shopItemImage} onClick={() => setView(bluebag)}></img>{" "}
            </Grid>
          </Grid>
        </>
      )}
      {view && view !== "basket" && TeePage(view)}
    </Grid>
  );
}
