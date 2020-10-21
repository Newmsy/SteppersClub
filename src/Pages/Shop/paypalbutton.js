import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalButton(basket) {
  console.log(basket);
  return (
    <PayPalButton
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: (basket.amount + 3).toString(),
              },
              description: `Steppers Tshirt ${basket.items.join(" ")}`,
              custom: basket.items.join(" ").toString(),
            },
          ],
          note_to_payer: "Contact us for any questions on your order.",
          application_context: {
            shipping_preference: "GET_FROM_FILE", // default is "GET_FROM_FILE"
          },
        });
      }}
      onApprove={(data, actions) => {
        // Capture the funds from the transaction
        return actions.order.capture().then(function (details) {
          // Show a success message to your buyer
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });
        });
      }}
      options={{
        clientId:
          "Adao2Hld2gTLYffH5cf4aRwMoYYINN7RlTQVil4jLiVTZeA6b65PxMl5NKLGNgERc3Hgrk38lWtV7nNW",
        currency: "GBP",
      }}
    />
  );
}
