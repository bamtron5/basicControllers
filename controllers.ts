namespace App.controllers {
  export class ContactList {
    contacts;
    constructor(
      private $http,
      CONTACTS
    ) {
      this.contacts = CONTACTS;
    }
  }
  ContactList.$inject = ['$http', 'CONTACTS'];

  export class ContactDetails {
    contact;
    constructor(
      private $http,
      CONTACTS,
      $stateParams
    ) {
      this.contact = CONTACTS.filter((contact) => contact.firstName === $stateParams['firstName'])[0] || 'No contact found';
    }
  }
  ContactDetails.$inject = ['$http', 'CONTACTS', '$stateParams'];

  angular.module('app').controller('ContactList', ContactList);
  angular.module('app').controller('ContactDetails', ContactDetails);
}
