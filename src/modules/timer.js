import {Module} from '../core/module';
import './timer.css';
import {formatNumber} from '../utils';

export class TimerModule extends Module {
    #prompt
    #timerBlock
    #intervalId
    #value
    #confirmButton

    constructor(type, text) {
      super(type, text);
      this.#prompt = null;
      this.#timerBlock = null;
      this.#intervalId = null;
      this.#value = null;
      this.#confirmButton = null;
    }

    #createInput() {
      const input = document.createElement('input');
      input.className = 'input';
      input.placeholder = 'Seconds';
      input.type = 'number';
      input.addEventListener('input', () => {
        this.#value = Number(input.value);
        this.#confirmButton.disabled = !this.#value;
      });
      return input;
    }

    #removeTimer() {
      this.#prompt.remove();
      this.#prompt = null;
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
        this.#intervalId = null;
      }
    }

    #resetTimer() {
      this.#timerBlock.innerHTML = '';
      this.#confirmButton.disabled = true;
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
        this.#intervalId = null;
      }
      this.#timerBlock.append(this.#createInput());
    }

    #getTextTime(argumentTime) {
      const seconds = Math.floor((argumentTime) % 60);
      const minutes = Math.floor((argumentTime/60) % 60);
      const hours = Math.floor(argumentTime/3600);
      return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    }

    #renderTimer(time) {
      document.querySelector('.confirm').disabled = true;
      this.#timerBlock.innerHTML = '';
      this.#timerBlock.classList.add('timer');
      this.#timerBlock.textContent = this.#getTextTime(time);
      this.#intervalId = setInterval(() => {
        if (time <= 0) {
          clearInterval(this.#intervalId);
          this.#intervalId = null;
          this.#timerBlock.textContent = 'Финиш';
          return setTimeout(() => {
            this.#removeTimer();
          }, 2000);
        }
        time--;
        this.#timerBlock.textContent = this.#getTextTime(time);
      }, 1000);
    }

    #renderCustomPrompt() {
      const prompt = document.createElement('div');
      prompt.className = 'prompt';
      const inputWrapper = document.createElement('div');
      this.#timerBlock = inputWrapper;
      inputWrapper.className = 'input-wrapper';
      inputWrapper.append(this.#createInput());
      const confirmButton = document.createElement('button');
      confirmButton.className = 'confirm button';
      confirmButton.textContent = '✔';
      confirmButton.disabled = true;
      this.#confirmButton = confirmButton;
      const declineButton = document.createElement('button');
      declineButton.className = 'decline button';
      declineButton.textContent = '✖';
      prompt.append(inputWrapper, confirmButton, declineButton);
      declineButton.addEventListener('click', this.#removeTimer.bind(this));
      confirmButton.addEventListener('click', () => {
        this.#renderTimer(this.#value);
      });
      prompt.style.opacity = '0';
      document.body.append(prompt);
      setTimeout(() => {
        this.#prompt.style.opacity = '1';
      }, 0);
      return prompt;
    }

    trigger() {
      if (!this.#prompt) {
        this.#prompt = this.#renderCustomPrompt();
      } else {
        this.#resetTimer();
      }
    }
}