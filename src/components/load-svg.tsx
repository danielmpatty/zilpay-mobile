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
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgCss } from 'react-native-svg';

import { HelpIconSVG } from 'app/components/svg';

type Prop = {
  url: string;
  height?: string;
  width?: string;
  onPress?: () => void;
};

export const LoadSVG: React.FC<Prop> = ({ url, height, width }) => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [svg, setSvg] = React.useState<string>();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.text();
        }

        return undefined;
      })
      .then((content) => {
        setSvg(content);
        setIsLoading(false);
      });
  }, [url, setSvg]);

  if (isLoading) {
    return (
      <ActivityIndicator
        animating={isLoading}
        color={colors.primary}
      />
    );
  }

  if (svg) {
    return (
      <SvgCss
        xml={svg}
        width={width}
        height={height}
      />
    );
  }

  return (
    <SvgCss
      xml={HelpIconSVG}
      width={width}
      height={height}
    />
  );
};

const styles = StyleSheet.create({
});
