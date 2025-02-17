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

import { ContactsPage } from 'app/pages/settings/contacts';
import { ConnectionsPage } from 'app/pages/settings/connections';
import { AdvancedPage } from 'app/pages/settings/advanced';
import { AboutPage } from 'app/pages/settings/about';
import { SecurityPage } from 'app/pages/settings/security';
import { NetworkPage } from 'app/pages/settings/network';
import { GeneralPage } from 'app/pages/settings/general';
import { ExportPage } from 'app/pages/settings/export';
import { BrowserSettingsPage } from 'app/pages/settings/browser';

import { SecureTypes } from 'app/config';

export type SettingsStackParamList = {
  Contacts: undefined;
  Connections: undefined;
  About: undefined;
  Advanced: undefined;
  Security: undefined;
  Network: undefined;
  General: undefined;
  BrowserSettings: undefined;
  Export: {
    type: SecureTypes;
    content: string;
  }
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();
export const Settings: React.FC = () => {
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
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Contacts"
        component={ContactsPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="Export"
        component={ExportPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="Connections"
        component={ConnectionsPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="Advanced"
        component={AdvancedPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="About"
        component={AboutPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="Security"
        component={SecurityPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="Network"
        component={NetworkPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="General"
        component={GeneralPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
      <SettingsStack.Screen
        name="BrowserSettings"
        component={BrowserSettingsPage}
        options={{
          ...headerOptions,
          title: ''
        }}
      />
    </SettingsStack.Navigator>
  );
};
