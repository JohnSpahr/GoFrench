/*
   ______      ______                     __       __                 __      __             _____             __        
  / ____/___  / ____/_______  ____  _____/ /_     / /_  __  __       / /___  / /_  ____     / ___/____  ____ _/ /_  _____
 / / __/ __ \/ /_  / ___/ _ \/ __ \/ ___/ __ \   / __ \/ / / /  __  / / __ \/ __ \/ __ \    \__ \/ __ \/ __ `/ __ \/ ___/
/ /_/ / /_/ / __/ / /  /  __/ / / / /__/ / / /  / /_/ / /_/ /  / /_/ / /_/ / / / / / / /   ___/ / /_/ / /_/ / / / / /    
\____/\____/_/   /_/   \___/_/ /_/\___/_/ /_/  /_.___/\__, /   \____/\____/_/ /_/_/ /_/   /____/ .___/\__,_/_/ /_/_/     
                                                     /____/                                   /_/                        

Copyright (c) John Spahr, 2019-2023. 
*/

//declare conversation starter lists
var noviceList = ["Comment ça va?", "Comment t'appelles-tu?", "Quel âge as-tu?", "Où habites-tu?", "Quelle est ta nationalité?", "Quelle est ta couleur préférée?", "Quel est ton animal préféré?", "Qu'est-ce que tu aimes manger?", "Quelle est ta matière préférée à l'école?", "Quel est ton sport préféré?", "Quel est ton film préféré?", "Quelle est ta chanson préférée?", "Qu'est-ce que tu aimes faire pendant ton temps libre?", "As-tu des frères et sœurs?", "Quels sont tes loisirs préférés?", "Quel est ton dessin animé préféré?", "Quelle est ta saison préférée?", "Quel est ton jour préféré de la semaine?", "Qu'est-ce que tu portes aujourd'hui?", "Quel temps fait-il aujourd'hui?", "Qu'est-ce que tu as mangé pour le petit déjeuner?", "Qu'est-ce que tu as fait le week-end dernier?", "Quel est ton endroit préféré pour te détendre?", "Qu'est-ce que tu veux faire quand tu seras plus grand(e)?", "Quel est ton livre préféré?", "Quel est ton jeu préféré?", "Quelle est ta fête préférée?", "Quel est ton plat préféré?", "Qu'est-ce que tu n'aimes pas manger?", "Quel est ton animal domestique préféré?", "Qu'est-ce que tu aimes regarder à la télévision?", "Quel est ton superhéros préféré?", "Quelle est ta boisson préférée?", "Quelle est ta voiture de rêve?", "Quelle est ta ville préférée?", "Qu'est-ce que tu aimes faire avec tes amis?", "Qu'est-ce que tu n'aimes pas faire à l'école?", "Quelle est ta chanson préférée en ce moment?", "Qu'est-ce que tu veux apprendre à l'école cette année?", "Quel est ton pays préféré?", "Quelle est ta fête préférée?", "Quel est ton acteur/actrice préféré(e)?", "Quelle est ta matière préférée à l'école?", "Qu'est-ce que tu as fait pendant les vacances?", "Quelle est ta destination de voyage de rêve?", "Quel est ton instrument de musique préféré?", "Qu'est-ce que tu aimes porter quand il fait froid?", "Quel est ton jeu de société préféré?", "Quelle est ta série télévisée préférée?", "Qu'est-ce que tu aimes faire quand il pleut?", "Quelle est ta chanson préférée pour danser?", "Qu'est-ce que tu aimes faire pendant l'été?", "Quel est ton légume préféré?", "Qu'est-ce que tu as fait hier soir?", "Quel est ton magasin préféré?", "Quelle est ta couleur préférée pour les vêtements?", "Quel est ton fruit préféré?", "Qu'est-ce que tu aimes faire le matin?", "Quel est ton restaurant préféré?", "Quel est ton passe-temps préféré?", "Qu'est-ce que tu aimes faire à la plage?", "Quelle est ta chanson préférée pour chanter?", "Qu'est-ce que tu aimes faire quand il fait chaud?", "Quel est ton restaurant préféré?", "Quelle est ta fête préférée de l'année?", "Qu'est-ce que tu aimes faire à Noël?", "Quelle est ta matière préférée à l'école?", "Quel est ton film préféré?", "Qu'est-ce que tu aimes faire quand tu es seul(e)?", "Quel est ton animal préféré au zoo?", "Quelle est ta chanson préférée pour te détendre?", "Qu'est-ce que tu aimes faire avant de dormir?", "Quel est ton dessert préféré?", "Quelle est ta boisson préférée en été?", "Qu'est-ce que tu aimes faire quand tu es triste?", "Quel est ton jeu vidéo préféré?", "Quelle est ta saison préférée pour les activités en plein air?", "Qu'est-ce que tu aimes faire quand tu es content(e)?", "Quel est ton personnage de dessin animé préféré?", "Quelle est ta chanson préférée en français?", "Qu'est-ce que tu aimes faire quand tu es en vacances?", "Quel est ton repas préféré de la journée?", "Quelle est ta couleur préférée pour les chaussures?", "Quel est ton acteur/actrice français(e) préféré(e)?", "Qu'est-ce que tu aimes faire quand tu es stressé(e)?", "Quelle est ta chanson préférée pour faire du sport?", "Quel est ton animal préféré dans la nature?", "Quelle est ta fête préférée en France?", "Qu'est-ce que tu aimes faire quand tu es en colère?", "Quel est ton endroit préféré dans ta ville?", "Quelle est ta chanson préférée pour te motiver?", "Qu'est-ce que tu aimes faire quand tu es ennuyé(e)?", "Quel est ton livre préféré en français?", "Quelle est ta saison préférée pour les activités en intérieur?", "Qu'est-ce que tu aimes faire quand tu es fatigué(e)?", "Quel est ton repas français préféré?", "Quelle est ta couleur préférée pour les accessoires?", "Quel est ton sport français préféré?", "Qu'est-ce que tu aimes faire quand il pleut?", "Quel est ton monument français préféré?"];
var difficultList = ["Qu'est-ce qui te plaît le plus dans ton pays d'origine?", "Quelles sont tes activités préférées pendant le weekend?", "Quelle est ta plus grande réalisation jusqu'à présent?", "Quel est le dernier film français que tu as regardé?", "Quel est ton artiste ou groupe de musique préféré?", "Qu'est-ce qui t'inspire dans la vie?", "Quelles sont tes vacances de rêve?", "Quelle est ta série télévisée préférée en ce moment?", "Quel est le dernier livre que tu as lu et recommanderais-tu?", "Qu'est-ce qui te motive à apprendre le français?", "Quelle est ta plus grande passion dans la vie?", "Quel est ton plat français préféré?", "Quel est ton endroit préféré en France et pourquoi?", "Quelle est la meilleure expérience de voyage que tu aies jamais eue?", "Quelles sont tes activités préférées pour te détendre après une journée chargée?", "Quels sont tes projets pour l'avenir?", "Quels sont tes hobbies créatifs préférés?", "Quelle est la dernière exposition ou le dernier musée que tu as visité?", "Quelle est ta fête ou célébration préférée?", "Quelle est ta plus grande peur et comment la surmontes-tu?", "Quels sont les aspects de la culture française qui t'intéressent le plus?", "Quel est ton sport préféré à regarder ou à pratiquer?", "Quelles sont tes compétences ou talents uniques?", "Quelle est la dernière chanson française que tu as découverte et appréciée?", "Quels pays francophones est-ce que tu voudrais visiter?", "Quels sont les endroits en France que tu aimerais visiter à l'avenir?", "Quelle est ta plus grande source d'inspiration artistique?", "Quelle est ta citation préférée et pourquoi elle te parle?", "Quels sont tes restaurants ou cafés préférés?", "Qu'est-ce qui te rend vraiment heureux(se) dans la vie?", "Quels sont tes objectifs linguistiques pour améliorer ton français?", "Quelle est la dernière pièce de théâtre que tu as vue et comment l'as-tu trouvée?", "Quels sont tes sujets de conversation préférés lors d'une soirée entre amis?", "Quel est le meilleur conseil que tu aies jamais reçu?", "Quelles sont tes activités préférées pour rester en forme et en bonne santé?", "Quelle est ta plus grande source de motivation pour atteindre tes objectifs?", "Quels sont tes endroits préférés pour sortir en soirée?", "Quels sont tes films français préférés et pourquoi les recommandes-tu?", "Qu'est-ce que tu aimes le plus à l’école?", "Quel est le dernier événement culturel ou festival auquel tu as assisté?", "Quels sont tes endroits préférés pour faire du shopping?", "Quelle est la dernière pièce musicale ou concert auquel tu as assisté?", "Qu'est-ce que tu apprécies le plus dans ta relation avec tes amis proches?", "Quels sont les traits de caractère que tu admires le plus chez les autres?", "Quelle est la dernière activité bénévole à laquelle tu as participé?", "Quels sont tes rêves ou aspirations pour le futur?", "Quelle est la dernière nouvelle ou découverte scientifique qui t'a intéressé(e)?", "Quels sont tes endroits préférés pour profiter de la nature en France?", "Quelle est la dernière pièce de théâtre ou comédie musicale que tu as appréciée?", "Quels sont tes projets de voyage pour l’avenir?", "Quel est ton plat ou dessert français préféré?", "Quelle est ta plus grande réussite dans l'apprentissage du français?", "Quels seraient tes endroits préférés pour faire du tourisme historique en France?", "Quelle est la dernière exposition artistique ou galerie que tu as visitée?", "Quels sont tes conseils pour ceux qui veulent améliorer leur niveau de français?", "Quelle est la dernière découverte littéraire ou poétique qui t'a marqué(e)?", "Quels sont tes endroits préférés pour pratiquer des activités de plein air?", "Quelle est la dernière activité culturelle ou artistique à laquelle tu as participé?", "Quels sont tes projets de bénévolat ou d'engagement social pour l'avenir?", "Quelle est la dernière série télévisée française que tu as regardée et recommanderais-tu?", "Quels sont tes restaurants préférés pour découvrir la cuisine d’un autre pays?", "Quelle est la dernière découverte scientifique ou technologique qui t'a impressionné(e)?", "Quels sont tes objectifs personnels ou professionnels pour les prochains mois?", "Quelle est la dernière œuvre d'art ou installation artistique qui t'a inspiré(e)?", "Quels sont tes endroits préférés pour profiter des paysages naturels?", "Quelle est la dernière conférence ou événement intellectuel auquel tu as assisté?", "Quels sont tes projets pour t'impliquer dans des activités culturelles en France?", "Quelle est la dernière chanson française que tu as écoutée?", "Quels sont tes endroits préférés pour pratiquer des sports nautiques?", "Quelle est la dernière découverte culinaire ou recette que tu as essayée?", "Quels sont tes projets pour contribuer à des causes sociales ou environnementales?", "Quelle est la dernière pièce de théâtre classique ou contemporaine que tu as vue?", "Quels sont tes endroits préférés pour explorer?", "Quelle est la dernière avancée médicale ou de santé qui t'intéresse particulièrement?", "Quels sont tes projets pour participer à des événements culturels ou festivals?", "Quelle est la dernière chanson française que tu as utilisée pour améliorer ton écoute?", "Quels sont tes endroits préférés pour faire des randonnées?", "Quelle est la dernière découverte historique ou archéologique qui t'a captivé(e)?", "Est-ce que tu aimes des artistes émergents ou alternatifs?", "Quelle est la dernière pièce de musique classique ou contemporaine que tu as écoutée?", "Quels sont tes endroits préférés pour pratiquer des sports d'hiver?", "Quelle est la dernière avancée technologique ou innovation qui t'intéresse?", "Quels sont tes projets pour élargir tes connaissances sur la culture française?", "Quelle est la dernière série télévisée française que tu as utilisée pour améliorer ton français?", "Quels sont tes endroits préférés pour visiter des monuments historiques en France?", "Quelle est la dernière découverte environnementale ou écologique qui t'a marqué(e)?", "Quels sont tes projets pour participer à des événements sportifs en France?", "Quelle est la dernière chanson française que tu as utilisée pour améliorer ta prononciation?", "Quels sont tes endroits préférés pour profiter de la gastronomie française en France?", "Quelle est la dernière avancée scientifique ou technologique française qui t'a impressionné(e)?", "Quels sont tes projets pour découvrir des œuvres d'art contemporain?", "Quelle est la dernière pièce de musique française que tu as utilisée pour améliorer ton vocabulaire?", "Quels sont tes endroits préférés pour explorer des parcs naturels?", "Quelle est la dernière découverte littéraire ou poétique française qui t'a touché(e)?", "Quels sont tes projets pour assister à des festivals de musique?", "Quelle est la dernière chanson française que tu as utilisée pour améliorer ta compréhension orale?", "Quels sont tes endroits préférés pour découvrir des villages pittoresques en France?"];
var bonusList = ["Quelle est votre chanson préférée? Pourquoi l'aimes tu?", "Quelles ont été les meilleures vacances que vous ayez jamais eues?", "Qu'est-ce que tu préfères faire dans la voiture?", "Si vous pouviez être n'importe où en ce moment, où seriez-vous? Que feriez-vous?", "Parlez-moi des meilleurs et des pires moments de votre journée.", "À quel jeu préférez-vous jouer?", "Si tu pouvais être un animal, lequel serais-tu et pourquoi?", "Quelle est votre céréale préférée? Pourquoi?", "Quel est le visage le plus stupide que vous puissiez faire?", "Où aimes-tu aller en voiture?", "Êtes-vous plutôt chat ou chien?", "Vous considérez-vous comme un extraverti ou d’une introvertir?", "Peux-tu me parler de ton talent caché le plus fou?", "Quel aspect de votre vie vous donne le plus de satisfaction?", "Dans cinq ans, où veux-tu être?", "Quel super pouvoir aimerais-tu avoir?", "Si vous n'aviez pas d'argent, où iriez-vous vacances?", "Dans quelle décennie aimeriez-vous vivre si vous pouviez voyager dans le temps?", "Que feriez-vous si vous n'aviez qu'un an à vivre?", "Croyez-vous en une sorte d'au-delà?"]

function goHome() {
    //navigate to index
    window.location.href = 'index.html';
}

function noviceQuestion() {
    //pick random item from novice question list and display it
    document.getElementById("convoLbl").innerText = '"' + noviceList[Math.floor(Math.random() * noviceList.length)] + '"';
}

function difficultQuestion() {
    //pick random item from difficult question list and display it
    document.getElementById("convoLbl").innerText = '"' + difficultList[Math.floor(Math.random() * difficultList.length)] + '"';
}

function bonusQuestion() {
    //pick random item from bonus question list and display it
    document.getElementById("convoLbl").innerText = '"' + bonusList[Math.floor(Math.random() * bonusList.length)] + '"';
}