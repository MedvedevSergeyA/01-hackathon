import { Module } from '../core/module'

export class BackgroundModule extends Module {

    trigger() {
        const colors = ['#16217b', '#1b297c', '#4a42a8', '#7159bd', '#8861ba', '#00abca', '#a667bd']
        
        let n = Math.floor(Math.random() * colors.length)
        document.body.style.backgroundColor = colors[n]
    }
}
