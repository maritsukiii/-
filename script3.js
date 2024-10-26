document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const lyricsLines = lyricsContainer.getElementsByTagName('p');
    let lastActiveIndex = -1;

    function updateLyrics() {
        const currentTime = audioPlayer.currentTime;

        window.requestAnimationFrame(() => {
            for (let i = 0; i < lyricsLines.length; i++) {
                const lineTime = parseFloat(lyricsLines[i].getAttribute('data-time'));
                const nextLineTime = lyricsLines[i + 1] ? parseFloat(lyricsLines[i + 1].getAttribute('data-time')) : Infinity;

                if (currentTime >= lineTime && currentTime < nextLineTime) {
                    if (lastActiveIndex !== i) {
                        lyricsLines[i].classList.add('active');
                        lyricsLines[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                        lastActiveIndex = i;
                    }
                } else {
                    lyricsLines[i].classList.remove('active');
                }
            }
        });
    }

    audioPlayer.addEventListener('timeupdate', updateLyrics);

    const notification = document.getElementById('fullscreen-notification');
    if (notification) {
        notification.addEventListener('click', function() {
            if (!notification.classList.contains('hidden')) {
                notification.classList.add('hidden');
            }
        });
    }
