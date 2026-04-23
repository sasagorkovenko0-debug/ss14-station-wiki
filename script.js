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
