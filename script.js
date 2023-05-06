const toggleButton = document.querySelector('.toggle-button');
		const toggleInput = document.querySelector('.toggle-input');
		toggleInput.addEventListener('click', function() {
			toggleButton.classList.toggle('on');
		});