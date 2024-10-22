/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */
import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { DropDownItem } from 'app/components/drop-down-item';
import { AccountsModal } from 'app/components/modals';

import { keystore } from 'app/keystore';
import i18n from 'app/lib/i18n';
import { fonts } from 'app/styles';

type Prop = {
  style?: ViewStyle;
  accountName: string;
  onCreate?: () => void;
  onRemove?: () => void;
};

export const AccountMenu: React.FC<Prop> = ({
  accountName,
  style,
  onCreate = () => null,
  onRemove = () => null
}) => {
  const { colors } = useTheme();

  const accountState = keystore.account.store.useValue();

  const [isModal, setIsModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCreateAccount = React.useCallback(() => {
    setIsModal(false);
    onCreate();
  }, [setIsModal]);
  const handleChangeAccount = React.useCallback(async(index) => {
    setIsLoading(true);
    setIsModal(false);
    try {
      await keystore.account.selectAccount(index);
      await keystore.account.zilBalaceUpdate();
      await keystore.transaction.sync();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      Alert.alert(
        i18n.t('update'),
        err.message,
        [
          { text: "OK" }
        ]
      );
    }
  }, [setIsModal]);
  const hanldeRemove = React.useCallback(() => {
    setIsModal(false);
    setTimeout(() => onRemove(), 350);
  }, [setIsModal, onRemove]);

  return (
    <View
      style={[styles.container, style]}
    >
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color={colors.primary}
        />
      ) : (
        <DropDownItem
          color={colors.primary}
          onPress={() => setIsModal(true)}
        >
          {accountName}
        </DropDownItem>
      )}
      <AccountsModal
        accounts={accountState.identities}
        selected={accountState.selectedAddress}
        visible={isModal}
        title={i18n.t('accounts')}
        onTriggered={() => setIsModal(false)}
        onSelected={handleChangeAccount}
        onAdd={handleCreateAccount}
        onRemove={hanldeRemove}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.Demi,
    fontSize: 17
  }
});
