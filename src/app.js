import './styles.css'
import {ContextMenu} from './menu';
import {ClicksModule} from  './modules/clicks.module'
import {SoundModule} from './modules/random-sound'
import {BackgroundModule} from './modules/background.module'
import { ShapeModule } from './modules/shape.module'


const menu = new ContextMenu('.menu');

menu.add(new BackgroundModule('background', 'Сменить фон'))
menu.add(new SoundModule('sound', 'Включить случайную мелодию'))
menu.add(new ClicksModule('click', 'Клик!'))
menu.add(new ShapeModule('ShapeModule', 'Создать случайную фигуру'))

menu.open()
