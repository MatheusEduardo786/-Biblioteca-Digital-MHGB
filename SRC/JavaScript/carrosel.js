// Pegando a UL ou OL onde os livros vão ficar
const carrosel = document.getElementById("carrosel_indicação");

const carroselModal = document.getElementById("carrosel_indicação_modal");

const carroselMaisPedidos = document.getElementById("carrosel_maisPedidos");

const cMaisPedidosModal = document.getElementById("carrosel_maisPedidos_modal");

// PLATAFORMA LEIA

const listaLeia = document.getElementById("topicos_lista_leia");
const filtroAno = document.getElementById("filtro-ano");
const resultadoLeia = document.getElementById("leia-resultado");
const mensagemVazia = document.getElementById("leia-vazio");
const botaoMostrarTodos = document.getElementById("leia-mostrar-todos");

const gruposLeia = {
    fundamental: [
        "sexto_ano",
        "setimo_ano",
        "oitavo_ano",
        "nono_ano"
    ],
    medio: [
        "primeiro_ano",
        "segundo_ano",
        "terceiro_ano"
    ]
};

function renderizarLivros(filtro = "todos") {
    listaLeia.replaceChildren();

    const livrosFiltrados = plataformaLeia.filter((livro) => {
        if (filtro === "todos") {
            return true;
        }

        if (filtro === "fundamental" || filtro === "medio") {
            return gruposLeia[filtro].includes(livro.color);
        }

        return livro.color === filtro;
    });

    livrosFiltrados.forEach((livro) => {
        const item = document.createElement("li");
        item.classList.add("topicos_item", livro.color);

        const titulo = document.createElement("h3");
        titulo.classList.add("leia-livro-titulo");
        titulo.textContent = livro.topicos_item;

        const link = document.createElement("a");
        link.classList.add("topicos_link");
        link.href = livro.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Acessar livro";

        item.append(titulo, link);
        listaLeia.appendChild(item);
    });

    resultadoLeia.textContent =
        `${livrosFiltrados.length} livro(s) encontrado(s).`;

    mensagemVazia.hidden = livrosFiltrados.length !== 0;
}

// Filtro por ano escolar
filtroAno.addEventListener("change", () => {
    renderizarLivros(filtroAno.value);
});

// Atalhos dos cards
document.querySelectorAll("[data-grupo]").forEach((botao) => {
    botao.addEventListener("click", () => {
        const grupo = botao.dataset.grupo;

        filtroAno.value = "todos";
        renderizarLivros(grupo);

        document.getElementById("titulo-lista-leia").textContent =
            grupo === "fundamental"
                ? "Livros do Ensino Fundamental"
                : "Livros do Ensino Médio";

        document.getElementById("leia-instrucao").textContent =
            grupo === "fundamental"
                ? "Obras disponíveis do 6º ao 9º ano."
                : "Obras disponíveis do 1º ao 3º ano.";

        document.getElementById("plataforma-leia")
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Voltar à lista completa
botaoMostrarTodos.addEventListener("click", () => {
    filtroAno.value = "todos";

    document.getElementById("titulo-lista-leia").textContent =
        "Livros do bimestre";

    document.getElementById("leia-instrucao").textContent =
        "Selecione sua etapa escolar ou filtre por ano.";

    renderizarLivros();
});

// Exibir todos os livros ao abrir a página
renderizarLivros();

// Gerando HTML dinamicamente
livrosCarrosel.forEach(livro => {
  carrosel.innerHTML += `

  <!-- Slide 1 -->
      <div class="swiper-slide">
        <img src="${livro.imagem}"
              class="btn btn-link"
              tabindex="0"
              role="button"
              aria-label="${livro.label}"
              data-bs-toggle="modal"
              data-bs-target="#${livro.modalId}"
              alt="${livro.alt}" />
      </div>
  `;
});

livrosCarroselMaisPedido.forEach(livro => {
    carroselModal.innerHTML += `


    <!-- Modal -->


    <div class="modal fade" id="${livro.modalId}" tabindex="-1" aria-labelledby="modal1Title" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title descrição_titulo" id="modal1Title">${livro.titulo}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
      </div>

      <div class="modal-body">
        <img src="${livro.imagem}" class=class="img-fluid w-100" alt="Eu Sou Malala">
        <p class="descrição_titulo">${livro.descrição2}</p>
        <br>
        <p class="descrição_titulo descricao-curta">${livro.descrição.substring(0, 120)}...</p>
        <p class="descrição_titulo descricao-completa" style="display:none;">${livro.descrição}</p>
        <button class="btn btn-link ver-mais-modal">Ver mais</button>
      </div>

      <div class="modal-footer">
        <a href="${livro.link}" class="btn btn-primary" target="_blank"> <i class="bi bi-book"></i> Ler</a>
        <!-- 
        <a href="https://github.com/MatheusAnimacaoCraft/o-sliding-puzzle-3x3-n-meros" class="btn btn-secondary" target="_blank">Ver código do projeto</a> -->
      </div>

    </div>
  </div>
</div>
    
    
    `
});

// Gerando HTML dinamicamente
livrosCarroselMaisPedido.forEach(livro => {
  carroselMaisPedidos.innerHTML += `

  <!-- Slide -->
      <div class="swiper-slide">
        <img src="${livro.imagem}"
              class="btn btn-link"
              tabindex="0"
              role="button"
              aria-label="${livro.label}"
              data-bs-toggle="modal"
              data-bs-target="#${livro.modalId}"
              alt="${livro.alt}" />
      </div>
  `;
});

livrosCarrosel.forEach(livro => {
    cMaisPedidosModal.innerHTML += `


    <!-- Modal -->


    <div class="modal fade" id="${livro.modalId}" tabindex="-1" aria-labelledby="modal1Title" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title descrição_titulo" id="modal1Title">${livro.titulo}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
      </div>

      <div class="modal-body">
        <img src="${livro.imagem}" class=class="img-fluid w-100" alt="Eu Sou Malala">
        <p class="descrição_titulo">${livro.descrição2}</p>
        <br>
        <p class="descrição_titulo descricao-curta">${livro.descrição.substring(0, 120)}...</p>
        <p class="descrição_titulo descricao-completa" style="display:none;">${livro.descrição}</p>
        <button class="btn btn-link ver-mais-modal">Ver mais</button>
      </div>

      <div class="modal-footer">
        <a href="${livro.link}" class="btn btn-primary" target="_blank"> <i class="bi bi-book"></i> Ler</a>
        <!-- 
        <a href="https://github.com/MatheusAnimacaoCraft/o-sliding-puzzle-3x3-n-meros" class="btn btn-secondary" target="_blank">Ver código do projeto</a> -->
      </div>

    </div>
  </div>
</div>
    
    
    `
});

// ver mais

document.addEventListener("click", e => {
  if (e.target.classList.contains("ver-mais-modal")) {
    const modal = e.target.closest(".modal-body");
    const completa = modal.querySelector(".descricao-completa");
    const curta = modal.querySelector(".descricao-curta");

    if (completa.style.display === "none") {
      completa.style.display = "block";
      curta.style.display = "none";
      e.target.textContent = "Ver menos";
    } else {
      completa.style.display = "none";
      curta.style.display = "block";
      e.target.textContent = "Ver mais";
    }
  }
});