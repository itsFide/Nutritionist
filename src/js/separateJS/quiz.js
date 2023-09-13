document.addEventListener('DOMContentLoaded', ()=>{
    let quizHeroBtn = document.querySelector('.quiz-hero__btn')
    let quizHero = document.querySelector('.quiz-hero');
    let quizWrapper = document.querySelector('.quiz-wrapper')
    quizHeroBtn.addEventListener('click', () => {
        quizWrapper.style.display = 'block'
        quizHero.style.display = 'none'
    })
})
const quizTemplate = (data = [], dataLength, options) => {
	const {number, title, answer_placeholder} = data;
	const {nextBtnText} = options;
	const answers = data.answers.map(item => {
		return `
		
			<div class="quiz-question__label">
                ${item.answer_placeholder ? `<p class="quiz-question__input__title">${item.answer_placeholder}</p>` : ""}

				<input id="${item.answer_title}" type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type == 'text' ? 'placeholder=""' : ''} value="${item.type !== 'text' ? item.answer_title : ''}">

                ${item.type === "radio" ? 
                `<label for="${item.answer_title}">${item.answer_title}</label>` 
                : 
                ""}
			</div>

		`;
	});
	return `
	
		<div class="quiz__content">
			<div class="quiz__questions title-50 title">Pregunta ${number}/${dataLength}</div>
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: 0;"></div>
            </div>
			<div class="quiz-question">
				<h3 class="quiz-question__title title">${title}</h3>
				<div class="quiz-question__answers">
					${answers.join('')}
				</div>
                <div class="quiz-error">*Solo podrá continuar después de la respuesta</div>
                ${number === 10 ? `
                    <div class="quiz-question__descr" id="answerDescr">
                        <!-- Здесь будет выводиться текст из answer_descr -->
                    </div>
                ` : ''}
				<button type="button" class="btn quiz-question__btn" data-next-btn>
                    <div class="btn--arrow">
                        <img src="../../images/btn-arrow.svg" alt="">
                    </div> 
                    ${nextBtnText}
                </button>
			</div>

		</div>
	
	`;
};


class Quiz {
	constructor(selector, data, options) {
		this.$el = document.querySelector(selector);
		this.options = options;
		this.data = data;
		this.counter = 0;
		this.dataLength = this.data.length;
		this.resultArray = [];
		this.tmp = {};
		this.init();
		this.events();
	}

	init() {
		console.log('init!');
		this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
        const progress = (this.counter / this.dataLength) * 100;
        this.updateProgressBar(progress + 10);

        // Добавьте следующие строки для обработки вопроса 10:
        if (quizData[this.counter].number === 10) {
            const answerDescr = this.$el.querySelector('#answerDescr');
            answerDescr.style.display = 'none'; // Скрываем текст из answer_descr
        }
	}

	events() {
		this.$el.addEventListener('click', (e) => {
			if (e.target == document.querySelector('[data-next-btn]')) {
				this.addToSend();
				this.nextQuestion();
			}

			if (e.target == document.querySelector('[data-send]')) {
				this.send();
			}

            // Добавьте обработчики для радиокнопок "Sí" и "No" вопроса 10:
            if (quizData[this.counter].number === 10) {
                if (e.target.type === 'radio' && (e.target.id === 'Sí' || e.target.id === 'No')) {
                    const answerDescr = this.$el.querySelector('#answerDescr');
                    const selectedAnswer = quizData[this.counter].answers.find(answer => answer.answer_title === e.target.id);

                    if (selectedAnswer) {
                        answerDescr.innerHTML = selectedAnswer.answer_descr;
                        answerDescr.style.display = 'block'; // Показываем текст из answer_descr
                    }
                }
            }
		});

		this.$el.addEventListener('change', (e) => {
			if (e.target.tagName == 'INPUT') {
				if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
					let elements = this.$el.querySelectorAll('input');

					elements.forEach(el => el.checked = false);
				}

				this.tmp = this.serialize(this.$el);
			}
		});
	}

	nextQuestion() {
		if (this.valid()) {
			console.log('next question!');
			if (this.counter + 1 < this.dataLength) {
				this.counter++;
				this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

                // Обновляем линию прогресса
                const progress = (this.counter / this.dataLength) * 100;
                
                this.updateProgressBar(progress+10);
                

				if (this.counter + 1 == this.dataLength) {
					this.$el.insertAdjacentHTML('beforeend', `<button type="button" class="quiz-question__btn btn" data-send>
                    <div class="btn--arrow">
                        <img src="../../images/btn-arrow.svg" alt="">
                    </div> 
                    ${this.options.sendBtnText}
                    </button>`);
					this.$el.querySelector('[data-next-btn]').remove();
				}
			}
		} else{
            let errorBlock = this.$el.querySelector('.quiz-error')
            errorBlock.classList.add('show')
        }
	}
    updateProgressBar(progress) {
        const progressBar = this.$el.querySelector('.quiz-progress-bar');
        progressBar.style.width = `${progress}%`;
    }
	valid() {
		let isValid = false;
		let elements = this.$el.querySelectorAll('input');
		elements.forEach(el => {
      
			switch(el.type) {
				case 'text':
                    (el.value) !== "" ? isValid = true : isValid = false
				case 'checkbox':
					(el.checked) ? isValid = true : el.classList.add('error');
				case 'radio':
					(el.checked) ? isValid = true : el.classList.add('error');
			}
		});

		return isValid;
	}

	addToSend() {
		this.resultArray.push(this.tmp);
	}

	send() {
		if(this.valid()) {
			console.log('send!');

			let elements = this.$el.querySelectorAll('input');
			elements.forEach(el => el.classList.remove('error'));


			const formData = new FormData();

			for(let item of this.resultArray) {
				for (let obj in item) {
					formData.append(obj, item[obj].substring(0, item[obj].length - 1))
				}
			}

			const response = fetch('mail.php', {
				method: 'POST',
				body: formData
			});
		}
	}

	serialize(form) {
		let field, s = {};
		let valueString = '';
		if (typeof form == 'object' && form.nodeName == "FORM") {
			let len = form.elements.length;
			for (let i = 0; i < len; i++) {
				field = form.elements[i];
				
				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
					if (field.type == 'select-multiple') {
						for (j = form.elements[i].options.length - 1; j >= 0; j--) {
							if (field.options[j].selected)
								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
						}
					} else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
						valueString += field.value + ',';
						
						s[field.name] = valueString;
						
						
					}
				}
			}
		}
		return s
	}
}

window.quiz = new Quiz('.quiz-wrapper', quizData, {
	nextBtnText: "Continuar",
	sendBtnText: "¡Obtener el plan de adelgazamiento!"
});