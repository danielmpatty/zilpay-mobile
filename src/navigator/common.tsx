/*
 * Project: ZilPay-wallet
 * Author: Rinat(lich666dead)
 * -----
 * Modified By: the developer formerly known as Rinat(lich666dead) at <lich666black@gmail.com>
 * -----
 * Copyright (c) 2020 ZilPay
 */
import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';

import {
  CreateAccountPage,
  TransferPage
} from 'app/pages/common';

import i18n from 'app/lib/i18n';

export type CommonStackParamList = {
  CreateAccount: undefined;
  Transfer: {
    recipient?: string;
    selectedToken?: number;
  };
};

const CommonStack = createStackNavigator<CommonStackParamList>();
export const Common: React.FC = () => {
  const { colors } = useTheme();

  const headerOptions: StackNavigationOptions = React.useMemo(() => ({
    headerTintColor: colors.text,
    headerStyle: {
      backgroundColor: colors.background
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }), [colors]);

  return (
    <CommonStack.Navigator>
      <CommonStack.Screen
        name="CreateAccount"
        component={CreateAccountPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <CommonStack.Screen
        name="Transfer"
        component={TransferPage}
        options={{
          ...headerOptions,
          title: i18n.t('transfer_title')
        }}
      />
    </CommonStack.Navigator>
  );
};
