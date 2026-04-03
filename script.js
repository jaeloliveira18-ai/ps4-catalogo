// Banco de dados de jogos (você pode mover isso para um jogos.json)
const games = [
    {
        id: 1,
        title: "eFootball 2026",
        category: "sports",
        cover: "https://via.placeholder.com/300x400/1a1a2e/00d4ff?text=eFootball+2026",
        downloadUrl: "https://archive.org/download/efootball2026/efootball2026.pkg",
        size: "45 GB"
    },
    {
        id: 2,
        title: "Hollow Knight: Silksong",
        category: "adventure",
        cover: "https://via.placeholder.com/300x400/1a1a2e/7b2cbf?text=Silksong",
        downloadUrl: "https://archive.org/download/silksong/silksong.pkg",
        size: "12 GB"
    },
    {
        id: 3,
        title: "Naruto Shippuden: Ultimate Ninja Storm 4",
        category: "action",
        cover: "https://via.placeholder.com/300x400/1a1a2e/ff6b6b?text=Naruto+Storm+4",
        downloadUrl: "https://archive.org/download/naruto-storm4/naruto.pkg",
        size: "35 GB"
    },
    // Adicione mais jogos aqui...
];

let currentFilter = 'all';

// Carregar jogos ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
});

function renderGames(gamesToRender) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';

    if (gamesToRender.length === 0) {
        grid.innerHTML = '<div class="no-results">Nenhum jogo encontrado 😢</div>';
        return;
    }

    gamesToRender.forEach(game => {
        const card = createGameCard(game);
        grid.appendChild(card);
    });
}
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" class="game-cover">
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <span class="game-category">${getCategoryName(game.category)}</span>
            <p style="margin: 10px 0; color: #888;">📦 ${game.size}</p>
            <button class="download-btn" onclick="downloadGame('${game.downloadUrl}', '${game.title}')">
                ⬇️ Baixar PKG
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
        'rpg': '⚔️ RPG'
    };
    return categories[category] || category;
}

function downloadGame(url, title) {
    // Mostra confirmação
    if (confirm(`Deseja baixar ${title}?\n\nO PS4 irá iniciar o download automaticamente!`)) {
        // Abre o link - o PS4 vai detectar o .pkg e iniciar a instalação
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
    
    // Atualiza botões ativos
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

// Busca ao pressionar Enter
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchGames();
    }
});
