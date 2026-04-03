// Banco de dados de jogos - Catálogo PS4 (Internet Archive)
const games = [
    {
        id: 1,
        title: "Tetris Effect",
        category: "puzzle",
        cover: "https://archive.org/download/tetris-effect-cover/tetris_effect.jpg",
        downloadUrl: "https://archive.org/download/PS4TetrisEffect/Tetris_Effect_PS4.pkg",
        cusaId: "CUSA13594",
        size: "~3.5 GB"
    },
    {
        id: 2,
        title: "Celeste",
        category: "adventure",
        cover: "https://archive.org/download/celeste-cover/celeste.jpg",
        downloadUrl: "https://archive.org/download/CelestePS4/Celeste_PS4.pkg",
        cusaId: "CUSA11302",
        size: "~1.2 GB"
    },
    {
        id: 3,
        title: "Stardew Valley",
        category: "rpg",
        cover: "https://archive.org/download/stardew-cover/stardew.jpg",
        downloadUrl: "https://archive.org/download/StardewValleyPS4/Stardew_Valley.pkg",
        cusaId: "CUSA06840",
        size: "~1.5 GB"
    },
    {
        id: 4,
        title: "Hollow Knight",
        category: "adventure",
        cover: "https://archive.org/download/hollow-knight-cover/hollow_knight.jpg",
        downloadUrl: "https://archive.org/download/HollowKnightPS4/Hollow_Knight.pkg",
        cusaId: "CUSA13632",
        size: "~4.3 GB"
    },
    {
        id: 5,
        title: "Cuphead",
        category: "action",
        cover: "https://archive.org/download/cuphead-cover/cuphead.jpg",
        downloadUrl: "https://archive.org/download/CupheadPS4/Cuphead_PS4.pkg",
        cusaId: "CUSA16395",
        size: "~3.8 GB"
    },
    {
        id: 6,
        title: "Rocket League",        category: "sports",
        cover: "https://archive.org/download/rocket-league-cover/rocket_league.jpg",
        downloadUrl: "https://archive.org/download/RocketLeaguePS4/Rocket_League.pkg",
        cusaId: "CUSA01433",
        size: "~7.5 GB"
    },
    {
        id: 7,
        title: "Dead Cells",
        category: "action",
        cover: "https://archive.org/download/dead-cells-cover/dead_cells.jpg",
        downloadUrl: "https://archive.org/download/DeadCellsPS4/Dead_Cells.pkg",
        cusaId: "CUSA11253",
        size: "~1.8 GB"
    },
    {
        id: 8,
        title: "Undertale",
        category: "rpg",
        cover: "https://archive.org/download/undertale-cover/undertale.jpg",
        downloadUrl: "https://archive.org/download/UndertalePS4/Undertale.pkg",
        cusaId: "CUSA08801",
        size: "~1.0 GB"
    },
    {
        id: 9,
        title: "Shovel Knight",
        category: "adventure",
        cover: "https://archive.org/download/shovel-knight-cover/shovel_knight.jpg",
        downloadUrl: "https://archive.org/download/ShovelKnightPS4/Shovel_Knight.pkg",
        cusaId: "CUSA01594",
        size: "~0.8 GB"
    },
    {
        id: 10,
        title: "Enter the Gungeon",
        category: "action",
        cover: "https://archive.org/download/enter-gungeon-cover/enter_gungeon.jpg",
        downloadUrl: "https://archive.org/download/EnterTheGungeonPS4/Enter_Gungeon.pkg",
        cusaId: "CUSA01608",
        size: "~1.3 GB"
    },
    {
        id: 11,
        title: "Persona 5",
        category: "rpg",
        cover: "https://archive.org/download/persona5-cover/persona5.jpg",
        downloadUrl: "https://archive.org/download/Persona5PS4/Persona_5.pkg",
        cusaId: "CUSA05877",
        size: "~22 GB"    },
    {
        id: 12,
        title: "Bloodborne",
        category: "rpg",
        cover: "https://archive.org/download/bloodborne-cover/bloodborne.jpg",
        downloadUrl: "https://archive.org/download/BloodbornePS4/Bloodborne.pkg",
        cusaId: "CUSA00207",
        size: "~33 GB"
    },
    {
        id: 13,
        title: "The Witcher 3",
        category: "rpg",
        cover: "https://archive.org/download/witcher3-cover/witcher3.jpg",
        downloadUrl: "https://archive.org/download/Witcher3PS4/Witcher_3.pkg",
        cusaId: "CUSA00527",
        size: "~50 GB"
    },
    {
        id: 14,
        title: "Minecraft",
        category: "adventure",
        cover: "https://archive.org/download/minecraft-cover/minecraft.jpg",
        downloadUrl: "https://archive.org/download/MinecraftPS4/Minecraft.pkg",
        cusaId: "CUSA00744",
        size: "~1.5 GB"
    },
    {
        id: 15,
        title: "Grand Theft Auto V",
        category: "action",
        cover: "https://archive.org/download/gtav-cover/gtav.jpg",
        downloadUrl: "https://archive.org/download/GTAVPS4/GTA_V.pkg",
        cusaId: "CUSA00419",
        size: "~65 GB"
    }
];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
});

function renderGames(gamesToRender) {
    const grid = document.getElementById('gamesGrid');
    grid.innerHTML = '';

    if (gamesToRender.length === 0) {        grid.innerHTML = '<div class="no-results">🎮 Nenhum jogo encontrado 😢</div>';
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
    
    // URL do OrbisPatches para updates
    const updateUrl = game.cusaId ? `https://orbispatches.com/game/${game.cusaId}` : '#';
    
    card.innerHTML = `
        <img src="${game.cover}" alt="${game.title}" class="game-cover" onerror="this.src='https://via.placeholder.com/400x500/1a1a2e/00d4ff?text=${encodeURIComponent(game.title)}'">
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <span class="game-category">${getCategoryName(game.category)}</span>
            <p class="game-size">📦 ${game.size}</p>
            <div class="button-group">
                <button class="download-btn" onclick="downloadGame('${game.downloadUrl}', '${game.title}')">
                    ⬇️ Baixar
                </button>
                <button class="update-btn" onclick="checkUpdate('${updateUrl}', '${game.title}', '${game.cusaId}')">
                    🔄 Update
                </button>
            </div>
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
        'rpg': '⚔️ RPG',
        'fighting': '👊 Luta',
        'puzzle': '🧩 Puzzle'
    };
    return categories[category] || category;
}
function downloadGame(url, title) {
    if (confirm(`🎮 ${title}\n\nDeseja iniciar o download?\nO PS4 irá instalar automaticamente!`)) {
        window.location.href = url;
    }
}

function checkUpdate(url, title, cusaId) {
    if (!cusaId) {
        alert('❌ CUSA ID não encontrado para este jogo.');
        return;
    }
    
    if (confirm(`🔄 ${title}\n\nAbrir página de updates no OrbisPatches?\n\nID: ${cusaId}`)) {
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
