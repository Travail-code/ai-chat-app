// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', savedTheme === 'light');
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('light-theme', theme === 'light');
    updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Message Management
const messagesContainer = document.getElementById('messagesContainer');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const settingsModal = document.getElementById('settingsModal');
const newChatBtn = document.getElementById('newChatBtn');

let messages = [];
let chatId = 1;

// Auto-resize textarea
messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px';
});

// Handle form submission
chatForm.addEventListener('submit', handleSendMessage);

// Handle keyboard shortcuts
messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage(e);
    }
});

function handleSendMessage(e) {
    e.preventDefault();
    const message = messageInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Remove welcome section if present
    const welcome = document.querySelector('.welcome-section');
    if (welcome) welcome.remove();
    
    // Simulate AI response
    showTypingIndicator();
    setTimeout(() => {
        generateAIResponse(message);
    }, 800);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const timestamp = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const avatar = sender === 'user' ? 'V' : 'A';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div>
            <div class="message-content">
                <p>${escapeHtml(text)}</p>
            </div>
            <div class="message-time">${timestamp}</div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message assistant';
    messageDiv.id = 'typing-indicator';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">A</div>
        <div>
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

function generateAIResponse(userMessage) {
    removeTypingIndicator();
    
    const responses = {
        'programmation asynchrone': 'La programmation asynchrone permet d\'exécuter du code sans bloquer le fil d\'exécution principal. Les concepts clés incluent:\n\n1. **Callbacks**: Fonctions passées en paramètre\n2. **Promises**: Représente une valeur future\n3. **Async/Await**: Syntaxe plus lisible\n\nVoici un exemple en JavaScript:\n\n```javascript\nasync function fetchData() {\n    try {\n        const response = await fetch(\'https://api.example.com/data\');\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error(\'Erreur:\', error);\n    }\n}\n```',
        'recette de gateau': 'Voici une délicieuse recette de gâteau au chocolat:\n\n**Ingrédients:**\n- 200g de chocolat noir\n- 250g de farine\n- 200g de sucre\n- 4 œufs\n- 100ml de lait\n- 100g de beurre\n\n**Préparation:**\n1. Préchauffer le four à 180°C\n2. Faire fondre le chocolat et le beurre\n3. Mélanger les ingrédients secs\n4. Combiner tous les ingrédients\n5. Cuire 35-40 minutes\n\nBon appétit! 🍰',
        'relativité': 'La théorie de la relativité d\'Einstein révolutionne notre compréhension de l\'espace et du temps:\n\n**Relativité Restreinte (1905):**\n- E = mc²\n- La vitesse de la lumière est constante\n- Le temps n\'est pas absolu\n\n**Relativité Générale (1915):**\n- La gravité courbe l\'espace-temps\n- Les objets massifs déforment l\'univers\n- Explique les trous noirs\n\nCette théorie a transformé la physique moderne!',
        'productivité': 'Voici 5 conseils pour améliorer votre productivité:\n\n1. **Planifier votre journée**: Établir des priorités dès le matin\n2. **Technique Pomodoro**: Travail en blocs de 25 minutes\n3. **Éliminer les distractions**: Désactiver les notifications\n4. **Prendre des pauses**: Rest régulièrement\n5. **Automatiser**: Utiliser des outils pour les tâches répétitives\n\nN\'oubliez pas: La qualité prime sur la quantité!'
    };
    
    let response = 'Je suis une IA de démonstration. ';
    
    for (const [keyword, answer] of Object.entries(responses)) {
        if (userMessage.toLowerCase().includes(keyword)) {
            response = answer;
            break;
        }
    }
    
    if (response === 'Je suis une IA de démonstration. ') {
        response += 'Votre message était: "' + userMessage + '"\n\nCette application de chat est une démonstration. Essayez les suggestions rapides pour voir les réponses fonctionner!';
    }
    
    addMessage(response, 'assistant');
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Settings Modal
document.querySelector('.btn-settings').addEventListener('click', () => {
    settingsModal.classList.add('active');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    settingsModal.classList.remove('active');
});

settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('active');
    }
});

// Theme Buttons
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        setTheme(theme);
    });
});

// Temperature Slider
const tempSlider = document.getElementById('temperatureSlider');
const tempValue = document.getElementById('tempValue');
if (tempSlider) {
    tempSlider.addEventListener('input', (e) => {
        tempValue.textContent = e.target.value;
        localStorage.setItem('temperature', e.target.value);
    });
}

// Animation Toggle
const animationToggle = document.getElementById('animationToggle');
if (animationToggle) {
    animationToggle.checked = localStorage.getItem('animations') !== 'false';
    animationToggle.addEventListener('change', () => {
        localStorage.setItem('animations', animationToggle.checked);
    });
}

// New Chat Button
newChatBtn.addEventListener('click', () => {
    chatId++;
    messages = [];
    messagesContainer.innerHTML = `
        <div class="welcome-section">
            <div class="welcome-icon">
                <i class="fas fa-sparkles"></i>
            </div>
            <h2>Bienvenue dans AIChat</h2>
            <p>Commencez une conversation en tapant votre message ci-dessous</p>
            <div class="quick-prompts">
                <button class="quick-prompt" onclick="setMessage('Explique-moi les concepts de la programmation asynchrone')">
                    <i class="fas fa-code"></i>
                    <span>Programmation asynchrone</span>
                </button>
                <button class="quick-prompt" onclick="setMessage('Donne-moi une recette de gateau au chocolat')">
                    <i class="fas fa-utensils"></i>
                    <span>Recette de gâteau</span>
                </button>
                <button class="quick-prompt" onclick="setMessage('Explique-moi la théorie de la relativité')">
                    <i class="fas fa-atom"></i>
                    <span>Relativité d\'Einstein</span>
                </button>
                <button class="quick-prompt" onclick="setMessage('Comment améliorer ma productivité?')">
                    <i class="fas fa-rocket"></i>
                    <span>Productivité</span>
                </button>
            </div>
        </div>
    `;
});

function setMessage(text) {
    messageInput.value = text;
    messageInput.style.height = 'auto';
    messageInput.style.height = messageInput.scrollHeight + 'px';
    messageInput.focus();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
initTheme();
updateThemeButtons(localStorage.getItem('theme') || 'dark');

if (localStorage.getItem('temperature')) {
    tempSlider.value = localStorage.getItem('temperature');
    tempValue.textContent = localStorage.getItem('temperature');
}

// Add some example messages
setTimeout(() => {
    addMessage('Bonjour! Je suis votre assistant AI. Comment puis-je vous aider?', 'assistant');
}, 1000);
