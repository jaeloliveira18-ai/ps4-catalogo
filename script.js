// Banco de dados de jogos - Catálogo PS4
const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        category: "rpg",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP4497-CUSA16596_00-0000000000000004/BASE/UP4497-CUSA16596_00-0000000000000004_BASE_00.pkg",
        size: "~50 GB"
    },
    {
        id: 2,
        title: "Dias Passados",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202011/1204/wYL4v2r8uMQFvVTJlfuj8ICk.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/EP9000-CUSA09175_00-DAYSGONECOMPLETE/BASE/EP9000-CUSA09175_00-DAYSGONECOMPLETE_BASE_00.pkg",
        size: "~45 GB"
    },
    {
        id: 3,
        title: "Deus da Guerra",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA07408_00-00000000GODOFWAR/BASE/UP9000-CUSA07408_00-00000000GODOFWAR_BASE_00.pkg",
        size: "~45 GB"
    },
    {
        id: 4,
        title: "Deus da Guerra Ragnarök",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/hguxDixf0FzALJnXNCc10Tdo.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA34384_00-GOWRAGNAROK00000/BASE/UP9000-CUSA34384_00-GOWRAGNAROK00000_BASE_00.pkg",
        size: "~90 GB"
    },
    {
        id: 5,
        title: "Elden Ring",
        category: "rpg",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP0700-CUSA28863_00-ELDENRING0000000/BASE/UP0700-CUSA28863_00-ELDENRING0000000_BASE_00.pkg",
        size: "~50 GB"
    },
    {
        id: 6,
        title: "EA Sports FC 26",
        category: "sports",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202507/1617/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP0006-CUSA52342_00-EASPORTSFC2026BG/BASE/UP0006-CUSA52342_00-EASPORTSFC2026BG_BASE_00.pkg",
        size: "~55 GB"
    },    {
        id: 7,
        title: "Fantasma de Tsushima",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/c16gs6a7lbAYzPf7ZTikbH1c.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP9000-CUSA11456_00-GHOSTSHIP0000000/BASE/UP9000-CUSA11456_00-GHOSTSHIP0000000_BASE_00.pkg",
        size: "~50 GB"
    },
    {
        id: 8,
        title: "Fallout 4",
        category: "rpg",
        cover: "https://image.api.playstation.com/cdn/UP1003/CUSA02557_00/j4PdxSxO3optsrP1SxnAqdq6qCmYPd9x.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP1003-CUSA03448_00-FALLOUT4FULGLAME/BASE/UP1003-CUSA03448_00-FALLOUT4FULGLAME_BASE_00.pkg",
        size: "~40 GB"
    },
    {
        id: 9,
        title: "Far Cry 4",
        category: "action",
        cover: "https://image.api.playstation.com/cdn/UP0001/CUSA00496_00/zfviJfMx8AXG0BVq9iObe9dUhXzcXfAh.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/EP0001-CUSA00462_00-FC4GAMEPS4000001/BASE/EP0001-CUSA00462_00-FC4GAMEPS4000001_BASE_00.pkg",
        size: "~35 GB"
    },
    {
        id: 10,
        title: "Guerra Mundial Z",
        category: "action",
        cover: "https://image.api.playstation.com/cdn/EP2609/CUSA13930_00/89rH1uefHnZ1XLyenTbgHTNCs1CYTxxu.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP2746-CUSA14046_00-WWZTHEGAME201800/BASE/UP2746-CUSA14046_00-WWZTHEGAME201800_BASE_0.pkg",
        size: "~30 GB"
    },
    {
        id: 11,
        title: "Homem-Aranha: Miles Morales",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA17722_00-MARVELSSMMORALES/BASE/UP9000-CUSA17722_00-MARVELSSMMORALES_BASE.pkg",
        size: "~40 GB"
    },
    {
        id: 12,
        title: "Marvel's Spider-Man: Edição Jogo do Ano",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA02299_00-MARVELSSPIDERMAN/BASE/UP9000-CUSA02299_00-MARVELSSPIDERMAN_BASE_00.pkg",
        size: "~45 GB"
    },
    {
        id: 13,        title: "Naruto Storm 4: Rumo a Boruto",
        category: "fighting",
        cover: "https://image.api.playstation.com/cdn/UP0700/CUSA06381_00/leBwhHZ307kxd3oaMKAKRnGRa2TimjcK.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP0700-CUSA06381_00-NARUTOUNS4RTB000/BASE/UP0700-CUSA06381_00-NARUTOUNS4RTB000_BASE_00.pkg",
        size: "~35 GB"
    },
    {
        id: 14,
        title: "O Legado de Hogwarts",
        category: "rpg",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202503/2716/ce2e7f5896365b4e35a192b1f7592b590fee98827644ddb4.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP1018-CUSA12824_00-HOGWARTSLEGACY01/BASE/UP1018-CUSA12824_00-HOGWARTSLEGACY01_BASE_00.pkg",
        size: "~75 GB"
    },
    {
        id: 15,
        title: "Red Dead Redemption",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202511/1414/10231d67c21c96ffa98c728fc255dd7b8965c12c44e4feec.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/EP1004-CUSA36843_00-REDEMPTION000001/BASE/EP1004-CUSA36843_00-REDEMPTION000001_BASE_00.pkg",
        size: "~45 GB"
    },
    {
        id: 16,
        title: "Red Dead Redemption 2",
        category: "adventure",
        cover: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP1004-CUSA03041_00-REDEMPTION000002/BASE/UP1004-CUSA03041_00-REDEMPTION000002_BASE_00.pkg",
        size: "~105 GB"
    },
    {
        id: 17,
        title: "Resident Evil 4 Remake",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP0102-CUSA33387_00-RE4RMAINGAME0000/BASE/UP0102-CUSA33387_00-RE4RMAINGAME0000_BASE_00.pkg",
        size: "~60 GB"
    },
    {
        id: 18,
        title: "Sekiro: As Sombras Morrem Duas Vezes",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP0002-CUSA12047_00-SEKIROGAME000001/BASE/UP0002-CUSA12047_00-SEKIROGAME000001_BASE_00.pkg",
        size: "~40 GB"
    },
    {
        id: 19,
        title: "Star Wars Jedi: Sobrevivente",
        category: "adventure",        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/47becbe467e18575f71429abbaec9af707865744b825f34d.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP0006-CUSA33778_00-APPLEJACKGAME000/BASE/UP0006-CUSA33778_00-APPLEJACKGAME000_BASE_00.pkg",
        size: "~140 GB"
    },
    {
        id: 20,
        title: "The Last of Us Part II",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA07820_00-THELASTOFUSPART2/BASE/UP9000-CUSA07820_00-THELASTOFUSPART2_BASE_00.pkg",
        size: "~80 GB"
    },
    {
        id: 21,
        title: "Assassin's Creed Unity",
        category: "adventure",
        cover: "https://image.api.playstation.com/cdn/UP0001/CUSA00663_00/arnlFWX6Y6ZlGyCCYWmth94Shtw44kON.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/EP0001-CUSA00605_00-AC5GAMEPS4000001/BASE/EP0001-CUSA00605_00-AC5GAMEPS4000001_BASE_00.pkg",
        size: "~40 GB"
    },
    {
        id: 22,
        title: "Call of Duty: Vanguard",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202109/2218/JelPN9rNJfDtoQJTwDsa0deG.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP0002-CUSA24041_00-CODVTHEGAME00001/BASE/UP0002-CUSA24041_00-CODVTHEGAME00001_BASE_00.pkg",
        size: "~95 GB"
    },
    {
        id: 23,
        title: "Call of Duty: Modern Warfare III",
        category: "action",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202311/0921/a7f105cde9d34ae086970fad668e1d54f4d99e1d4f66796b.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP0002-CUSA23827_00-COREGAME00000001/BASE/UP0002-CUSA23827_00-COREGAME00000001.pkg",
        size: "~150 GB"
    },
    {
        id: 24,
        title: "LEGO Star Wars: A Saga Skywalker",
        category: "adventure",
        cover: "https://image.api.playstation.com/vulcan/ap/rnd/202112/2121/qrpfY71rsvMn6beyjgStw3cH.png",
        downloadUrl: "http://files.duskaryon.pp.ua/UP1018-CUSA13794_00-LEGOSWTSS0000000/BASE/UP1018-CUSA13794_00-LEGOSWTSS0000000_BASE_00.pkg",
        size: "~40 GB"
    },
    {
        id: 25,
        title: "Horizon Zero Dawn: Edição Completa",
        category: "rpg",
        cover: "https://image.api.playstation.com/vulcan/img/rnd/202011/1018/9erXiwu0ozgKGPIUVTuy2siN.png",
        downloadUrl: "http://cdn.duskaryon.pp.ua/UP9000-CUSA10237_00-HRZCE00000000000/BASE/UP9000-CUSA10237_00-HRZCE00000000000_BASE_00.pkg",        size: "~65 GB"
    }
];

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
        'adventure': '🗡️ Aventura',        'racing': '🏎️ Corrida',
        'rpg': '⚔️ RPG',
        'fighting': '👊 Luta'
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
