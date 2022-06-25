import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module'

const menu = new ContextMenu('.menu');
menu.open()
menu.add(new BackgroundModule('backround', 'Сменить фон'));
