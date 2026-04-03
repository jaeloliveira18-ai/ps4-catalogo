// Banco de dados de jogos
const games = [
    {
        id: 1,
        title: "eFootball 2026",
        category: "sports",
        cover: "https://via.placeholder.com/400x500/1a1a2e/00d4ff?text=eFootball+2026",
        downloadUrl: "https://archive.org/download/efootball2026/efootball2026.pkg",
        size: "45 GB"
    },
    {
        id: 2,
        title: "Hollow Knight: Silksong",
        category: "adventure",
        cover: "https://via.placeholder.com/400x500/2d1b4e/7b2cbf?text=Silksong",
        downloadUrl: "https://archive.org/download/silksong/silksong.pkg",
        size: "12 GB"
    },
    {
        id: 3,
        title: "Naruto Storm 4",
        category: "action",
        cover: "https://via.placeholder.com/400x500/1a0a2e/ff6b6b?text=Naruto+Storm+4",
        downloadUrl: "https://archive.org/download/naruto-storm4/naruto.pkg",
        size: "35 GB"
    },
    {
        id: 4,
        title: "God of War Ragnarök",
        category: "action",
        cover: "https://via.placeholder.com/400x500/2e1a1a/ff4444?text=God+of+War",
        downloadUrl: "https://archive.org/download/gow-ragnarok/gow.pkg",
        size: "90 GB"
    },
    {
        id: 5,
        title: "FIFA 26",
        category: "sports",
        cover: "https://via.placeholder.com/400x500/0a2e1a/44ff44?text=FIFA+26",
        downloadUrl: "https://archive.org/download/fifa26/fifa26.pkg",
        size: "55 GB"
    },
    {
        id: 6,
        title: "Spider-Man 2",
        category: "adventure",
        cover: "https://via.placeholder.com/400x500/1a0a0a/ff0000?text=Spider-Man+2",
        downloadUrl: "https://archive.org/download/spiderman2/spiderman2.pkg",
        size: "75 GB"
    }];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
});

function renderGames(gamesToRender) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';

    if (gamesToRender.length === 0) {
        grid.innerHTML = '<div class="no-results">🎮 Nenhum jogo encontrado 😢</div>';
        return;
    }

    gamesToRender.forEach((game, index) => {
        const card = createGameCard(game, index);
        grid.appendChild(card);
    });
}

function createGameCard(game, index) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" class="game-cover" onerror="this.src='https://via.placeholder.com/400x500/1a1a2e/ffffff?text=${encodeURIComponent(game.title)}'">
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <span class="game-category">${getCategoryName(game.category)}</span>
            <p class="game-size">📦 ${game.size}</p>
            <button class="download-btn" onclick="downloadGame('${game.downloadUrl}', '${game.title}')">
                ⬇️ Baixar Agora
            </button>
        </div>
    `;
    
    return card;
}

function getCategoryName(category) {
    const categories = {
        'action': '🎯 Ação',
        'sports': '⚽ Esportes',
        'adventure': '🗡️ Aventura',
        'racing': '🏎️ Corrida',
        'rpg': '⚔️ RPG',        'fighting': '👊 Luta'
    };
    return categories[category] || category;
}

function downloadGame(url, title) {
    if (confirm(`🎮 ${title}\n\nDeseja iniciar o download?\nO PS4 irá instalar automaticamente!`)) {
        window.location.href = url;
    }
}

function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm)
    );
    
    renderGames(filtered);
}

function filterBy(category) {
    currentFilter = category;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderGames(games);
    } else {
        const filtered = games.filter(game => game.category === category);
        renderGames(filtered);
    }
}

document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchGames();
    }
});
