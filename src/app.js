import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module'
import {SoundModule} from './modules/random-sound'

const menu = new ContextMenu('.menu');

menu.add(new BackgroundModule('background', 'Сменить фон'));
menu.add(new SoundModule('sound', 'Включить случайную мелодию'))

menu.open()
