import { useTranslation } from 'next-i18next';
import numeral from 'numeral';
import { FC } from 'react';
import SingleBlock from '@/screens/home/components/data_blocks/components/single_block';
import { useDataBlocks } from '@/screens/home/components/data_blocks/hooks';
import useStyles from '@/screens/home/components/data_blocks/styles';

const DataBlocks: FC<ComponentDefault> = ({ className }) => {
  const { t } = useTranslation('home');
  const { classes, cx } = useStyles();
  const { state } = useDataBlocks();
  const data = [
    {
      key: t('latestBlock'),
      value: numeral(state.blockHeight).format('0,0'),
      className: classes.blockHeight,
    },
    {
      key: t('averageBlockTime'),
      value: `${numeral(state.blockTime).format('0.00')} s`,
      className: classes.blockTime,
    },
    {
      key: t('price'),
      value: state.price !== null ? `$${numeral(state.price).format('0.00[000]')}` : 'N/A',
      className: classes.price,
    },
    {
      key: t('activeValidators'),
      value: numeral(state.validators.active).format('0,0'),
      description: t('outOfValidators', {
        num: numeral(state.validators.total).format('0,0'),
      }),
      className: classes.validators,
    },
  ];

  return (
    <div className={cx(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          description={x.description}
          className={x.className}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
