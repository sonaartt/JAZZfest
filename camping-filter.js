document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Удаляем active у всех фильтров
            filters.forEach(f => f.classList.remove('active'));
            // Добавляем active к текущему
            this.classList.add('active');
            
            const category = this.dataset.filter;
            filterCamping(category);
        });
    });
});

function filterCamping(category) {
    const cards = document.querySelectorAll('.camping-card');
    const subtitles = document.querySelectorAll('.subtitle');
    const sections = document.querySelectorAll('.camping-type-section');
    
    // 1. Скрываем ВСЕ подзаголовки (кроме "КЕМПИНГ" в шапке)
    subtitles.forEach(subtitle => {
        subtitle.style.display = (category === 'all') ? 'block' : 'none';
    });
    
    // 2. Фильтруем карточки и секции
    sections.forEach(section => {
        const sectionCards = section.querySelectorAll('.camping-card');
        let hasVisibleCards = false;

        sectionCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                hasVisibleCards = true;
            } else {
                card.style.display = 'none';
            }
        });

        // 3. Скрываем всю секцию, если нет видимых карточек
        if (category !== 'all' && !hasVisibleCards) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}