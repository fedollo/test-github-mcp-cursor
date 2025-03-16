// Test GitHub MCP Cursor
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script caricato con successo!');
    
    // Aggiungi data e ora corrente
    const dateElement = document.createElement('div');
    dateElement.className = 'date-info';
    dateElement.style.marginTop = '20px';
    dateElement.style.fontStyle = 'italic';
    dateElement.textContent = 'Pagina generata il: ' + new Date().toLocaleString();
    document.body.appendChild(dateElement);
    
    // Aggiungi un pulsante interattivo
    const button = document.createElement('button');
    button.textContent = 'Clicca qui';
    button.style.marginTop = '20px';
    button.style.padding = '10px 15px';
    button.style.backgroundColor = '#0366d6';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    
    button.addEventListener('click', function() {
        alert('Grazie per aver provato questo test!');
    });
    
    document.body.appendChild(button);
});