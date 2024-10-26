const audioPlayer = document.getElementById('audioPlayer');
const lyrics = document.querySelectorAll('#lyricsContainer p');
let currentLineIndex = 0;

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;

  if (currentLineIndex < lyrics.length) {
    const lineTime = parseFloat(lyrics[currentLineIndex].getAttribute('data-time'));

    if (currentTime >= lineTime) {
      lyrics.forEach((line) => line.classList.remove('active'));
      lyrics[currentLineIndex].classList.add('active');
      currentLineIndex++;
    }
  }
});

 // Получаем элемент уведомления
   const notification = document.getElementById('fullscreen-notification');

   // Добавляем обработчик события на нажатие
   notification.addEventListener('click', function() {
       // Проверяем, есть ли класс "hidden"
       if (!notification.classList.contains('hidden')) {
           // Добавляем класс, чтобы скрыть уведомление
           notification.classList.add('hidden');
       }
   });
