import React from 'react';
import { StyleSheet } from 'react-native';
import * as actions from '../../redux/actions/cammonWorkActions';
import { Text, Switch, Block, Input, SubTotal } from '../../components';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, propertyName, children }) => {
  return (
    <Block flex={false}>
      <Text center bold h1 gray style={styles.workName}>
        {name}
      </Text>

      <Block>
        <Switch
          label="Urađeno"
          value={work.done}
          action={actions.changeDone}
          field={field}
          propertyName={propertyName}
        />
        <Switch
          label="Planiram"
          value={work.planing}
          action={actions.changePlaning}
          field={field}
          propertyName={propertyName}
        />
      </Block>

      {children}

      <Block style={styles.paidContainer}>
        <Switch
          label="Plaćam uslužno"
          value={work.paid}
          action={actions.changePaid}
          field={field}
          propertyName={propertyName}
        />
        {work.paid ? (
          <Input
            price
            label="Cena uslužnog po hektaru"
            value={String(work.paidPrice)}
            action={actions.changePaidPrice}
            field={field}
            propertyName={propertyName}
          />
        ) : (
          <Input
            oilConsumption
            label="Potrošnja nafte po hektaru"
            value={String(work.consumption)}
            action={actions.changeOilConsumption}
            field={field}
            propertyName={propertyName}
          />
        )}
      </Block>

      <SubTotal />
    </Block>
  );
};

const styles = StyleSheet.create({
  workName: {
    marginBottom: theme.sizes.base,
  },
  paidContainer: {
    marginTop: theme.sizes.base,
  },
});

export default CommonWorkPart;
