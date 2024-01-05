fetch("/config/")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        const stripe = Stripe(data.publicKey);


        let submitBtn = document.querySelector("#Btn");
        submitBtn.addEventListener("click", () => {
            fetch("/create-checkout-session/")
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    return stripe.redirectToCheckout({
                        sessionId: data.sessionId
                    })
                })
                .then((res) => {
                    console.log(res);
                });
        });
    });