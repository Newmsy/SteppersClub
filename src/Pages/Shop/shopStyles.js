import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
