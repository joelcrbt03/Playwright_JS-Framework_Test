class POM_LOGINPAGE {
  constructor() {
    this.username = 'input[id=username]';
    this.password = 'input[id=password]';
    this.submit = 'button[id=submit]';
    this.error = 'div[id=error]';
    this.success = 'h1[class=post-title]';
    this.logoutBtn = "//a[text()='Log out']"
  }
}

module.exports = POM_LOGINPAGE;
