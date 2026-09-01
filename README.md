# AIChat - Chat AI Moderne

Une application de chat AI élégante et entièrement fonctionnelle avec une interface moderne inspirée de Proton et Claude.

## ✨ Fonctionnalités

### Interface Utilisateur
- **Design moderne et épuré** avec thème sombre/clair
- **Animations fluides** pour une meilleure expérience utilisateur
- **Responsive design** adapté à tous les appareils
- **Sidebar personnalisée** avec historique des conversations
- **Espace d'accueil** avec suggestions rapides

### Fonctionnalités Principales
- 💬 **Chat en temps réel** avec simulation de réponses IA
- 🎨 **Thème personnalisable** (sombre/clair)
- ⚙️ **Paramètres avancés** (température, animations)
- 📝 **Support du markdown** dans les messages
- ⌨️ **Raccourcis clavier** (Shift+Enter pour nouvelle ligne)
- 📱 **Interface mobile-friendly**
- 🎬 **Animations élégantes** avec des transitions fluides

### Paramètres
- Sélection du thème (sombre/clair)
- Contrôle de la température (créativité) de la réponse
- Activation/désactivation des animations
- Persistance des paramètres avec localStorage

## 🚀 Démarrage Rapide

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Travail-code/ai-chat-app.git
   cd ai-chat-app
   ```

2. **Ouvrir dans un navigateur**
   - Double-cliquez sur `index.html`
   - Ou servez avec un serveur local:
   ```bash
   python -m http.server 8000
   # Puis visitez http://localhost:8000
   ```

## 📁 Structure du Projet

```
ai-chat-app/
├── index.html       # Structure HTML principale
├── styles.css       # Styles et animations CSS
├── script.js        # Logique JavaScript
└── README.md        # Ce fichier
```

## 🎨 Design et Animations

### Animations Incluses
- ✨ Entrée fluide des éléments (slideInLeft, slideInUp, fadeIn)
- 🔄 Rotation du logo
- 🎯 Float animation pour l'icône d'accueil
- ⌨️ Animation de frappe (typing indicator)
- 🎪 Hover effects interactifs
- 📊 Transitions fluides sur tous les boutons

### Palette de Couleurs
- **Primaire**: Indigo (Proton-style)
- **Fond**: Ardoise sombre/clair
- **Accents**: Violet et Indigo

## 💻 Technologie

- **HTML5** - Structure sémantique
- **CSS3** - Animations et transitions modernes
- **JavaScript (Vanilla)** - Aucune dépendance externe (sauf Font Awesome)
- **Font Awesome** - Icônes vectorielles

## ⌨️ Raccourcis Clavier

| Raccourci | Action |
|-----------|--------|
| `Enter` | Envoyer le message |
| `Shift + Enter` | Nouvelle ligne |
| `Esc` | Fermer le modal |

## 🔧 Configuration

### Variables CSS (Thème)
Modifiez `:root` dans `styles.css`:
```css
:root {
    --primary: #6366f1;           /* Couleur primaire */
    --bg-dark: #0f172a;          /* Fond sombre */
    --text-primary: #f1f5f9;     /* Texte primaire */
}
```

### Intégration API
Pour intégrer une véritable API:
```javascript
async function generateAIResponse(userMessage) {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    addMessage(data.response, 'assistant');
}
```

## 📱 Responsive Breakpoints

- **Tablet**: 768px et moins
- **Mobile**: Sidebar se transforme en menu glissant
- **Desktop**: Vue complète optimisée

## 🌟 Fonctionnalités Futures Possibles

- [ ] Intégration avec une véritable API d'IA (OpenAI, Anthropic)
- [ ] Sauvegarde des conversations en base de données
- [ ] Upload d'images et d'fichiers
- [ ] Support du synthèse vocale
- [ ] Modes de conversation (créatif, analytique, etc.)
- [ ] Partage de conversations
- [ ] Recherche dans l'historique
- [ ] Collaboration en temps réel

## 📄 Licence

MIT - Libre d'utilisation et de modification

## 👨‍💻 Auteur

Créé par Travail-code

## 🤝 Contribution

Les contributions sont bienvenues! Créez une pull request avec vos améliorations.

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Profitez de votre chat AI moderne!** ✨
