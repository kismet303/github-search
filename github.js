class Github {
  constructor() {
    this.client_id = 'd1240a1408550771c4b1f';
    this.client_secret = '523a1400ce4e69d9aa61fe033cd73b77496dee43';
  }

  async getUser(user) {
    const profileResponse = await 
    fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}