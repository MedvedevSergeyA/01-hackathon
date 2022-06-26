import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module'

const menu = new ContextMenu('.menu');
menu.add(new BackgroundModule('background', 'Сменить фон'));
menu.open()

import {SoundModule} from './modules/random-sound'

menu.add(new SoundModule('sound', 'Включить случайную мелодию'))