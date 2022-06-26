import './styles.css'
import {ContextMenu} from './menu';
import {ClicksModule} from  './modules/clicks.module'
const menu = new ContextMenu('.menu');

menu.add(new ClicksModule('click', 'Клик!'))
menu.open()