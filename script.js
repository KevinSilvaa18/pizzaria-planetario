// Arquivo de Interatividade Front-End - Pizzaria Planetário

console.log("🚀 Sistema Front-End da Pizzaria Planetário carregado com sucesso!");

/**
 * Função acionada ao clicar em "+ Pedir" nos itens do cardápio.
 * Exibe um alerta visual amigável e redireciona o cliente para o sistema oficial de delivery.
 * @param {string} nomeProduto 
 */
function adicionarAoCarrinho(nomeProduto) {
    // Exibe uma notificação amigável no navegador
    alert(`🌌 "${nomeProduto}" selecionado!\nVocê será redirecionado para o nosso sistema de pedidos online para finalizar.`);

    // Link oficial do Delivery Direto fornecido pela pizzaria
    const linkDelivery = "https://deliverydireto.com.br/pizzariaplanetario/pizzariaplanetario?s=w";

    // Redireciona o navegador do usuário para a página de pedidos
    window.open(linkDelivery, '_blank');
}

// Efeito de boas-vindas no Console do Desenvolvedor (F12)
window.addEventListener('DOMContentLoaded', () => {
    console.info("💡 Dica de Desenvolvedor: Este site foi construído com HTML5, Tailwind CSS e JavaScript puro.");
});