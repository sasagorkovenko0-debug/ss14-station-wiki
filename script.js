document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    let isPlaying = false;

    // Устанавливаем громкость пониже, чтобы эмбиент не орал
    music.volume = 0.2; 

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            // Меняем иконку и текст на "Выкл"
            musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Музыка (Выкл)';
            musicBtn.style.borderColor = "#4d94ff"; 
        } else {
            music.play();
            // Меняем иконку и текст на "Вкл"
            musicBtn.innerHTML = '<i class="fas fa-volume-up"></i> Музыка (Вкл)';
            musicBtn.style.borderColor = "#4dff88"; // Зеленая рамка при работе
        }
        isPlaying = !isPlaying;
    });
});
// Список фоновых изображений
const backgrounds = [
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1920&q=80', // Туманность
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80', // Планета Земля из космоса
    'https://images.unsplash.com/photo-1506318137071-a8e063b4bcc0?auto=format&fit=crop&w=1920&q=80', // Звезды/Млечный путь
    'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1920&q=80', // Марс/Красная планета
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1920&q=80'  // Глубокий космос
];

function setRandomBackground() {
    // Выбираем случайное число от 0 до длины массива
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedImage = backgrounds[randomIndex];
    
    // Применяем фон к body с небольшим затемнением (overlay), чтобы текст читался
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${selectedImage}')`;
}

// Запускаем функцию при загрузке страницы
window.onload = function() {
    setRandomBackground();
    // Если у тебя была функция для меню, не забудь оставить её тут или вызвать
};

// Твоя старая функция меню
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
