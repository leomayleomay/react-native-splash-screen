/**
 * SplashScreen
 * 启动屏
 * from：http://www.devio.org
 * Author:CrazyCodeBoy
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 * @flow
 */
'use strict';

import { NativeModules } from 'react-native';
const SplashScreenModule = NativeModules.SplashScreen;

export default class SplashScreen {
    static hide() {
        SplashScreenModule.hide()
    }
}