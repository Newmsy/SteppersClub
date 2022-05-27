import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import { Button, Select, MenuItem, Modal, Paper, Input } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import PaypalButton from "./paypalbutton";
import { Lookbook, LookbookCarousel } from "./carousel";
import { useStyles } from "./shopStyles";

export const TeePage = ({ item, itemSize, setItemSize, itemQuantity, setItemQuantity, handleAddToBasket }) => {
  const hasSize = !!item.hasSize;
  const styles = useStyles();
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
        <Grid container item xs={6} style={{ justifyContent: "center" }}>
          <Grid item xs={8}>
            <img src={item.imageURL} style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={8}>
            <img src={item.extraImages.back} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Hidden>
      <Grid item xs={6} container className={styles.gridShopItemWrapper} style={{ alignContent: "flex-start" }}>
        <Grid item xs={12}>
          <h1 className={styles.shopComingSoonText} style={{ fontSize: 40, textAlign: "center" }}>
            {item.desc}
          </h1>
        </Grid>
        {item.extradesc && (
          <Grid item style={{ marginTop: -20, marginBottom: 20 }} xs={12}>
            <h1 className={styles.shopComingSoonTextDesc} style={{ fontSize: 16, textTransform: "uppercase", textAlign: "center" }}>
              {item.extradesc}
            </h1>
          </Grid>
        )}
        <Grid item xs={12}>
          <h1 className={styles.shopComingSoonText} style={{ fontSize: 30, textAlign: "center" }}>
            £{item.cost}
          </h1>
        </Grid>
        <Grid item container xs={12}>
          {hasSize && (
            <Grid item xs={12} sm={6}>
              <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
                SIZE
              </h1>

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
          )}
          <Grid item xs={12} sm={6}>
            <h1 className={styles.shopComingSoonText} style={{ fontSize: 30 }}>
              QUANTITY
            </h1>

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
