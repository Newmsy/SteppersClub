import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from "@material-ui/core/Grid";

export const LookbookCarousel = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <Grid item container xs={12} style={{ justifyContent: "center", marginTop: 50, marginBottom: 100 }}>
      <Grid item container xs={12} sm={8}>
        <Carousel selectedItem={0} autoPlay={true} interval={3000} showThumbs={false}>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/WHITE SHORT.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/WHITE LONG.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/RED BUM BAG.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/PINK SHORT.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/PINK LONG.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/HOODIE.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/GREY CAP.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/BLACK CAP.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/BLACK BUM BAG.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/BEANIE.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/BACK OF PINK.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/BACK OF HOODIE.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
        </Carousel>
      </Grid>
    </Grid>
  );
};
