import {Plugin, Cordova} from './plugin';

@Plugin({
  name: 'ActionSheet',
  plugin: 'cordova-plugin-actionsheet',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
})
export class ActionSheet {
  @Cordova({
    successIndex: 1,
    errIndex: 2
  })
  static show;

  @Cordova({
    successIndex: 1,
    errIndex: 2
  })
  static hide;
}
