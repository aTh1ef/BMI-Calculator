window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);

    const viewChartsButton = document.querySelector('#viewChartsBtn');
    viewChartsButton.addEventListener('click', openModal);

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);

    const modal = document.querySelector('#myModal');
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    };

    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const healthCentersButton = document.querySelector('#healthCentersBtn');
    healthCentersButton.addEventListener('click', redirectToMapPage);
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`; 
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
        result.innerText += `\nPeople in this BMI range have a higher risk of diabetes.`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
        result.innerText += `\nPeople in this BMI range have a significantly higher risk of diabetes.`;
    }
}

function openModal() {
    document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function redirectToMapPage() {
    window.location.href = 'map.html';
}
