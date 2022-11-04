import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { MsgCancelReplaceLimitOrder } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const CancelReplaceLimitOrder = (props: {
  message: MsgCancelReplaceLimitOrder;
}) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;
  const source = formatToken(message.source.amount, message.source.denom);
  const destination = formatToken(message.destination.amount, message.destination.denom);
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCancelReplaceLimitOrderContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          <b />,
          <b />,
          <b />,
        ]}
        values={{
          clientOrderId: message.originalClientOrderId,
          source: `${formatNumber(source.value, source.exponent)} ${source.displayDenom.toUpperCase()}`,
          destination: `${formatNumber(destination.value, destination.exponent)} ${destination.displayDenom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default CancelReplaceLimitOrder;