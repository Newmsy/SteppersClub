import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import { Button, Select, MenuItem, Modal, Paper, Input, Radio, RadioGroup } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PaypalButton from "./paypalbutton";
import { Lookbook, LookbookCarousel } from "./carousel";
import { useStyles } from "./shopStyles";
import { TeePage } from "./TeePage";
import { shopItems } from "./shopItems";

export function Shop() {
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
  const [international, setInternational] = useState(false);

  const setBagView = React.useCallback((item) => {
    setView(item);
    window.scrollTo(0, 0);
  }, []);

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
  const {
    greytee,
    bluetee,
    browntee,
    bluehat,
    brownhat,
    greybuckethat,
    bluebuckethat,
    bluehoodie,
    bluejoggers,
    shorts,
    bluebag,
    greybag,
    beachbag,
  } = shopItems;

  function getShopItemInfo(itemID) {
    switch (itemID) {
      case "GrT":
        return shopItems.greytee;
      case "BlT":
        return shopItems.bluetee;
      case "BrT":
        return shopItems.browntee;
      case "BlH":
        return shopItems.bluehat;
      case "BrH":
        return shopItems.brownhat;
      case "GBH":
        return shopItems.greybuckethat;
      case "BBH":
        return shopItems.bluebuckethat;
      case "BHd":
        return shopItems.bluehoodie;
      case "BJg":
        return shopItems.bluejoggers;
      case "Srt":
        return shopItems.shorts;
      case "BlB":
        return shopItems.bluebag;
      case "GrB":
        return shopItems.greybag;
      case "BcB":
        return shopItems.beachbag;
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
          <PaypalButton amount={total + (international ? 20 : 5)} items={basket} />
        </Paper>
      </Modal>

      <Grid item container xs={12} className={styles.gridItemWrapper}>
        <img
          src="/Assets/Images/ShopLogo.png"
          style={{
            width: "40%",
            marginLeft: "30%",
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
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={11} sm={4}>
                  <h2 className={styles.shopComingSoonText}>
                    <Radio onChange={(event) => setInternational(false)} checked={!international} style={{ color: "#2A008C" }} />
                    NATIONAL (UK)
                  </h2>
                  <h2 className={styles.shopComingSoonText}>
                    <Radio onChange={(event) => setInternational(true)} checked={international} style={{ color: "#2A008C" }} />
                    INTERNATIONAL
                  </h2>
                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>SHIPPING: </h2>
                </Grid>

                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>{!international && "£5"}</h2>
                  <h2 className={styles.shopComingSoonText}>{international && "£20"}</h2>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={1} sm={3}></Grid>
                <Grid item xs={6} sm={4}>
                  <h2 className={styles.shopComingSoonText}>TOTAL: </h2>
                </Grid>
                <Grid item xs={2}>
                  <h2 className={styles.shopComingSoonText}>£{total + (international ? 20 : 5)}</h2>
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
                CLOTHES
              </h1>
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={greytee.imageURL} alt={greytee.desc} className={styles.shopItemImage} onClick={() => setBagView(greytee)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={bluetee.imageURL} alt={bluetee.desc} className={styles.shopItemImage} onClick={() => setBagView(bluetee)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={browntee.imageURL} alt={browntee.desc} className={styles.shopItemImage} onClick={() => setBagView(browntee)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={4}>
              <img
                src={bluehoodie.imageURL}
                alt={bluehoodie.desc}
                className={styles.shopItemImage}
                onClick={() => setBagView(bluehoodie)}
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <img
                src={bluejoggers.imageURL}
                alt={bluejoggers.desc}
                className={styles.shopItemImage}
                onClick={() => setBagView(bluejoggers)}
              ></img>
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={shorts.imageURL} alt={shorts.desc} className={styles.shopItemImage} onClick={() => setBagView(shorts)}></img>
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
              <img src={bluehat.imageURL} alt={bluehat.desc} className={styles.shopItemImage} onClick={() => setBagView(bluehat)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img src={brownhat.imageURL} alt={brownhat.desc} className={styles.shopItemImage} onClick={() => setBagView(brownhat)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={bluebuckethat.imageURL}
                alt={bluebuckethat.desc}
                className={styles.shopItemImage}
                onClick={() => setBagView(bluebuckethat)}
              ></img>{" "}
            </Grid>
            <Grid item xs={8} sm={3}>
              <img
                src={greybuckethat.imageURL}
                alt={greybuckethat.desc}
                className={styles.shopItemImage}
                onClick={() => setBagView(greybuckethat)}
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
                BAGS
              </h1>
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={bluebag.imageURL} alt={bluebag.desc} className={styles.shopItemImage} onClick={() => setBagView(bluebag)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={greybag.imageURL} alt={greybag.desc} className={styles.shopItemImage} onClick={() => setBagView(greybag)}></img>{" "}
            </Grid>
            <Grid item xs={8} sm={4}>
              <img src={beachbag.imageURL} alt={beachbag.desc} className={styles.shopItemImage} onClick={() => setBagView(beachbag)}></img>{" "}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Hidden smUp>
              <Divider style={{ height: 4, marginTop: -20, marginBottom: 20 }} />
            </Hidden>
          </Grid>
        </>
      )}
      {view && view !== "basket" && (
        <TeePage
          item={view}
          setItemQuantity={setItemQuantity}
          itemQuantity={itemQuantity}
          itemSize={itemSize}
          setItemSize={setItemSize}
          handleAddToBasket={handleAddToBasket}
        />
      )}
    </Grid>
  );
}
