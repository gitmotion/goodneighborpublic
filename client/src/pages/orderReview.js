import React from 'react';
import Panel from '../components/panel.js';
import OrderReviewComponent from '../components/orderReviews.js';

const OrderReviews = () => (
  <div>
    <Panel righticon={true} title="Order Review">
      <OrderReviewComponent />
    </Panel>
  </div>
);

export default OrderReviews;
