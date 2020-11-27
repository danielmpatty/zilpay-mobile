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
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle
} from 'react-native';
import { SvgXml } from 'react-native-svg';

import { ArrowIconSVG } from './svg';

import { theme } from 'app/styles';

type Prop = {
  style?: ViewStyle;
  color: string;
  onPress?: () => void;
};

export const DropDownItem: React.FC<Prop> = ({
  children,
  style,
  color,
  onPress
}) => (
  <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}
  >
    <Text style={[styles.title, { color }]}>
      {children}
    </Text>
    <SvgXml
      xml={ArrowIconSVG}
      fill={color}
      style={{ marginLeft: 5 }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  title: {
    fontSize: 13,
    lineHeight: 17
  }
});