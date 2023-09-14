<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "estevamsouzalaureth@gmail.com"; // Endereço de e-mail de destino
    $headers = "From: $email";
    $message_body = "Nome: $name\nEmail: $email\nAssunto: $subject\nMensagem:\n$message";

    if (mail($to, "Formulário de Contato", $message_body, $headers)) {
        echo "Sua mensagem foi enviada com sucesso. Obrigado!";
    } else {
        echo "O envio da mensagem falhou. Por favor, tente novamente mais tarde.";
    }
} else {
    echo "Erro: Este script PHP deve ser acessado através do método POST.";
}
?>
