import { Module } from '../core/module.js'
import { random } from '../utils.js'

export class SoundModule extends Module {
    constructor(type, text) {
        super(type, text)
    };

    trigger() {
        const sounds = [
            'https://zvukipro.com/uploads/files/2022-04/1649615156_83a11028b25aee7.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649615587_5b9845112b8b218.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649613993_6660fc9c785bc98.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649615983_95be077a2fc22ee.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649615803_whoosh-grainy_gjknxkv_.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649615541_01c9e4647fa13b6.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649614745_785dd1797eb1763.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649614794_2f63fb99170b7c8.mp3',
            'https://zvukipro.com/uploads/files/2022-04/1649614704_a30886b68407b9a.mp3'
        ]
        const soundIndex = random(0, sounds.length);
        const audio = new Audio(sounds[soundIndex]);
        audio.play();
    }
}