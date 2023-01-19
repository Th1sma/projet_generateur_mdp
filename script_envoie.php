<?php
    /**Envoie ton formulaire par Mail grace a l'API MailJet
     * Le code source est dispo dans la doc de l'API fourni par MailJet
     */
    require_once(__DIR__.'/vendor/autoload.php');
    use \Mailjet\Resources;

    define('API_USER', 'b57a157bfdfbf8730f3277838b38c293');
    define('API_LOGIN', '8b0f29510d0548c38ce1cb5aa9151aaa');
    $mj = new \Mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);

    // Envoie du mail
    if(isset ($_POST['envoyer'])){

        // Récupère les données du formulaire
        $nom = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        $body = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => "mathis.niveau17@gmail.com",
                        'Name' => "$nom"
                    ],
                    'To' => [
                        [
                            'Email' => "mathis.niveau17@gmail.com",
                            'Name' => "Mathis"
                        ]
                    ],
                    'Subject' => "Informations",
                    'TextPart' => "$message",
                ]
            ]
        ];
        $response = $mj->post(Resources::$Email, ['body' => $body]);
        $response->success() && var_dump($response->getData());
        echo "<h2> Le mail a été envoyé avec succès ! </h2>";

    }else{

        echo "<p>Vous n'avez pas envoyé le formulaire !</p>";

    }
    die();
?>