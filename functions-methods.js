// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* DONE Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
// //Var 1.
// function getEmailDomain(emailadres) {
//     const indexAtSign = emailadres.indexOf("@")
//     const domain = emailadres.substring(indexAtSign + 1)
//     return domain;
//     }
// // Var 2.
// // function getEmailDomain(email) {
// //     const domain = email.substring(email.lastIndexOf("@") + 1);
// //     return domain
// // }
//
// console.log(getEmailDomain("n.eeken@novi-education.nl"))
// console.log(getEmailDomain("t.mellink@novi.nl"))
// console.log(getEmailDomain("a.wiersma@outlook.com"))
//


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

//Variant 1 -te bespreken met Sam
function typeOfEmail(emailadres) {
    const indexAtSign = emailadres.indexOf("@")
    const domainName = emailadres.substring(indexAtSign + 1)
         if (domainName === "novi-education.nl") {
           return "Student"
        } else if (domainName === "novi.nl") {
           return "Medewerker"
        } else {
           return "Extern"
        }
    }

console.log(typeOfEmail("n.eeken@novi-education.nl"))
console.log(typeOfEmail("t.mellink@novi.nl"))
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))
console.log(typeOfEmail("a.wiersma@outlook.com"))

//Variant 2.
//     const domain = domainName;
//         switch (domain) {
//             case "novi.nl":
//                 return "Medewerker"
//             case "novi-education.nl":
//                 return "Student"
//             case "outlook.com":
//                 return "Extern"
//             default:
//                 return "Er is onjuist formaat van de email gekozen"
//         }
// }
//
// console.log(typeOfEmail("n.eeken@novi-education.nl"))
// console.log(typeOfEmail("t.mellink@novi.nl"))
// console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))
// console.log(typeOfEmail("a.wiersma@outlook.com"))



/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
function checkEmailValidity(emailadres) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //deze variant is op het internet gevonden: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 return re.test(emailadres);
}

console.log(checkEmailValidity("n.eeken@novi.nl"))
console.log(checkEmailValidity("tessmellink@novi.nl"))
console.log(checkEmailValidity("n.eekenanovi.nl"))
console.log(checkEmailValidity("n.eeken@novinl."))
console.log(checkEmailValidity("tessmellink@novi,nl"))

