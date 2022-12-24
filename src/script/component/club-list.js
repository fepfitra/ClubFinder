import './club-item.js';

class ClubList extends HTMLElement {
  constructor (){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'});
  }
  set clubs(clubs){
    this._clubs = clubs;
    this.render();
  }
  
  render(){
    this.shadowDWOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -noz-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this._clubs.forEach(club => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club;
      this.appendChild(clubItemElement);
    });
  }

  renderError(message){
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('club-list', ClubList);
