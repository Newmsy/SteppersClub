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
            <img src="/Assets/Images/lookbook/1.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/2.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/3.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/4.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/5.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/6.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/7.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/8.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
          <Grid xs={12}>
            <img src="/Assets/Images/lookbook/9.png" alt="FACEBOOK" style={{ width: "100%" }} />
          </Grid>
        </Carousel>
      </Grid>
    </Grid>
  );
};
