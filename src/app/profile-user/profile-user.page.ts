import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.page.html',
    styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

    constructor() {
    }

    user =
        {
            "id": 1,
            "userImage": "./assets/project/img/user/Muster.jpeg",
            "username": "Max Mustermann",
            "geburtsdatum": "00.00.0000",
            "adresse": "Straße HausNummer, PLZ Stadt",
            "experience": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
                "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo" +
                " dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " +
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet " +
                "clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            "emailAddress": "muster@web.de",
            "tel": "01234567890",
            "basicInformation": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
                "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo" +
                " dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " +
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet " +
                "clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }
    
            ;

    ngOnInit() {
    }
}
