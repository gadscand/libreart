const translations = {
    en: {
	navArchive: "Archive", navAbout: "About", navSubmit: "Submit work ↗", eyebrow: "Independent art archive",
	heroTitle: "Made by hand.", heroDescription: "A growing home for sketches, experiments, and finished work by independent artists.", explore: "Explore the archive",
	collection: "The collection", recentWork: "Recent work", archiveNote: "No generators.<br>Only original work.", allWork: "All work", emptyState: "No work in this category yet.", Sketchbook: "Sketchbook", Painting: "Painting", Digital: "Digital", Photography: "Photography", Other: "Other", invalidImageLink: "Please use a valid Pasteboard link.",
	manifestoLabel: "Our small manifesto", manifestoTitle: "The unfinished, the personal,<br><em>the unmistakably human.</em>", manifestoCopy: "Libreart supports human development and creativity through conscious use of technology. We value open-source software, free knowledge, and fair compensation for artists and developers. Our digital community is collaborative and may one day formalize as a cooperative in Brazil.", affiliation: "Libreart is currently presented by Human Thinkers Group (HTG), linked to G A D Solution C.",
	submitLabel: "Add to the archive", submitTitle: "Show us what<br><em>you are making.</em>", submitIntro: "Upload your image to Pasteboard first. Then prepare an Issue for the Libreart repository.", artistName: "Artist name", workTitle: "Work title", category: "Category", imageLink: "Pasteboard image link", imageLinkPlaceholder: "https://pasteboard.co/...", aFewWords: "A few words", chooseOne: "Choose one", Other: "Other", artistPlaceholder: "Your name", titlePlaceholder: "Name this piece", descriptionPlaceholder: "What should people know about this work?", formNote: "The organization reviews submissions and adds approved work to the archive.", prepareSubmission: "Open Issue draft ↗", footerDescription: "Independent work, shared openly.", footerNote: "Human creativity, shared openly.", submissionReady: "The Issue draft is ready. Review it and submit it to the Libreart repository."
    },
    pt: {
	navArchive: "Arquivo", navAbout: "Sobre", navSubmit: "Enviar trabalho ↗", eyebrow: "Arquivo de arte independente",
	heroTitle: "Feita à mão.", heroDescription: "Um espaço para esboços, experimentos e trabalhos finalizados de artistas independentes.", explore: "Explorar o arquivo",
	collection: "A coleção", recentWork: "Trabalhos recentes", archiveNote: "Sem geradores.<br>Apenas trabalhos originais.", allWork: "Todos", emptyState: "Ainda não há trabalhos nesta categoria.", Sketchbook: "Caderno", Painting: "Pintura", Digital: "Digital", Photography: "Fotografia", Other: "Outro", invalidImageLink: "Use um link válido do Pasteboard.",
	manifestoLabel: "Nosso pequeno manifesto", manifestoTitle: "O inacabado, o pessoal,<br><em>o inequivocamente humano.</em>", manifestoCopy: "A Libreart apoia o desenvolvimento humano e a criatividade por meio do uso consciente da tecnologia. Valorizamos software open-source, conhecimento livre e remuneração justa para artistas e desenvolvedores. Nossa comunidade digital é colaborativa e poderá, no futuro, se formalizar como cooperativa no Brasil.", affiliation: "A Libreart é atualmente apresentada pelo Human Thinkers Group (HTG), ligado à G A D Solution C.",
	submitLabel: "Adicionar ao arquivo", submitTitle: "Mostre o que<br><em>você está criando.</em>", submitIntro: "Primeiro, envie sua imagem para o Pasteboard. Depois, prepare um Issue para o repositório do Libreart.", artistName: "Nome do artista", workTitle: "Título do trabalho", category: "Categoria", imageLink: "Link da imagem no Pasteboard", imageLinkPlaceholder: "https://pasteboard.co/...", aFewWords: "Algumas palavras", chooseOne: "Escolha uma", Other: "Outro", artistPlaceholder: "Seu nome", titlePlaceholder: "Dê um nome à peça", descriptionPlaceholder: "O que as pessoas devem saber sobre este trabalho?", formNote: "A organização revisará as submissões e adicionará os trabalhos aprovados ao arquivo.", prepareSubmission: "Abrir rascunho do Issue ↗", footerDescription: "Trabalho independente, compartilhado abertamente.", footerNote: "Criatividade humana, compartilhada abertamente.", submissionReady: "O rascunho do Issue está pronto. Revise e envie-o para o repositório do Libreart."
    },
    es: {
	navArchive: "Archivo", navAbout: "Acerca de", navSubmit: "Enviar obra ↗", eyebrow: "Archivo de arte independiente",
	heroTitle: "Hecho a mano.", heroDescription: "Un espacio para bocetos, experimentos y obras terminadas de artistas independientes.", explore: "Explorar el archivo",
	collection: "La colección", recentWork: "Obras recientes", archiveNote: "Sin generadores.<br>Solo obras originales.", allWork: "Todo", emptyState: "Aún no hay obras en esta categoría.", Sketchbook: "Cuaderno", Painting: "Pintura", Digital: "Digital", Photography: "Fotografía", Other: "Otro", invalidImageLink: "Usa un enlace válido de Pasteboard.",
	manifestoLabel: "Nuestro pequeño manifiesto", manifestoTitle: "Lo inacabado, lo personal,<br><em>lo indiscutiblemente humano.</em>", manifestoCopy: "Libreart apoya el desarrollo humano y la creatividad mediante un uso consciente de la tecnología. Valoramos el software open-source, el conocimiento libre y una remuneración justa para artistas y desarrolladores. Nuestra comunidad digital es colaborativa y podría formalizarse como cooperativa en Brasil en el futuro.", affiliation: "Libreart es presentado actualmente por Human Thinkers Group (HTG), vinculado a G A D Solution C.",
	submitLabel: "Añadir al archivo", submitTitle: "Muéstranos lo que<br><em>estás creando.</em>", submitIntro: "Primero, sube tu imagen a Pasteboard. Después, prepara un Issue para el repositorio de Libreart.", artistName: "Nombre del artista", workTitle: "Título de la obra", category: "Categoría", imageLink: "Enlace de imagen de Pasteboard", imageLinkPlaceholder: "https://pasteboard.co/...", aFewWords: "Unas palabras", chooseOne: "Elige una", Other: "Otro", artistPlaceholder: "Tu nombre", titlePlaceholder: "Ponle un nombre a esta obra", descriptionPlaceholder: "¿Qué debería saber la gente sobre esta obra?", formNote: "La organización revisará los envíos y añadirá las obras aprobadas al archivo.", prepareSubmission: "Abrir borrador del Issue ↗", footerDescription: "Obra independiente, compartida abiertamente.", footerNote: "Creatividad humana, compartida abiertamente.", submissionReady: "El borrador del Issue está listo. Revísalo y envíalo al repositorio de Libreart."
    }
};

const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const title = document.querySelector("#hero-title");
const manifestoTitle = document.querySelector("#manifesto-title");
const submitTitle = document.querySelector("#submit-title");

function setLanguage(language) {
    const copy = translations[language];
    document.documentElement.lang = language;
    translatableElements.forEach((element) => {
	element.innerHTML = copy[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
	element.placeholder = copy[element.dataset.i18nPlaceholder];
    });
    title.innerHTML = `${copy.heroTitle}<br><em>${language === "en" ? "Shared freely." : language === "pt" ? "Compartilhada livremente." : "Compartida libremente."}</em>`;
    manifestoTitle.innerHTML = copy.manifestoTitle;
    submitTitle.innerHTML = copy.submitTitle;
    languageButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.language === language));
    localStorage.setItem("libreart-language", language);
}

languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
setLanguage(localStorage.getItem("libreart-language") || "pt");

const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".art-card");
const emptyState = document.querySelector("#empty-state");

filters.forEach((filter) => {
    filter.addEventListener("click", () => {
	const selected = filter.dataset.filter;
	filters.forEach((item) => item.classList.toggle("is-active", item === filter));

	let visible = 0;
	cards.forEach((card) => {
	    const matches = selected === "All" || card.dataset.category === selected;
	    card.hidden = !matches;
	    if (matches) visible += 1;
	});
	emptyState.hidden = visible !== 0;
    });
});

const form = document.querySelector("#submission-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const imageUrl = data.get("imageUrl").trim();

    if (!imageUrl.startsWith("https://www.pasteboard.co/")) {
        const language = localStorage.getItem("libreart-language") || "pt";
        status.textContent = translations[language].invalidImageLink;
        return;
    }

    const artist = data.get("artist");
    const title = data.get("title");
    const category = data.get("category");
    const description = data.get("description");

    const emailBody = `
- Title: ${title}
- Author: ${artist}
- Category: ${category}
- Image: ${imageUrl}
- Description: ${description}
`;

    const subject = `Libreart Submission - ${title}`;
    const email = "szacnd@gmail.com";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    const language = localStorage.getItem("libreart-language") || "pt";
    status.textContent = translations[language].submissionReady;
});
