import {Module} from '../core/module'
import './click.css'
import {formatTime} from "../utils"

export class ClicksModule extends Module {

    trigger() {

        let clicks = 0
        const TIME = 10000

        const body = document.querySelector('body')

        const main = document.createElement('main')
        main.classList.add('main')

        const display = document.createElement('div')
        display.classList.add('display')


        const button = document.createElement('button')
        button.classList.add('button')
        button.textContent = 'Нажми на меня'

        const counter = document.createElement('div')
        counter.classList.add('counter')

        main.append(display, button, counter)
        body.append(main)


        button.onclick = start

        function start() {
            const startTime = Date.now()

            display.textContent = formatTime(TIME)
            button.onclick = () => {
                const audio = new Audio('https://zvukipro.com/uploads/files/2018-10/1540316483_mechanic-button-pressing_fj_hbhno.mp3')
                button.textContent = 'Нажимай быстрее'


                counter.textContent = `Колличество нажатий: ${++clicks}`

                audio.play()
            }

            const interval = setInterval(() => {
                const delta = Date.now() - startTime
                display.textContent = `Времени оcталось: ${formatTime(TIME - delta)}`
            }, 10)

            setTimeout(() => {
                button.onclick = null
                counter.remove()

                display.textContent = `Игра окончена, сделано кликов: ${clicks}`

                clearInterval(interval)
            }, TIME)

            setTimeout(function () {
                main.remove()
                body.style.backgroundColor = '#fff'
            }, 15000)
        }
    }
}








