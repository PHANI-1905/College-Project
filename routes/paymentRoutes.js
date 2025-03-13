const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const router = express.Router();

router.post('/pay', async (req, res) => {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd'
    });
    res.json({ clientSecret: paymentIntent.client_secret });
});

module.exports = router;
