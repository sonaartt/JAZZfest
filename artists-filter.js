document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.date-filter');
    const artistCards = document.querySelectorAll('.artist-card');
    const artistsGrid = document.querySelector('.artists-grid');
    const artistsSection = document.querySelector('.artists-section');
    
    // Функция фильтрации артистов
    function filterArtists(date) {
        let visibleCount = 0;
        
        artistCards.forEach(card => {
            if (date === 'all') {
                card.style.display = 'block';
                visibleCount++;
            } else {
                const dates = card.getAttribute('data-dates').split(',');
                if (dates.includes(date)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            }
        });
        
        // Рассчитываем высоту сетки на основе количества видимых элементов
        updateGridHeight(visibleCount);
    }
    
    // Функция обновления высоты сетки
    function updateGridHeight(visibleCount) {
        const rows = Math.ceil(visibleCount / 4); // 4 колонки в ряду
        const rowHeight = 370 + 60; // Высота карточки + row-gap
        const gridHeight = rows * rowHeight;
        
        artistsGrid.style.minHeight = gridHeight + 'px';
    }
    
    // Обработчики клика на фильтры
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            const date = this.getAttribute('data-date');
            filterArtists(date);
        });
    });
    
    // Инициализация
    filterArtists('all');
});