export const WhatsAppMessage = (number: string, request: string) => {
    // Datos del destinatario y mensaje personalizado
    const mensajePersonalizado = `Hola *CLUB AFS*.\nQuisiera que me brinden *mayor información* sobre lo siguiente:\n\n*${request}*`;

    // URL de WhatsApp con el mensaje codificado
    const mensajeCodificado = encodeURIComponent(mensajePersonalizado);
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${number}&text=${mensajeCodificado}`;
    console.log(urlWhatsApp);
    // Abre la ventana de WhatsApp con el mensaje personalizado
    window.open(urlWhatsApp);
}