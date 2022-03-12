/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51KaQmqDtxxn1J05vhCmM8AZDaZtCNwXK9bbDmtrgLNQyYGNnaNNrrGq8dAMJzRK03t1IIZCH7h3xXSqopTuNw2HA003t2oxufz'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
